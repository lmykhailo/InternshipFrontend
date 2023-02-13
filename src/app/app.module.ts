import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProjectstabComponent } from './components/projectstab/projectstab.component';
import { HomenavbarComponent } from './components/homenavbar/homenavbar.component';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodolistComponent } from './components/todolist/todolist.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CVpageComponent } from './components/cvpage/cvpage.component';
import { SwiperModule } from 'swiper/angular';


const appRoutes:Routes=[
  {path:'',component:HomepageComponent},
  {path:'projects',component:ProjectstabComponent},
  {path:'todolist',component:TodolistComponent},
  {path:'cv',component:CVpageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProjectstabComponent,
    HomenavbarComponent,
    TodolistComponent,
    CVpageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
