import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './create-person/create-person.component';
import { CreateVaccinComponent } from './create-vaccin/create-vaccin.component';
import { HomeComponent } from './home/home.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonListComponent } from './person-list/person-list.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { VaccinListComponent } from './vaccin-list/vaccin-list.component';

const routes: Routes = [
  {
    path: 'persons',
    component: PersonListComponent,
  },
  {
    path: 'vaccins',
    component: VaccinListComponent,
  },
  {
    path: 'create-vaccins',
    component: CreateVaccinComponent,
  },

  {
    path: 'create-persons',
    component: CreatePersonComponent,
  },
  {
    path: 'update-person/:id',
    component: UpdatePersonComponent,
  },
  {
    path: 'detailsPerson/:id',
    component: PersonDetailsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
