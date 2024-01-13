import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BackendError } from '../../types/backendError.interface';

@Component({
    selector: 'app-backend-error-messages',
    template: '<div class="error">{{errorMessages}} </div>',
    standalone: true,
    imports: [CommonModule],
})
export class BackendErrorMessages implements OnChanges {
    @Input() backendErrors: BackendError | null | undefined;

    errorMessages: string[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.backendErrors) {
            return;
        }
        this.errorMessages = [String(this.backendErrors).replace('_', ' ')]
        
    }

 
}
