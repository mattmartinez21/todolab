import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  // show: boolean = false;

  posts: Post[] = [
    {
      title: "Grand Circus",
      thought: "Grand Circus is cool."
    },
    {
      title: "Ritual",
      thought: "Ritual is a well developed app."
    },
    {
      title: "Sleep",
      thought: "I need more of it."
    },
    {
      title: "Music",
      thought: "I love music."
    },
    {
      title: "Food",
      thought: "I like pizza."
    },
    {
      title: "Books",
      thought: "I like to read."
    }
  ];
deletePost(index: number): void {
  this.posts.splice(index, 1);
  
}


  constructor() {}

  ngOnInit() {}
}
