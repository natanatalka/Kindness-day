import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';
import {User} from '../user';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user: User;
  errors: string[];

  userForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl()
  });

  constructor(private usersService: UsersService, private router: Router) {
  }

  create(): void {

    console.log( this.userForm.value);

    this.usersService.createUser(this.userForm.value).subscribe(createdUser => {
      console.log(createdUser);
      this.router.navigate(['/users']);
    },
      err => {
      this.errors = err;
        console.log('err:', err);
      });
  };


  ngOnInit() {
  }

}
