import { Component, OnInit } from '@angular/core';
import { Blog } from "../../models/blog.model";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-blog-description',
  templateUrl: './blog-description.component.html',
  standalone: true,
  styleUrls: ['./blog-description.component.css']
})
export class BlogDescriptionComponent implements OnInit {
  blog!: Blog;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(users => {
      if (users && users.length>0){
        if (users[0].blogs && users[0].blogs.length > 0){
          this.blog = users[0].blogs[0]
        }
      }
    });
  }

}
