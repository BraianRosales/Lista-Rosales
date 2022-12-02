import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lista-Rosales';

  flag: boolean = false;
  clickedStudent: number | undefined;
  studentsList: string[] = ['Braian', 'Daiana', 'Blas', 'Margarita', 'Gastón'];
  addedStudents: string[] = [];

  start() {
    this.flag = true;
  }

  addStudent(i: number, student: string) {
    this.clickedStudent = i;
    if (!this.addedStudents.includes(student)) {
      this.addedStudents.push(student)
    }
  }

  reset() {
    this.addedStudents = [];
  }
}
