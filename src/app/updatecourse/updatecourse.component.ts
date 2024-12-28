import { Component } from '@angular/core';
import { course } from '../course';
import { CourseserviceService } from '../courseservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.scss']
})
export class UpdatecourseComponent {
  id :number=0;
  course:course= new course
  /*course: course = {
    id: 0, // Initialisez avec une valeur par défaut appropriée
    title: '',
    description: '',
    price: 0,
    imageUrl:''
  };*/
  constructor(private courseservice:CourseserviceService ,private route:ActivatedRoute,private router:Router){
  
  }
  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.courseservice.getcourseById(this.id).subscribe(data =>{
      this.course=data;
    }, error => console.log(error));
  

  }

   
  savecourse(){
    this.courseservice.createcourse(this.course).subscribe(data=>{
      console.log(data)
    },error=>console.log(Error)
    
    )
    
    }
   
    onSubmit() {
    this.courseservice.updatecourse(this.id,this.course).subscribe(data =>{
     this.gotocourselist();
    
    }
  , error => console.log(error))
    
    }
    gotocourselist(){
      this.router.navigate(['/course']);
    
    }
}



