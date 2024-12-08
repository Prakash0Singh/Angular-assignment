import { Component, OnInit } from '@angular/core';
import { ArticleDialogComponent } from '../article-dialog/article-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-published-article',
  templateUrl: './published-article.component.html',
  styleUrls: ['./published-article.component.css']
})
export class PublishedArticleComponent implements OnInit {
  searchQuery: any;
  constructor(public dialog: MatDialog,private api:ApiService) {}
  get_url='posts';
  articles: any[] = [];

  ngOnInit(): void {
    this.articles=this.api.get()
  }

  openDialog(article?: any): void {
    const dialogRef = this.dialog.open(ArticleDialogComponent, {
      data: article 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (article) {
          const index = this.articles.findIndex(a => a.id === article.id);
          if (index !== -1) {
            this.articles[index] = result;
            this.api.post(this.articles)
          }
        }
      }
    });
  }
}
