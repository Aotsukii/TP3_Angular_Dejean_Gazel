import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp-form-dejean-gazel';
}

@Pipe({
  name: "AnimalsRate"
})
class DefaultPipe {
  transform(value: number, fallback: string) {
    let result = "";
    switch (value) {
      case (1):
        result = "☆";
        break;
      case (2):
        result = "★";
        break;

      case (3):
        result = "★☆";
        break;

      case (4):
        result = "★★";
        break;

      case (5):
        result = "★★☆";
        break;

      case (6):
        result = "★★★";
        break;


      case (7):
        result = "★★★☆";
        break;


      case (8):
        result = "★★★★";
        break;


      case (9):
        result = "★★★★☆";
        break;


      case (10):
        result = "★★★★★";
        break;
    }
    return result;
  }
}
