import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css'],
})
export class CreatePersonComponent implements OnInit {
  public person: Person = new Person();

  constructor() {}
  onSubmit(f: NgForm) {
    let p: Person = f.value;

    console.log(this.person);
  }


  ngOnInit(): void {

    this.person.firstname="aaa"
    console.log( this.person)

  }
}
