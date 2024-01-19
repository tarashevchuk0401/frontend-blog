import {CommonModule} from '@angular/common';
import {Component, OnInit, inject} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../../shared/types/article.interface';
import {nanoid} from 'nanoid';
import {Store} from '@ngrx/store';
import {selectCurrentUserData} from '../../../auth/store/reducers';
import {Storage} from '@angular/fire/storage';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {authActions} from '../../../auth/store/actions';
import {CurrentUserData} from '../../../shared/types/currentUser.interface';

@Component({
  selector: 'app-add-new-article',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-new-article.component.html',
  styleUrl: './add-new-article.component.scss',
})
export class AddNewArticleComponent implements OnInit {
  currentUserData: CurrentUserData | undefined | null;
  imageFile: any;
  imageName: string = 'Your new image';

  storage = inject(Storage);

  constructor(private articleService: ArticleService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser());

    this.store.select(selectCurrentUserData).subscribe((d) => {
      this.currentUserData = d;
    });
  }

  async createNewArticle(form: NgForm) {
    if (!this.currentUserData) {
      return;
    }

    let handledTags: string[] | null = null;

    if (form.value.tags) {
      handledTags = form.value.tags
        .replaceAll(',', ' ')
        .split(' ')
        .filter((i: string) => i !== '');
    }

    const newArticle: Article = {
      title: form.value.title,
      body: form.value.body.split('\n'),
      author: this.currentUserData.users[0].localId,
      authorEmail: this.currentUserData.users[0].email,
      createdAt: new Date(),
      likesQuantity: 0,
      isLikedByUser: false,
      id: nanoid(),
      tags: handledTags,
      updatedAt: undefined,
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/frontend-blog-angular.appspot.com/o/pexels-josh-sorenson-1714208.jpg?alt=media&token=e91b3b9f-a179-457c-a71c-fbd95e8225be',
    };

    if (this.imageFile) {
      const uploadTask = await uploadBytes(
        ref(this.storage, this.imageFile.name),
        this.imageFile
      );
      const url = await getDownloadURL(uploadTask.ref);
      newArticle.imageUrl = url;
    }

    this.articleService.addNewArticle(newArticle).subscribe((d: Article) => {
      console.log(d);
      form.reset();
      this.imageFile = null;
    });
  }

  uploadImage(event: any): void {
    this.imageFile = event.target.files[0];
    this.imageName = this.imageFile.name;
  }
}
