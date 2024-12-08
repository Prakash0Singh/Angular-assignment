import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { ArticleDialogComponent } from '../article-dialog/article-dialog.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
searchQuery: any;
  constructor(public dialog: MatDialog,private api:ApiService) {}
  get_url='posts';
  articles: any[] = [];

  ngOnInit(): void {
    this.articles=this.api.get()
  }

  openDialog(article?: any): void {
    const dialogRef = this.dialog.open(ArticleDialogComponent, {
      data: article ,
      width: '500px',  
      height: '400px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (article) {
          const index = this.articles.findIndex(a => a.id === article.id);
          if (index !== -1) {
            this.articles[index] = result;
            this.api.post(this.articles)
          }
        } else {
          this.articles.unshift(result);
          this.api.post(this.articles)
        }
      }
    });
  }


}
