import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})
export class ContComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  massFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  lastnameFormControl = new FormControl('', [
    Validators.required,
    
  ]);
}
