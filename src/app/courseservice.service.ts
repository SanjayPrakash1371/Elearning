import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CourseserviceService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http
      .get(`https://64999c0679fbe9bcf83f9cec.mockapi.io/course`)
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }

  getCourseById(id: string) {
    return this.http
      .get(`https://64999c0679fbe9bcf83f9cec.mockapi.io/course/${id}`)
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }

  addNewCourse(formGroup: FormGroup) {
    return this.http
      .post(
        `https://64999c0679fbe9bcf83f9cec.mockapi.io/course/`,
        formGroup.value
      )
      .pipe(
        catchError((err) => {
          console.log(err);
          return [];
        })
      );
  }

  deleteCourse(id: string) {
    return this.http
      .delete(`https://64999c0679fbe9bcf83f9cec.mockapi.io/course/${id}`)
      .pipe(
        catchError((err) => {
          console.log(err);

          return [];
        })
      );
  }

  myCourses = [
    {
      id: '1',
      name: 'Java',
      duration: 5,
      summary:
        'Java is a most popular, object-oriented, widely used programming language and platform that is utilized for Android development, web development, artificial intelligence, cloud applications, and much more. So, mastering this gives you great opportunities in bigger organizations.',
      details:
        'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      poster_url: 'https://wallpapercave.com/wp/wp7250277.jpg',
    },
  ];
  addToMyLearning(val: any) {
    let index = this.myCourses.indexOf(val);
    let check = false;
    for (let i = 0; i < this.myCourses.length; i++) {
      // console.log(this.Fav[i].id);
      if (this.myCourses[i].id == val.id) {
        check = true;
      }
    }
    if (!check) {
      this.myCourses.push(val);
    } else {
      alert('Already added in MyLearning');
    }

    console.log(val);
  }
}
