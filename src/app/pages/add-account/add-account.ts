import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-add-account',
    imports: [FormsModule],
    templateUrl: './add-account.html',
    styleUrl: './add-account.scss',
})
export class AddAccount {
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
