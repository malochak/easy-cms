import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManagementComponent} from './management/management.component';
import {ContentComponent} from './content/content.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'management', component: ManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
