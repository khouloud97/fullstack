import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css'],
})
export class UpdatePersonComponent implements OnInit {
  id: number;
  person: Person = new Person();
  constructor(
    private personservice: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personservice.getPersonById(this.id).subscribe(
      (data) => {
        this.person = data;
      },
      (error) => console.log(error)
    );
  }
  updatePerson() {
    this.personservice.updatePerson(this.id, this.person).subscribe(
      (data) => {
        console.log(data);
        this.person = new Person();
        this.router.navigate(['/persons']);

        //this.gotoList();
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.updatePerson();
    this.router.navigate(['/persons']);
  }
}
