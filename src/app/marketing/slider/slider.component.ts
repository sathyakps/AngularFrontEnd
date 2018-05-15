import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { Slider } from 'ngx-slider';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    encapsulation: ViewEncapsulation.Native
})
export class SliderComponent implements OnInit {
    public slider = new Slider();

    constructor() {
        this.slider.config.loop = true;
        this.slider.config.showPreview = false;
        this.slider.config.transitionDuration = 3;
        this.slider.config.showTitle = false;
    }

    ngOnInit() {
        const slideItems = [
            { src: 'https://placeimg.com/600/600/any' },
            { src: 'https://placeimg.com/600/600/nature' },
            { src: 'https://placeimg.com/600/600/sepia' },
            { src: 'https://placeimg.com/600/600/people' },
            { src: 'https://placeimg.com/600/600/tech' }
        ];

        this.slider.items = slideItems;
    }
}
