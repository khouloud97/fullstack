import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';
@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
})
export class SplashScreenComponent implements OnInit {
  persons: Person[];

  filterTerm: string;

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.getPersons();
  }
  getPersons() {
    this.personService.getpersonparvaccin().subscribe((date) => {
      this.persons = date;
    });
  }
  findbyvaccin(id: number) {
    this.personService.findbyvaccin(id).subscribe((data) => {
      console.log(data);
      this.getPersons();
    });
  }
}
