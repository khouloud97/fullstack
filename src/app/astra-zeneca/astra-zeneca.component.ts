import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-astra-zeneca',
  templateUrl: './astra-zeneca.component.html',
  styleUrls: ['./astra-zeneca.component.css'],
})
export class AstraZenecaComponent implements OnInit {
  persons: Person[];

  filterTerm: string;

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.getPersons();
  }
  getPersons() {
    this.personService.getpersonparvaccin3().subscribe((date) => {
      this.persons = date;
    });
  }
  findbyvaccin3(id: number) {
    this.personService.findbyvaccin3(id).subscribe((data) => {
      console.log(data);
      this.getPersons();
    });
  }
}
