import { Component, OnInit } from '@angular/core';
import { ProductService } from 'product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id)
      .subscribe(() => {
        this.products = this.products.filter(p => p.id !== id);
      });
  }
}