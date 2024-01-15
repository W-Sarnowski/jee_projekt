import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent implements OnDestroy {

  login: string = '';
  password: string = '';
  passwordCopy: string = '';
  email: string = '';
  avatar?: File = undefined;
  fileName: string = '';

  constructor (
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }

  subscription: Subscription = new Subscription();

  onFileSelected(event: any) {
    if (event && event.target) {
      const file: File = event.target.files[0];

      if (file) {

        this.fileName = file.name;
        
        this.avatar = file;

        // const formData = new FormData();

        // formData.append("thumbnail", file);

        // const upload$ = this.http.post("/api/thumbnail-upload", formData);

        // upload$.subscribe();
      }
    }
  }

  onRegisterCLick() {
    if (this.password === this.passwordCopy) {
      const objectToSend = {
        login: this.login,
        password: this.password,
        email: this.email,
        avatar: this.avatar,
      };

      this.subscription.add(
        this.http.post('http://localhost:8080/register', objectToSend).subscribe((response: any) => {
           if (response.body === 'OK') {
            this.router.navigate(['/login'])
           }
        })
      );
    }
  }
}
