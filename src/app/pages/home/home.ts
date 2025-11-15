import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home {
    accounts = [
        { name: 'Google', username: 'megmail.com', icon: 'G' },
        { name: 'Facebook', username: 'john123', icon: 'F' },
        { name: 'GitHub', username: 'devuser', icon: 'GH' },
    ];

    openIndex: number | null = null;

    toggleMenu(i: number) {
        this.openIndex = this.openIndex === i ? null : i;
    }

    copy(acc: any) {
        console.log('Copy pw', acc);
        this.openIndex = null;
    }

    edit(acc: any) {
        console.log('Edit', acc);
        this.openIndex = null;
    }

    remove(acc: any) {
        console.log('Delete', acc);
        this.openIndex = null;
    }

    openDetail(acc: any) {
        console.log('Open account detail', acc);
    }
}
