import { Component, ViewEncapsulation } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  constructor(public router: Router) {
    if (localStorage.getItem("token")) {
        this.router.navigate(["/"]);
      }
  }

  validateForm(): any {
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    if (!email || !password) {
        alert("Please fill in all the fields.");
        return false;
    }
    fetch(`http://localhost:3000/api/XUsers/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
                alert(data.error);
            } else {
                localStorage.setItem("token", data.id);
                this.router.navigate(["/"]);
            }
        })
        .catch((err) => {
            console.log(err);
            alert("Something went wrong. Please try again later.");
        });
}
}
