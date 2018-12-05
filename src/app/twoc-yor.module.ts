import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent, CatFormComponent } from './twoc-yor.component';
import { CatService } from './cat';

const routes: Routes = [
  { path: 'cats/:id', component: CatFormComponent },
  { path: '**', redirectTo: '/cats/0' }
];

@NgModule({
  declarations: [
    AppComponent,
    CatFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
