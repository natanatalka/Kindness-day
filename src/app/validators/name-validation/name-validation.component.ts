import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-validation',
  templateUrl: './name-validation.component.html',
  styleUrls: ['./name-validation.component.css']
})
export class NameValidationComponent implements OnInit {
  @Input() errors: string[];

  constructor() { }

  ngOnInit() {
  }

}
