import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Product from 'src/app/models/product.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products?: Product[];

  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.getProducts;
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
      console.log("PRODUCTS ----------", data);
    });
  }

}
