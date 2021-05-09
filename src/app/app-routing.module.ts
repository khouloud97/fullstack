import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './create-person/create-person.component';
import { PersonListComponent } from './person-list/person-list.component';

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