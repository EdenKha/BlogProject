import {Component, Input} from '@angular/core';
import {Blog} from "../../models/blog.model";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  standalone: true,
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {

  @Input() blog!: Blog;
  @Input() index!: number;

  constructor(private dataService: DataService) { }

  onSubmit(){
    this.dataService.switchActualBlog(this.index);
  }

}
