import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

Injectable({
  providedIn: 'root'
})
export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {
  private baseurl = "http://localhost:8093/api/v1/course"
  constructor(private httpclient: HttpClient) { } // Utilisez HttpClient ici

  getcoursesList(): Observable<Course[]> {
    return this.httpclient.get<Course[]>(`${this.baseurl}`);
  }
  createcourse(course: any): Observable<any> {
    return this.httpclient.post(`${this.baseurl}`, course)
      
    
}

    
  
  getcourseById(id:number):Observable<Course>{
    return this.httpclient.get<Course>(`${this.baseurl}/${id}`);
  }
  updatecourse(id:number,course:Course): Observable<object>{
    return this.httpclient.put(`${this.baseurl}/${id}`,course);
  }
   deletecourse(id: number): Observable<object>{
    return this.httpclient.delete(`${this.baseurl}/${id}`);
   }

 
  }
    

