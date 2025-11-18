import { inject, Injectable, signal } from '@angular/core';
import { QuestionCancelDialogStore } from '../stores/question-cancel-dialog.store';

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    isShowLoadingDialog = signal<boolean>(false);
    isShowQuestionCancelDialog = signal<boolean>(false);

    questionCancelDialogStore = inject(QuestionCancelDialogStore);

    showLoadingDialog(flag: boolean) {
        this.isShowLoadingDialog.set(flag);
    }

    showQuestionCancelDialog(show: boolean, title: string, message: string, isSuccess: boolean) {
        this.isShowQuestionCancelDialog.set(show);
        this.questionCancelDialogStore.update(title, message, isSuccess);
    }
}
