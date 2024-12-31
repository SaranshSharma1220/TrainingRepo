import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {hugeFavourite, hugeHome01, hugeLogin03, hugeLogout03, hugeSearch01, } from '@ng-icons/huge-icons'
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  viewProviders:[provideIcons({hugeHome01,hugeFavourite,hugeSearch01,hugeLogin03,hugeLogout03})]
})
export class NavbarComponent {
 imgpath = './avatar.jpg'
isLoggedIn = false;
userName : string | null = null;
isProfileMenuOpen = false;

 constructor(private auth:AuthService,private router:Router, private userService : UserService){}

 ngOnInit() {
  this.userService.isLoggedIn$.subscribe((status) => {
    this.isLoggedIn = status;
  });

  this.userService.userName$.subscribe((name) => {
    this.userName = name;
  });
}

onProfileClick(){
  this.isProfileMenuOpen=true;
}

onLogin(){

}

onLogout() {
  this.userService.logout();
  this.auth.logout().subscribe({
    next: () => {
    
      this.router.navigate(['/login']); // Redirect to login page
    },
    error: (err) => {
      console.error('Logout failed', err); // Handle logout errors
    },
  });
}

}
