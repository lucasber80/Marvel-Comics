import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
import { ComicListComponent } from './components/comic-list/comic-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComicDialogComponent } from './dialogs/comic-dialog/comic-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
;

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
  
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
