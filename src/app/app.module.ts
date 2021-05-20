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
@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    CreatePersonComponent,
    UpdatePersonComponent,
    PersonDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
