import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {

  @Input() flag: boolean = false;
  @Input() studentsList: string[] = [];
  clickedStudent: number | undefined;
  addedStudents: string[] = [];

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
