import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from './ajout-blog.service';

@Component({
  selector: 'app-ajout-blog',
  templateUrl: './ajout-blog.component.html',
  standalone: true,
  styleUrls: ['./ajout-blog.component.css']
})
export class AjoutBlogComponent {

  constructor(public dialogRef: MatDialogRef<AjoutBlogComponent>,
              private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.dialogService.setDialogOpenState(true);
  }

  close(): void {
    this.dialogService.setDialogOpenState(false);
    this.dialogRef.close();
  }

}
