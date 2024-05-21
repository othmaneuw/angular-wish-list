import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  
  data : any[] = [
    {id : 1, name : "PC"},
    {id : 2, name : "USB"},
    {id : 3, name : "Souris"},
  ]

  constructor() { }

  getProducts(){
    return of(this.data);
  }

  getProduct(id : number){
      return of(this.data.find(product => product.id === id));
  }
}
