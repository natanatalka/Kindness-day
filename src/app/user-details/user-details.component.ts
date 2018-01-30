import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {UsersService} from '../users.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import 'rxjs/Rx';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  userDetailsForm: FormGroup;
  errors: string[];

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {
  }

  onSave(): void {
    console.log(this.user);
    console.log(this.userDetailsForm.value);
    this.usersService.updateUser(this.user.id, this.userDetailsForm.value).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['/users']);
      },
      err => {
        // console.log('err:', err);
        this.errors = err;
        console.log('error!!!:', this.errors);
      }
    );
  }


  delete(): void {
    this.usersService.deleteUser(this.user.id).subscribe(msg => {
      console.log(msg);
      this.router.navigate(['/users']);
    });
  };


  ngOnInit() {
    this.user = this.route.snapshot.data.user;
    console.log(this.user);
    this.userDetailsForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.maxLength(50)
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ])
    });

    // this.userDetailsForm.controls['name'].setValue(this.user.name);
    // this.userDetailsForm.controls['email'].setValue(this.user.email);
  }

}
