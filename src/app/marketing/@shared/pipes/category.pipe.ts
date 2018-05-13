import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({name: 'categoryPipe'})
export class CategoryPipe implements PipeTransform {
    transform(value: any[], category): any {
        return _.filter(value, (course => {
            return course['category'] === category;
        }));
    }
}
