import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
 
  moveToSelectedTab(tabName: string) {
    for (let i =0; i< document.querySelectorAll('.mat-tab-label-content').length; i++) {
    if ((<HTMLElement>document.querySelectorAll('.mat-tab-label-content')[i]).innerText == tabName)
    {
    (<HTMLElement>document.querySelectorAll('.mat-tab-label')[i]).click();
    }
    }
    }
  

  slides = [{'image': '../../assets/1.png'}, {'image': '../../assets/2.png'},{'image': '../../assets/4.png'}];


  
}

