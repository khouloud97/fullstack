import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonListComponent } from './person-list/person-list.component';
import { UpdatePersonComponent } from './update-person/update-person.component';

const routes: Routes = [
  {
    path: 'persons',
    component: PersonListComponent,
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
    path: '',
    redirectTo: 'persons',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
