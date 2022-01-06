import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

    constructor( private reg: RegisterService) { }
    uname: any;
    getuser() {
        this.uname = localStorage.getItem('uname')
    }
    ngOnInit(): void {
        this.getuser();
    }
}
