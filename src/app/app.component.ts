import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lista-Rosales';

  flag: boolean = false;
  studentsList: string[] = ['Braian', 'Daiana', 'Blas', 'Margarita', 'Gastón'];

  start() {
    this.flag = true;
  }
}
