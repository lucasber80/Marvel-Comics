import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDialogComponent } from './comic-dialog.component';

describe('ComicDialogComponent', () => {
  let component: ComicDialogComponent;
  let fixture: ComponentFixture<ComicDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
