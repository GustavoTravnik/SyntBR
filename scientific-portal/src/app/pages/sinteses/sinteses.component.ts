import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmPurchaseModalComponent } from 'src/app/confirm-purchase-modal/confirm-purchase-modal.component';
import { CourseService } from 'src/app/services/courses.service';
import { UserService } from 'src/app/services/user.service';

export interface CourseListItem {
  id: number;
  url: string;
  name: string;
  description: string;
  price: number;
  payed: boolean;
}

@Component({
  selector: 'app-sinteses',
  templateUrl: './sinteses.component.html',
  styleUrls: ['./sinteses.component.scss'],
})
export class SintesesComponent implements OnInit {
  coursesOppened: boolean = false;
  courses: CourseListItem[] = [
    // {
    //   url: 'knm',
    //   title: 'Intro to Angular',
    //   description:
    //     'Learn the basics of Angular, components, routing, and services.',
    //     path: '/courses/knm',
    //     price: 5,
    // },
  ];

  constructor(
    private router: Router,
    private coursesService: CourseService,
    private dialog: MatDialog,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.coursesService.getCourseByType('synt').then((response) => {
      this.courses = response.data as CourseListItem[];
    });
  }

  setCoursesOppened(): void {
    this.coursesOppened = true;
  }

  public async accessOrBuyCourse(course: CourseListItem) {
    const alreadyPaid = await this.coursesService.userHaveCourse(course.id);
    if (alreadyPaid) {
      this.router.navigate(['/courses', course.url, course.id]);
      return;
    }
    const dialogRef = this.dialog.open(ConfirmPurchaseModalComponent, {
      width: '400px',
      data: { name: course.name, price: course.price },
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        this.coursesService
          .getCompleteCourse(course.id)
          .then(async (response) => {
            if (!response.data) {
              alert(
                'Este curso é pago. Por favor, realize o pagamento para acessar.',
              );
              return;
            }
            setTimeout(async () => await this.updateCredits(), 5000);
            this.router.navigate(['/courses', course.url, response.data.id]);
          });
      } else {
        console.log('Purchase cancelled');
      }

      await this.updateCredits();
    });
  }

  public async updateCredits() {
    try {
      await this.userService.updateCredits();
    } catch (error) {
      console.error('Error updating credits:', error);
    }
  }
}
