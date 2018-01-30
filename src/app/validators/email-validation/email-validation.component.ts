import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-email-validation',
  templateUrl: './email-validation.component.html',
  styleUrls: ['./email-validation.component.css']
})
export class EmailValidationComponent implements OnInit {
  @Input() errors: string[];

  constructor() { }

  ngOnInit() {
  }

}
