import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedArticleComponent } from './published-article.component';

describe('PublishedArticleComponent', () => {
  let component: PublishedArticleComponent;
  let fixture: ComponentFixture<PublishedArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublishedArticleComponent]
    });
    fixture = TestBed.createComponent(PublishedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
