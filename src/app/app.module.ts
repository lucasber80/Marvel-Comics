import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
import { ComicListComponent } from './components/comic-list/comic-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ComicDialogComponent } from './dialogs/comic-dialog/comic-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ComicCardComponent,
    ComicListComponent,
    NavbarComponent,
    ComicDialogComponent,
  ],
  entryComponents: [ComicDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
