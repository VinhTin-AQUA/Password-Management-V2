import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [RouterLink],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home {
    openMenu: number | null = null;
    accounts = [
        { name: 'Facebook', username: 'user.fb@gmail.com' },
        { name: 'Gmail', username: 'me@gmail.com' },
        { name: 'Github', username: 'dev123' },
    ];
     speedDialOpen = false;

    toggleMenu(i: number) {
        this.openMenu = this.openMenu === i ? null : i;
    }

    onEdit(acc: any) {
        console.log('Edit', acc);
        this.openMenu = null;
    }

    onCopy(acc: any) {
        console.log('Copy', acc);
        navigator.clipboard.writeText(acc.username);
        this.openMenu = null;
    }

    onDelete(acc: any) {
        console.log('Delete', acc);
        this.openMenu = null;
    }
   

    toggleSpeedDial() {
        this.speedDialOpen = !this.speedDialOpen;
    }
}
