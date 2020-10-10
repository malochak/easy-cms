import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManagementComponent} from './management/management.component';
import {ContentComponent} from './content/content.component';
import {NewPostComponent} from './management/new-post/new-post.component';

const routes: Routes = [
    {path: '', component: ContentComponent},
    {
      path: 'management', component: ManagementComponent,
      children: [
        {path: 'new-post', component: NewPostComponent}]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
