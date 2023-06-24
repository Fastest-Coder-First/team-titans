import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {

  constructor(public router: Router) {
    if (localStorage.getItem("token")) {
      this.router.navigate(["/"]);
    }
  }

  validateForm(): any {
    var name = (document.getElementById("name") as HTMLInputElement).value;
    var email = (document.getElementById("email") as HTMLInputElement).value;
    var password = (document.getElementById("password") as HTMLInputElement).value;
    var confirmPassword = (document.getElementById("confirmPassword") as HTMLInputElement).value;

    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in all the fields.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please check and try again.");
        return false;
    }

    fetch(`http://localhost:3000/api/XUsers/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
        })
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
