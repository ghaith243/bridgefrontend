import { Component } from '@angular/core';
import { Course, CourseserviceService } from '../courseservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listecourses',
  templateUrl: './listecourses.component.html',
  styleUrls: ['./listecourses.component.scss']
})
export class ListecoursesComponent {

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
  updatecourse(id:number){
    this.router.navigate(['updatecourse',id])

  }

  deleteCourse(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce cours ?')) {
      this.courseservice.deletecourse(id).subscribe(() => {
        this.courses = this.courses.filter(course => course.id !== id);
      });
    }
  }
}


