import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../@core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  logout() {

    this.userService.logout();
    setTimeout(() => {
        location.reload()
    }, 500);

}

}
