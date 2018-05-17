import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
    public sliders: Array<any> = [];

    constructor() {


      this.sliders.push({
        imagePath: '../../../assets/images/slide-02.jpg',
        label: 'First slide label',
        text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    }, {
        imagePath: '../../../assets/images/slide-03.jpg',
        label: 'Second slide label',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }, {
        imagePath: '../../../assets/images/slide-01.jpg',
        label: 'Third slide label',
        text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
    {
      imagePath: '../../../assets/images/slide-04.jpg',
      label: 'Third slide label',
      text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
  }
  );
    }

    ngOnInit() {
    }
}
