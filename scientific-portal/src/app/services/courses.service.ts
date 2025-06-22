import { Injectable } from '@angular/core';
import { api } from '../services/axios.config';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private coursesByTypeRequestBaseApiPath = '/courses-by-type';
  private coursesContentRequestBaseApiPath = '/courses';
  private userHaveCourseRequestBaseApiPath = '/courses/user-have-course';

  public getCourseByType = async (type: string) => {
    return await api.get(this.coursesByTypeRequestBaseApiPath, {
      params: {
        type,
      },
    });
  };

  public getCompleteCourse = async (
    id: number,
    returnContent: boolean = false,
  ) => {
    return await api.get(this.coursesContentRequestBaseApiPath, {
      params: {
        id,
        returnContent: returnContent ? 'true' : 'false',
      },
    });
  };

  public userHaveCourse = async (id: number) => {
    return await api
      .get(this.userHaveCourseRequestBaseApiPath, {
        params: {
          id,
        },
      })
      .then((response) => response.data)
      .catch((error) => false);
  };
}
