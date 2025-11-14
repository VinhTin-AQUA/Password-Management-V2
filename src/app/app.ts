import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './shared/services/language-service';
import { DialogService } from './shared/services/dialog-service';
import { Loader } from "./shared/components/loader/loader";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Loader],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected readonly title = signal('password-management');
    constructor(public dialogService: DialogService, private languageService: LanguageService) {}
}
