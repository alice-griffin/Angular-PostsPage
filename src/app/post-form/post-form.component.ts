import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter();

  post: Post;

  constructor() {}

  ngOnInit(): void {
    this.post = {title: "", thought: ""}
  }


  submitPost() {
    this.submitted.emit(this.post)
  }
  
}
