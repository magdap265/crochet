import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  // selectedProduct: Product[];
 
  constructor( private productsSerice: ProductsService) { }

  ngOnInit() {
  }

  onSelected(productWasSelected){
  this.productsSerice.onSelectedProduct(productWasSelected);
  }

}