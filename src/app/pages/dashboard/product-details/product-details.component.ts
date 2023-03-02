import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Product from 'src/app/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product?: Product;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentProduct: Product = {};
  message = '';
  constructor(private ps: ProductsService) { }
  swiperConfig: any = {
    slidesPerView: '4',
    spaceBetween: 10,
    autoplay: true,
    breakpoints: {
      320: {
            slidesPerView: 1,
            centeredSlides :true
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10
     },
      720: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
}

  ngOnInit(): void {
    this.message = '';
  }
  ngOnChanges(): void {
    this.message = '';
    this.currentProduct = { ...this.product };
  }

  // updateTutorial(): void {
  //   const data = {
  //     title: this.currentTutorial.title,
  //     description: this.currentTutorial.description
  //   };
  //   if (this.currentTutorial.key) {
  //     this.tutorialService.update(this.currentTutorial.key, data)
  //       .then(() => this.message = 'The tutorial was updated successfully!')
  //       .catch(err => console.log(err));
  //   }
  // }
  deleteTutorial(): void {
    if (this.currentProduct.id) {
      this.ps.delete(this.currentProduct.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}
