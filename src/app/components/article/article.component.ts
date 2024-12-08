import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  constructor(public dialog: MatDialog,private api:ApiService) {}
  get_url='posts';
  articles: any[] = [];

  ngOnInit(): void {
    this.api.get(this.get_url).subscribe({
      next:(res:any)=>{
       this.articles=res
      }
    })
  }




}
