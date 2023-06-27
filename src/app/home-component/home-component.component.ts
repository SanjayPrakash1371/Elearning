import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { CourseserviceService } from '../courseservice.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
})
export class HomeComponentComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private courseService: CourseserviceService
  ) {}

  searchForm = this.fb.group({
    searchField: [''],
  });

  allCourses$: any;

  searchedCourses: any;
  length = false;
  show = false;

  ngOnInit() {
    this.allCourses$ = this.http.get(
      'https://64999c0679fbe9bcf83f9cec.mockapi.io/course'
    );

    this.searchForm
      .get('searchField')
      ?.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),

        switchMap((val) => this.search(val as string))
      )
      .subscribe((val: any) => {
        this.show = true;
        this.searchedCourses = val;
        //console.log(this.reciepes.length);
        if (this.searchedCourses.length == 0) {
          this.length = !this.length;
        } else {
          this.length = false;
        }
        //  console.log(val);
        //  console.log(this.reciepes);
      });
  }

  search(course: string) {
    return this.http.get(
      // `https://648a951717f1536d65e94e9e.mockapi.io/receipes?ingredients=${receipe}`

      ` https://64999c0679fbe9bcf83f9cec.mockapi.io/course?name=${course}`
    );
  }

  deleteCourse(id: string) {
    this.courseService.deleteCourse(id).subscribe((val) => {
      this.allCourses$ = this.courseService.get();
    });
  }
}
