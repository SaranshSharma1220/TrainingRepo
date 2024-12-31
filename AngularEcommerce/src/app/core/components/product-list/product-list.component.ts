import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../shared/models/product.model';
import { LoaderComponent } from "../../../shared/components/loader/loader.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, LoaderComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[]= [];
  isLoading :Boolean=false;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.isLoading=true;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products; 
        
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
      complete:()=>this.isLoading=false
    });
  }

}
