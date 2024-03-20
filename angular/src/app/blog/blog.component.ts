import {Component, Input} from '@angular/core';
import {Blog} from "../../models/blog.model";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  standalone: true,
  imports: [
    NgClass
  ],
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {

  @Input() blog!: Blog;
  @Input() index!: number;

  constructor(public dataService: DataService) {
  }

  onSubmit(){
    this.dataService.setCurrentIdBlog(this.blog.id);
    console.log(this.dataService.currentIdBlog)
    this.dataService.updateMessageList();
    this.dataService.updateBlogList();
  }

}
