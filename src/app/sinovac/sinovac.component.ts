import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-sinovac',
  templateUrl: './sinovac.component.html',
  styleUrls: ['./sinovac.component.css'],
})
export class SinovacComponent implements OnInit {
  persons: Person[];

  filterTerm: string;

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.getPersons();
  }
  getPersons() {
    this.personService.getpersonparvaccin1().subscribe((date) => {
      this.persons = date;
    });
  }
  findbyvaccin1(id: number) {
    this.personService.findbyvaccin1(id).subscribe((data) => {
      console.log(data);
      this.getPersons();
    });
  }
}
