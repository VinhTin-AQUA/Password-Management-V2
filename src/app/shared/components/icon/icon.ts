import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconName } from './types/icon-types';

@Component({
    selector: 'app-icon',
    imports: [CommonModule],
    templateUrl: './icon.html',
    styleUrl: './icon.scss',
})
export class Icon {
    @Input() name!: IconName; // icon name
    @Input() size: string = '1em'; // e.g. "24px" | "2rem" | "1.5em"
    @Input() color: string = '#000'; // CSS color
    @Input() fill?: string = '#fff'; // override fill
    @Input() stroke?: string = '#000'; // stroke color for outline icons
    @Input() class?: string; // extra classes
    spritePath: string = '/icons/sprite.svg';
}
