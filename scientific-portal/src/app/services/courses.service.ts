import { Injectable } from '@angular/core';
import { api } from '../services/axios.config';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private creditRequestBaseApiPath = '/api/courses/';

  public requestCourse = async (name: string) => {
    return await api
      .get(this.creditRequestBaseApiPath, {
        params: {
          id: 123,
          name: 'Gustavo',
        },
      })
      .then((response) => true)
      .catch((error) => false);
  };
}
