import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CourseserviceService } from '../courseservice.service';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.scss'],
})
export class CoursecardComponent {
  @Input() course = {
    id: '1',
    name: 'Java',
    duration: 5,
    summary:
      'Java is a most popular, object-oriented, widely used programming language and platform that is utilized for Android development, web development, artificial intelligence, cloud applications, and much more. So, mastering this gives you great opportunities in bigger organizations.',
    details:
      'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
    poster_url: 'https://wallpapercave.com/wp/wp7250277.jpg',
  };

  constructor(
    private router: Router,
    private courseService: CourseserviceService
  ) {}

  details(id: string) {
    this.router.navigate([`/course/${id}`]);
  }

  myLearn = false;
  addToMyLearning(course: any) {
    this.myLearn = !this.myLearn;
    this.courseService.addToMyLearning(course);
  }

  show = true;
  toggle() {
    this.show = !this.show;
  }

  @Output() delete = new EventEmitter<string>();
  deleteCourse(id: string) {
    console.log('Emitting');

    this.delete.emit(id);
  }
}
