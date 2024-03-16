import { Component } from '@angular/core';
import {Blog} from "../../models/blog.model";

@Component({
  selector: 'app-blog-description',
  standalone: true,
  imports: [],
  templateUrl: './blog-description.component.html',
  styleUrl: './blog-description.component.css'
})
export class BlogDescriptionComponent {
  blog!: Blog;

}
