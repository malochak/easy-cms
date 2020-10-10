import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ContentComponent} from './content/content.component';
import { PostComponent } from './post/post.component';
import { ManagementComponent } from './management/management.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import {SinglePostComponent} from './post/single-post/single-post.component';
import { NewPostComponent } from './management/new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    PostComponent,
    ManagementComponent,
    SinglePostComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
