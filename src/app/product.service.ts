import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  arrProducts=[
    new Product(101,"TV",45000),
    new Product(102,"Laptop",3000),
    new Product(103,"Mobile",4000),
    new Product(104,"Alexa",45000),
    new Product(105,"Watch",5000),
  ]

  getAllProduct()
  {
    return this.arrProducts;
  }
  getProductonID(productId:number)

  {
    return this.arrProducts.filter((product)=>product.productId==productId);
  }
}
