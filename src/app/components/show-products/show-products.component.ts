import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  @Input() products: Product[];
  productModalOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(): void{
    this.productModalOpen = true;
  }
  
  onEdit(product: Product): void  {
    this.productModalOpen = true;
  }

  onDelete(product: Product): void {

  }
}
