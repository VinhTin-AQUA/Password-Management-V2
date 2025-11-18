import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { QuestionCancelDialogStore } from '../../stores/question-cancel-dialog.store';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-question-cancel-dialog',
    imports: [TranslatePipe],
    templateUrl: './question-cancel-dialog.html',
    styleUrl: './question-cancel-dialog.scss',
})
export class QuestionCancelDialog {
    questionCancelDialogStore = inject(QuestionCancelDialogStore);

    @Output() confirm = new EventEmitter<void>();
    @Output() cancel = new EventEmitter<void>();
    @Output() closed = new EventEmitter<void>();

    onConfirm(): void {
        this.confirm.emit();
        this.close();
    }

    onCancel(): void {
        this.cancel.emit();
        this.close();
    }

    close(): void {
        this.closed.emit();
    }
}
