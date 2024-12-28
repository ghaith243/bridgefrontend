import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListecoursesComponent } from './listecourses/listecourses.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { LandingpageComponent } from './landingpage/landingpage.component';



const routes: Routes = [
  {path:'', redirectTo:'/home' ,pathMatch:'full'},
   { path:'course', component: ListecoursesComponent},
    {path:'createcourse', component:CreatecourseComponent},
    {path:'updatecourse/:id',component:UpdatecourseComponent},
    {path:'home',component: LandingpageComponent}
   


 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
