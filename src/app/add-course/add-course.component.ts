import { Component } from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';
import { CourseserviceService } from '../courseservice.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent {
  constructor(
    private fb: FormBuilder,
    private courseService: CourseserviceService,
    private router: Router
  ) {}

  urlregex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  courseForm = this.fb.group({
    name: ['', Validators.required],
    duration: ['', [Validators.required]],
    summary: ['', [Validators.required]],
    details: ['', [Validators.required]],
    poster_url: [
      '',
      [Validators.required, , Validators.pattern(this.urlregex)],
    ],
  });

  onSubmit() {
    console.log(this.courseForm.value);
    let newCourse = this.courseForm;

    this.courseService.addNewCourse(newCourse as any).subscribe((val) => {
      this.router.navigate(['/']);
    });
  }

  get name() {
    return this.courseForm.get('name');
  }
  get poster_url() {
    return this.courseForm.get('poster_url');
  }
  get summary() {
    return this.courseForm.get('summary');
  }
  get details() {
    return this.courseForm.get('details');
  }
  get duration() {
    return this.courseForm.get('duration');
  }
}
