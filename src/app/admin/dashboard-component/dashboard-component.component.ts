import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

    public sliders: Array<any> = [];

    constructor() {


      this.sliders.push({
        imagePath: '../../../assets/images/slide-08.jpg',
        label: 'First slide label',
        text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    }, {
        imagePath: '../../../assets/images/slide-05.jpg',
        label: 'Second slide label',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }, {
        imagePath: '../../../assets/images/slide-06.jpg',
        label: 'Third slide label',
        text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
    {
      imagePath: '../../../assets/images/slide-07.jpg',
      label: 'Third slide label',
      text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
  }
  );
    }

    ngOnInit() {
    }

}
