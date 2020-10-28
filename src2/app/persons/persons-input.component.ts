import { Component } from '@angular/core';

@Component({
  selector: 'app-persons-input',
  template: './persons-input.component.html',
  styleUrls: ['./persons-input.component.css']
})
export class PersonInputComponent{
  onCreateUser(){
    console.log('Created a person');
  }
}
