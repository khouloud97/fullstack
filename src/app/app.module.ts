import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePersonComponent } from './create-person/create-person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { HomeComponent } from './home/home.component';
import { NewsapiservicesService } from './services/newsapiservices.service';
import { VaccinListComponent } from './vaccin-list/vaccin-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CreateVaccinComponent } from './create-vaccin/create-vaccin.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { SinovacComponent } from './sinovac/sinovac.component';
import { AstraZenecaComponent } from './astra-zeneca/astra-zeneca.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    CreatePersonComponent,
    UpdatePersonComponent,
    PersonDetailsComponent,
    HomeComponent,
    VaccinListComponent,
    CreateVaccinComponent,
    SplashScreenComponent,
    SinovacComponent,
    AstraZenecaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    Ng2SearchPipeModule,
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
