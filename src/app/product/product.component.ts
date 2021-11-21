import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  constructor(private router:Router,private productServices:ProductService,private activatedRoutes: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoutes.paramMap.subscribe((param) =>
    {
      this.idForProductsRouting=Number(param.get('id'));

      if(this.idForProductsRouting>0)
        this.displayBasedOnID();
      else  
        this.getAllProduct()
    });

   
  }

  arrProducts:Product[]=[];

  getAllProduct()
  {
    this.arrProducts=this.productServices.getAllProduct();
  }

  displayBasedOnID()
  {
    this.arrProducts=this.productServices.getProductonID(this.idForProductsRouting);
  }
  idForProductsRouting=0;
  routeBasedOnId()
  {
    let strURLForProductsFilterById="";

    if(this.idForProductsRouting>0)
      strURLForProductsFilterById="products1/"+this.idForProductsRouting;

    this.router.navigate([strURLForProductsFilterById]);
  }


  displayAll()
  {
    this.idForProductsRouting=0;
    this.arrProducts=this.productServices.getAllProduct();
  }
}
