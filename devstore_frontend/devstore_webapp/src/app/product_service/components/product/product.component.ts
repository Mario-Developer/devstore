import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../entities/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  productList: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.productService.findAll().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  save(product: Product){
    this.productService.save(product).subscribe();
  }

  deleteById(id: number){
    this.productService.deleteById(id).subscribe();
  }

  findById(id: number){
    this.productService.findById(id).subscribe();
  }

}
