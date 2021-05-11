import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { NgForm } from '@angular/forms';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css'],
})
export class CreatePersonComponent implements OnInit {
  public person: Person = new Person();

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.person);
  }
  savePerson() {
    this.personService.createperson(this.person).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
  onSubmit(f: NgForm) {
    let p: Person = f.value;
    this.savePerson();
    console.log(this.person);
    this.router.navigate(['/persons']);
  }
  goToPersonList() {
    this.router.navigate(['/persons']);
  }
}
