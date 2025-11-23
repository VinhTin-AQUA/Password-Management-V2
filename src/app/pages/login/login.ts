import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AUTH_ROUTE, AuthRoutes, MAIN_ROUTE, MainRoutes } from '../../core/enums/routes.enum';
import { StoreHelper } from '../../shared/helpers/store-helper';
import { SettingKeys } from '../../core/enums/setting-keys';

@Component({
    selector: 'app-login',
    imports: [FormsModule, TranslatePipe],
    templateUrl: './login.html',
    styleUrl: './login.scss',
})
export class Login {
    password = '';
    savedPassCode: string | undefined = undefined;
    errorMessage: string = '';

    constructor(private router: Router) {}

    ngOnInit() {
        this.Init();
    }

    onLogin() {
        if (this.savedPassCode !== this.password) {
            this.errorMessage = "addPasscodeForm.passcodeIsNotValid"
            return;
        }

        this.router.navigateByUrl(`/${MAIN_ROUTE}/${MainRoutes.Home}`);
    }

    onFingerprint() {
        console.log('Fingerprint login clicked');
    }

    private async Init() {
        this.savedPassCode = await StoreHelper.getValue<string>(SettingKeys.passCode);
        if (!this.savedPassCode) {
            this.router.navigateByUrl(`/${AUTH_ROUTE}/${AuthRoutes.AddPasscode}`);
        }
    }
}
