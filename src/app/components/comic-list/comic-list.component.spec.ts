import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicListComponent } from './comic-list.component';

describe('ComicListComponent', () => {
  let component: ComicListComponent;
  let fixture: ComponentFixture<ComicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
