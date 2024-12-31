import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root',})
export class UserService{

    constructor(private auth: AuthService){}

    private isLoggedInSubject = new BehaviorSubject<boolean>(false);
    private userNameSubject = new BehaviorSubject<string | null>(null);


    isLoggedIn$ = this.isLoggedInSubject.asObservable();
    userName$ = this.userNameSubject.asObservable();


    initializeAuthState() {
        this.auth.checkAuth().subscribe({
          next: (response) => {
            this.isLoggedInSubject.next(true);
            this.userNameSubject.next(response.user.name); // Update with server-provided name
          },
          error: () => {
            this.isLoggedInSubject.next(false);
            this.userNameSubject.next(null);
          },
        });
      }
    

    login(userName: string) {
        this.isLoggedInSubject.next(true);
        this.userNameSubject.next(userName);
      }
    
      logout() {
        this.isLoggedInSubject.next(false);
        this.userNameSubject.next(null);
      }
}

