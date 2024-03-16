import { Component } from '@angular/core';
import {Blog} from "../../models/blog.model";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blog!: Blog;

}
