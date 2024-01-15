import {CommonModule} from '@angular/common';
import {Component, OnInit, inject} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../../shared/types/article.interface';
import {nanoid} from 'nanoid';
import {Store} from '@ngrx/store';
import {selectCurrentUser} from '../../../auth/store/reducers';
import {AuthResponseInterface} from '../../../auth/types/authResponse.interface';
// import { AngularFireStorage } from '@angular/fire/compat/storage'
// import { Firestore } from '@angular/fire/firestore';
import {Storage} from '@angular/fire/storage';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';

@Component({
  selector: 'app-add-new-article',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-new-article.component.html',
  styleUrl: './add-new-article.component.scss',
})
export class AddNewArticleComponent implements OnInit {
  currentUser: AuthResponseInterface | undefined | null;
  imageFile: any;

  // fireStorage = inject(AngularFireStorage);
  // firestore: Firestore = inject(Firestore);
  storage: any = inject(Storage);

  constructor(private articleService: ArticleService, private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(selectCurrentUser)
      .subscribe((d) => (this.currentUser = d));
  }

  addNewArticle(form: NgForm) {
    if (!this.currentUser) {
      return;
    }
    const newArticle: Article = {
      title: form.value.title,
      body: form.value.body,
      author: this.currentUser.localId,
      createdAt: new Date(),
      likesQuantity: 0,
      isLikedByUser: false,
      id: nanoid(),
      tags: ['firstTag'],
      updatedAt: undefined,
    };
    this.articleService
      .addNewArticle(newArticle)
      .subscribe((d: Article) => console.log(d));
  }

  uploadImage(event: any): void {
    this.imageFile = event.target.files[0];
  }

  async addNewProduct(newProductForm: NgForm): Promise<void> {
    let newId: string = Math.floor(Math.random() * 1000000000 + 1).toString();
    let newImageUrl: string = '';

    if (this.imageFile) {
      let path = `${this.imageFile.name}`;
      const uploadTask = await uploadBytes(
        ref(this.storage, 's'),
        this.imageFile
      );
      const url = await getDownloadURL(uploadTask.ref);
      newImageUrl = url;
      console.log(newImageUrl);
    }
  }
}
