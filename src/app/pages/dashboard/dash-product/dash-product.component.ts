import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Product from 'src/app/models/product.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dash-product',
  templateUrl: './dash-product.component.html',
  styleUrls: ['./dash-product.component.scss']
})
export class DashProductComponent implements OnInit {
  products?: Product[];
  currentProduct?: Product;
  currentIndex = -1;
  name = '';
  constructor(private ps: ProductsService) { }
  

  ngOnInit(): void {
    this.getProducts();
  }

  refreshList(): void {
    this.currentProduct = undefined;
    this.currentIndex = -1;
    this.getProducts();
  }

  getProducts(): void {
    this.ps.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.products = data;
      console.log("PRODUCTS ----------",data);
    });
  }
  setActiveTutorial(product: Product, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }
  removeAllTutorials(): void {
    this.ps.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }


}
