import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  constructor(private  usersService: UsersService) {}

  upload(): void {

  };

  sendMails(): void {
    this.usersService.sendAllMails().subscribe(data => console.log(data));
  }

  ngOnInit() {
  }

}
