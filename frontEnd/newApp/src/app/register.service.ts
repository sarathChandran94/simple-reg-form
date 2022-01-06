import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

    constructor(private http: HttpClient) { }

    regUser(user: any) {
        console.log(user)
        return this.http.post("http://localhost:3000/register", user)
    }

    logUser(user: any) {
        console.log(user)
        return this.http.post("http://localhost:3000/login", user)
    }
}
