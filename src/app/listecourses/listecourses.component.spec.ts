import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecoursesComponent } from './listecourses.component';

describe('ListecoursesComponent', () => {
  let component: ListecoursesComponent;
  let fixture: ComponentFixture<ListecoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListecoursesComponent]
    });
    fixture = TestBed.createComponent(ListecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
