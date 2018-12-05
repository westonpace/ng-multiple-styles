import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent, CatFormComponent } from './twoc-nor.component';
import { CatService, SelectedCatService } from './cat';

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
    CatService,
    SelectedCatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
