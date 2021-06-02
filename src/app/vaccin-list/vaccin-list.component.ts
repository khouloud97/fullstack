import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { Vaccin } from '../vaccin';
import { VaccinService } from '../vaccin.service';

@Component({
  selector: 'app-vaccin-list',
  templateUrl: './vaccin-list.component.html',
  styleUrls: ['./vaccin-list.component.css'],
})
export class VaccinListComponent implements OnInit {
  vaccins: Vaccin[];
  personService: any;
  persons: Person[];

  constructor(private VaccinService: VaccinService, private router: Router) {}

  ngOnInit(): void {
    this.getVaccins();
  }
  private getVaccins() {
    this.VaccinService.getVaccinList().subscribe((date) => {
      this.vaccins = date;
    });
  }
  detailsVaccin(id: number) {
    this.router.navigate(['detailsVaccin', id]);
  }
  updateVaccin(id: number) {
    this.router.navigate(['update-Vaccin', id]);
  }
  deleteVaccin(id: number) {
    this.VaccinService.deleteVaccin(id).subscribe((data) => {
      console.log(data);
      this.getVaccins();
    });
  }
  private getPersons() {
    this.personService.getPersonList().subscribe((date) => {
      this.persons = date;
    });
  }

  findbyVaccin(id: number) {
    this.personService.getPersonList().subscribe((data) => {
      console.log(data);
      this.getPersons();
    });
  }
}
