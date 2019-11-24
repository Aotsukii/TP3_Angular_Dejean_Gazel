import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalsRating'
})
export class AnimalsRatingPipe implements PipeTransform {

  transform(value: number, args?: any): any {
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
