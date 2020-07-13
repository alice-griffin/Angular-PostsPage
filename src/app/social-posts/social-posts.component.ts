import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Post } from '../post';


@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[];
  showForm: boolean; 

  constructor() { }

  ngOnInit(): void {
    this.posts = [];
    this.showForm = false; 
  }
  onDelete(item: Post) {
    const itemIndex = this.posts.indexOf(item);
    this.posts.splice(itemIndex, 1);
  }

  onSubmit(item: Post) {
      this.posts.push({title: item.title, thought: item.thought});
      this.showForm = false; 
  }
  
  showMe() {
    this.showForm = true; 
  }

}
