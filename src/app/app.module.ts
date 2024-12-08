import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ArticleComponent } from './components/article/article.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ArticleDialogComponent } from './components/article-dialog/article-dialog.component';
import { SearchPipe } from './pipe/search.pipe';
import { PublishedArticleComponent } from './components/published-article/published-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleDialogComponent,
    SearchPipe,
    PublishedArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
