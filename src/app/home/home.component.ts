import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _services: NewsapiservicesService) {}

  Homedisplay: any = [];

  ngOnInit(): void {
    this._services.Home().subscribe((result) => {
      console.log(result);
      this.Homedisplay = result.articles;
    });
  }
}
