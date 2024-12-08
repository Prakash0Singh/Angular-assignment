import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-article-dialog',
  templateUrl: './article-dialog.component.html',
  styleUrls: ['./article-dialog.component.css']
})

export class ArticleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ArticleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any={}
  ) {}

  saveArticle(): void {
    this.dialogRef.close(this.data);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}

