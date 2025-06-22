import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/courses.service';
import { CoursePage } from 'src/dto/course-content';

@Component({
  selector: 'app-knm',
  templateUrl: './knm.component.html',
  styleUrls: ['./knm.component.scss'],
})
export class KnmComponent implements OnInit {
  coursePage: CoursePage = new CoursePage();
  constructor(
    private coursesService: CourseService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id')!;
    this.coursesService
      .getCompleteCourse(parseInt(courseId), true)
      .then((response) => {
        if (!response.data) {
          alert(
            'Este curso é pago. Por favor, realize o pagamento para acessar.',
          );
          return;
        }
        this.coursePage = response.data.content as CoursePage;
      });
  }
}
