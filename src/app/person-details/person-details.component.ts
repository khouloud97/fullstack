import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent implements OnInit {
  id: number;
  person: Person;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personservice: PersonService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.person = new Person();
    this.personservice.getPersonById(this.id).subscribe((data) => {
      this.person = data;
    });
  }
}
