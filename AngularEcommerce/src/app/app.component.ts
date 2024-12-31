import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { UserService } from './core/services/user.service';

import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { ProductService } from './core/services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularEcommerce';

  
  
  
  constructor(private userService: UserService,private productService : ProductService){}

  ngOnInit(){
    // this.userService.initializeAuthState();
    // this.productService.getProducts();
    
  }
}
