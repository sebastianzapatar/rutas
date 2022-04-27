import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ErrorComponent } from './components/error/error.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'insertar',component:AcercadeComponent},
  {path:'**',component:ErrorComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    AcercadeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
