import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASR_URL } from '../../app.config';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) {}

    getAllProduct() {
        return this.http.get(BASR_URL + 'admin/products');
    }

    addProducts(product) {
        return this.http.post(BASR_URL + 'admin/product', product);
    }

    editProduct(productId, product) {
        return this.http.put(BASR_URL + 'admin/product/' + productId, product);
    }

    getProductOfAdmin(email) {
        return this.http.get(BASR_URL + 'admin/product/' + email);
    }

    getTransationDetails(email) {
        return this.http.get(BASR_URL + 'data/product/' + email);
    }

    deactivateProduct(id) {
        return this.http.delete(BASR_URL + 'admin/product/' + id);
    }
}
