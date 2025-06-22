export class CoursePage {
  public title: string = '';
  public description: string = '';
  public courseModules: CourseModule[] = [];
  public finalConsiderations: string = '';
}

class CourseModule {
  public title: string = '';
  public description: string = '';
  public contentType: 'video' | 'text' = 'text';
  public content: CourseContent = new CourseContent();
  public order: number = 0;
}

class CourseContent {
  public htmlContent: string = '';
}
