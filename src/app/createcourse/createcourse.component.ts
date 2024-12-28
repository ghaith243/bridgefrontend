import { Component } from '@angular/core';
import { CourseserviceService,Course } from '../courseservice.service';
import { course } from '../course';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';
@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.scss']
})
export class CreatecourseComponent {
  course: course= new course
  constructor(
    private courseService: CourseserviceService,
    private route: ActivatedRoute,
    private router: Router,
    
  ) {}

  ngOnInit(): void {
   this.saveCourse()
  }

  saveCourse(): void {
    this.courseService.createcourse(this.course).subscribe(
      (data) => {
        console.log('Course created successfully:', data);
       this.goToCoursetList();
      },
      (error) => console.error('Error creating course:', error)
    );
  }
    goToCoursetList(){
    this.router.navigate(['/course']);
    
    }
    onSubmit(){
    console.log(this.course);
    this.saveCourse()
    
    }
}


