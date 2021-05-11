import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  persons: Person[];
  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.getPersons();
  }
  private getPersons() {
    this.personService.getPersonList().subscribe((date) => {
      this.persons = date;
    });
  }
  detailsPerson(id: number) {
    this.router.navigate(['detailsPerson', id]);
  }
  updatePerson(id: number) {
    this.router.navigate(['update-person', id]);
  }
  deletePerson(id: number) {
    this.personService.deletePerson(id).subscribe((data) => {
      console.log(data);
      this.getPersons();
    });
  }

  /*  this.persons = [
        {
          id: 1,
          firstname: 'khouloud',
          lastname: 'achour',
          emailId: 'khouloudachour.97@gmail.com',
        },
        {
          id: 2,
          firstname: 'msk',
          lastname: 'achour',
          emailId: 'achour.97@gmail.com',
        },
      ];
     */
}
