import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

   products : any = [];

   constructor(private productService: ProductListService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }



}
