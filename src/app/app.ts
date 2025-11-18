import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './shared/services/language-service';
import { DialogService } from './shared/services/dialog-service';
import { Loader } from "./shared/components/loader/loader";
import { QuestionCancelDialog } from './shared/components/question-cancel-dialog/question-cancel-dialog';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Loader, QuestionCancelDialog],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected readonly title = signal('password-management');
    constructor(public dialogService: DialogService, private languageService: LanguageService) {}
}
