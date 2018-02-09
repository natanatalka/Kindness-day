import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service';
import {ActivatedRoute} from '@angular/router';
import {Receiver} from '../../receiver';
import {environment} from '../../environments/environment';



@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  userData: Receiver;
  baseUrl = `http://${environment.url}/api`;

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    const param = this.route.params.subscribe(params => {
        this.usersService.getReceiver(params.uniqueId).subscribe(data => {
          this.userData = data;
          this.userData.path = this.baseUrl + this.userData.path;
          console.log(this.userData.path);
        });
    });
  }

}
