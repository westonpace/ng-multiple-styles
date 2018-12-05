import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent, CatFormComponent } from './parent-child.component';
import { CatService } from './cat';

@NgModule({
  declarations: [
    AppComponent,
    CatFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    CatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
