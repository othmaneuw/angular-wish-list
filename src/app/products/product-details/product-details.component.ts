import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product : any = {};

   constructor(private store : ProductListService,private route : ActivatedRoute){}

  ngOnInit(): void {

    this.route.paramMap.subscribe((params : ParamMap) =>{
      let id = params.get('id');
      if(id){
        this.store.getProduct(parseInt(id)).subscribe(product => {
           this.product = product;
        })
      }
    })
  }

}
