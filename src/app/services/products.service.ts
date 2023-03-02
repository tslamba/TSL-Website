import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Product from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private dbPath = '/Products';
  productsref:  AngularFireList<Product>;

 constructor(private db: AngularFireDatabase) { 
  this.productsref = db.list(this.dbPath);
  }
  getAll(): AngularFireList<Product> {
    return this.productsref;
  }
  create(product: Product): any {
    return this.productsref.push(product);
  }
  update(id: string, value: any): Promise<void> {
    return this.productsref.update(id, value);
  }
  delete(id: string): Promise<void> {
    return this.productsref.remove(id);
  }
  deleteAll(): Promise<void> {
    return this.productsref.remove();
  }
}
