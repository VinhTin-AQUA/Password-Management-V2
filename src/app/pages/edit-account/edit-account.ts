import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-edit-account',
    imports: [FormsModule, TranslatePipe],
    templateUrl: './edit-account.html',
    styleUrl: './edit-account.scss',
})
export class EditAccount {
    showPassword = false;
    showConfirm = false;

    form = {
        username: '',
        password: '',
        confirmPassword: '',
        note: '',
    };

    save() {
        if (this.form.password !== this.form.confirmPassword) {
            alert('Mật khẩu xác nhận không trùng khớp');
            return;
        }

        console.log('Account Saved:', this.form);
        // TODO: Gửi dữ liệu lên backend hoặc emit event
    }
}
