import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes , RouterModule  } from '@angular/router';
// import {useSharedNotes} from "@mahdi/api"
import { AppComponent } from './app.component';

// const routes :Routes = [
//   //@ts-ignore
//   {path:'',loadChildren: () => import("@mahdi/api").then(m => m.useSharedNotes)}
// ]
@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
