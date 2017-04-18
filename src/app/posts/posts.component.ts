import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];
  authentication: AuthenticationService;

  constructor(private postsService: PostsService, authentication: AuthenticationService) {
    this.authentication = authentication;
  }

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
