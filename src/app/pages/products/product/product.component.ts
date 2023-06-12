import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product // el decorador Input comunica el padre con el hijo y envia la prop de tipo Product
  constructor() {}
  @Output() addToCartClick = new EventEmitter<Product>(); // el decorador Output comunica el hijo con el padre

  ngOnInit(): void {
  }

  onClick(): void {
    this.addToCartClick.emit(this.product);
  }

}
