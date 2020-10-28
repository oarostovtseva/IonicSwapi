import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enteredPersonName: string = '';

  constructor(private prsService: PersonsService) { }

  onCreatePerson() {
    this.prsService.addPerson(this.enteredPersonName);
  }
}
