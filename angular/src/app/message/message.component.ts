import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { Message } from "../../models/message.model";
import { User } from "../../models/user.model";
import { DataService } from "../../services/data.service";
import {take} from "rxjs";
import {AjoutBlogComponent} from "../ajout-blog/ajout-blog.component";
import {DialogService} from "../../services/dialog.service";
import {MatDialog} from "@angular/material/dialog";
import {ModifMessageComponent} from "../modif-message/modif-message.component";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  standalone: true,
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
  @Input() message!: Message;
  @Input() index: any;
  currentUser!: User;

  constructor(private dataService: DataService, private dialogService: DialogService, public dialog: MatDialog,) {}

  ngOnInit() {
    this.currentUser = this.dataService.getCurrentUser();
  }

  removeMessage() {
    this.dataService.removeMessage(this.message.id);
  }

  openDialog(): void {
    this.dataService.setCurrentIdMessage(this.message.id);
    if (!this.dialogService.isDialogCurrentlyOpen()) {
      const dialogRef = this.dialog.open(ModifMessageComponent);
      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
      });
    }
  }
}

