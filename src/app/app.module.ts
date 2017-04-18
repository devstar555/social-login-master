import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './tasks.service';
import { AuthenticationService } from '../services/authentication.service';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'tasks/all',
    component: TasksComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService, TasksService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
