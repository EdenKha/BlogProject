import {Component, Input} from '@angular/core';
import {Blog} from "../../models/blog.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  standalone: true,
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {

  @Input() blog!: Blog;
  @Input() index!: number;
  userId!: string | null;
  blogId!: string | null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('userId');
      this.blogId = params.get('blogId');
    });
  }

}
