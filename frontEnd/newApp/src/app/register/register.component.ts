import { Component, OnInit } from '@angular/core';
import { RegisterService } from "../register.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    username!: string;
    email!: string;
    pw!: string;

    registeredUser = {
        username: this.username,
        email: this.email,
        pw: this.pw
    };
    constructor(private reg: RegisterService, private router: Router) {

    }

    regUser() {
        console.log(this.registeredUser);

        this.reg.regUser(this.registeredUser)
            .subscribe(
                res => {
                    console.log(res),
                    this.router.navigate(["login"]);
                },
                err => console.log(err.error)
        );
    }

  ngOnInit(): void {
  }

}
