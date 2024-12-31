import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {hugeShoppingCartAdd01} from '@ng-icons/huge-icons'
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink,CurrencyPipe,NgIconComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  viewProviders:[provideIcons({hugeShoppingCartAdd01})]
})
export class ProductCardComponent {
  @Input() product?:Product
}