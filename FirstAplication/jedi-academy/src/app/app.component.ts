import { Component } from '@angular/core';
import { Student } from "./student/student.model";
@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[] = [
    {name: "Yago Henrique", age: 24, company: "Dacasa", dateBirthday: new Date("1994/03/22")},
    {name: "Lucas", age: 13, dateBirthday: new Date("2005/03/22")}
  ];
}
