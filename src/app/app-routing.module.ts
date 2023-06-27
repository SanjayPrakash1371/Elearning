import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { MyLearningComponent } from './my-learning/my-learning.component';
import { AddCourseComponent } from './add-course/add-course.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'course/:id', component: CoursedetailsComponent },
  { path: 'myLearning', component: MyLearningComponent },
  { path: 'addCourse', component: AddCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
