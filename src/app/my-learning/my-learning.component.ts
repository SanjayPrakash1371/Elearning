import { Component } from '@angular/core';
import { CourseserviceService } from '../courseservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-learning',
  templateUrl: './my-learning.component.html',
  styleUrls: ['./my-learning.component.scss'],
})
export class MyLearningComponent {
  constructor(
    private courseService: CourseserviceService,
    private router: Router
  ) {}

  all = this.courseService.myCourses;
  allLength = this.all.length;

  details(id: string) {
    console.log(id);
    this.router.navigate([`/course/${id}`]);
  }
}
