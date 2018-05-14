import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASR_URL } from '../../app.config';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {}

    getAllProduct() {
        return this.http.get(BASR_URL + 'admin/products');
    }
}
