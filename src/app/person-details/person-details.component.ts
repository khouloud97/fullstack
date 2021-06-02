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
  personv: Person;
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

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print(); ">${printContents}</body>
      </html>`);
    popupWin.document.close();
  }
  funcc() {
    this.personservice.findbyvaccin(this.id).subscribe((data) => {
      this.person = data;
    });
  }
}
