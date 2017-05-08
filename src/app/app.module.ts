import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Page01Component } from './page01/page01.component';

import { RouterModule } from '@angular/router';

export const AppRoutes = [
   //{path: "",component: AppComponent},
   {path: "next",component: Page01Component}
]

@NgModule({
  declarations: [
    AppComponent,
    Page01Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
