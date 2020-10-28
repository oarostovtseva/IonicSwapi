import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  private personsListSubs: Subscription;
  isFetching = false;

  constructor(private prsService: PersonsService) { }

  ngOnInit() {
    this.personsListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.prsService.fetchPersons();
  }

  ngOnDestroy() {
    this.personsListSubs.unsubscribe();
  }

  onRemovePerson(name: string) {
    this.prsService.removePerson(name);
  }
}
