import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Custom Component
import { PersonDetailComponent } from './components/person-detail.component';
import { TopMenuComponent } from './shared/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
