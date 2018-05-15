import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({ name: 'categoryPipe' })
export class CategoryPipe implements PipeTransform {
    transform(value: any[], category): any {
        if (category === '') {
            return value;
        } else {
            return _.filter(value, product => {
                return product['categoryName'] === category;
            });
        }
    }
}
