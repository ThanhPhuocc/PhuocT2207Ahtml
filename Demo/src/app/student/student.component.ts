import {Component, Input} from "@angular/core";

@Component({
  selector: 'student',
  templateUrl: './student.component.html'
})
export class StudentComponent {
  @Input()
  classN?: string;

  money = 500000;

  moneyTang() {
    this.money += 100000;
  }

  moneyGiam() {
    this.money -= 100000;
  }
}
