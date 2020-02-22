import { Component, OnInit } from '@angular/core';
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../../classes/course";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-course-details-v2',
  templateUrl: './course-details-v2.component.html',
  styleUrls: ['./course-details-v2.component.css']
})
export class CourseDetailsV2Component implements OnInit {

  public course: Course;

  constructor(private builder: FormBuilder, private route: ActivatedRoute, private courseService: CourseService) {
    let courseId = this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(Number(courseId)).subscribe(data => {
      this.course = data;
    });
  }



  ngOnInit() {

  }

}