import { Component } from '@angular/core';
import { HomecarouselComponent } from "../../shared/components/homecarousel/homecarousel.component";
import { ProductCardComponent } from "../components/product-card/product-card.component";
import { ProductListComponent } from "../components/product-list/product-list.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HomecarouselComponent, ProductListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
