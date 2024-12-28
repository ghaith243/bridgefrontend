import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import{HttpClientModule} from'@angular/common/http';
import { ListecoursesComponent } from './listecourses/listecourses.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { CourseComponent } from './course/course.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { LandingpageComponent } from './landingpage/landingpage.component'
@NgModule({
  declarations: [
    AppComponent,
    ListecoursesComponent,
    CreatecourseComponent,
    CourseComponent,
    UpdatecourseComponent,
    LandingpageComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,HttpClientModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }