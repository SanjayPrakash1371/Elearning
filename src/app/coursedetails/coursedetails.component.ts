import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { catchError, pipe } from 'rxjs';
import { CourseserviceService } from '../courseservice.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.scss'],
})
export class CoursedetailsComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private arouter: ActivatedRoute,
    private courseService: CourseserviceService
  ) {}

  course: any;
  ngOnInit() {
    this.arouter.paramMap.subscribe((router) => {
      let courseId = router.get('id');

      this.courseService.getCourseById(courseId as string).subscribe((val) => {
        this.course = val;
      });
    });
  }
}
