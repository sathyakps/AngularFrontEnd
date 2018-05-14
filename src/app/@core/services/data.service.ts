import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
    public loggedInUser = new BehaviorSubject(null);
    public loggedInStatus = new BehaviorSubject(false);
}
