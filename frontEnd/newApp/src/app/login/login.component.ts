import { Component, OnInit } from '@angular/core';
import { RegisterService } from "../register.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email!: string;
    pw!: string;
    loginUser = {
        email: this.email,
        pw: this.pw
    }
    err!: any;
    constructor( private reg: RegisterService, private router: Router ) { }
    logUser() {
        this.reg.logUser(this.loginUser).subscribe(
            res => {
                console.log(res),
                localStorage.setItem('uname', res['user']['username'])
                this.router.navigate(["dash"])
            },
            err => {
                this.err = err.error;
                console.log(this.err)
            }
        )
    }
    ngOnInit(): void {
  }

}
