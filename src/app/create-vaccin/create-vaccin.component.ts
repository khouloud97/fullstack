import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Vaccin } from '../vaccin';
import { VaccinService } from '../vaccin.service';

@Component({
  selector: 'app-create-vaccin',
  templateUrl: './create-vaccin.component.html',
  styleUrls: ['./create-vaccin.component.css'],
})
export class CreateVaccinComponent implements OnInit {
  public vaccin: Vaccin = new Vaccin();

  constructor(private vaccinService: VaccinService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.vaccin);
  }
  savevaccin() {
    this.vaccinService.createVaccin(this.vaccin).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
  onSubmit(f: NgForm) {
    let p: Vaccin = f.value;
    this.savevaccin();
    alert('ajout avec succes');
    this.router.navigate(['/vaccins']);
  }

  goTovaccinList() {
    this.router.navigate(['/vaccins']);
  }
}
