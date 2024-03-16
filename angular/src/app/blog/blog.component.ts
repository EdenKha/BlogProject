import {Component, Input} from '@angular/core';
import {Blog} from "../../models/blog.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  standalone: true,
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {

  @Input() blog!: Blog;
  @Input() index!: number;

}
