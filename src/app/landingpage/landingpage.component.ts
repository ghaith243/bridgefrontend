import { Component } from '@angular/core';
import { Course, CourseserviceService } from '../courseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {

    courses: Course[] = [];
  https: any;
  
    constructor(private courseservice: CourseserviceService,private router:Router) {}
  
    ngOnInit(): void {
      this.getCourses();
    }
  
    getCourses(): void {
      this.courseservice.getcoursesList().subscribe((courses) => {
        this.courses = courses;
      });
    }

}
