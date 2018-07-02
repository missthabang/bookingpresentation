import { Component, OnInit } from '@angular/core';
// import {FormsModule} from '@angular/forms';

import {Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name
  surname
  car
  date

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onbook(){
    console.log(this.name);
    console.log(this.surname);
    console.log(this.car);
    console.log(this.date)

this.router.navigate(['confirmation'], {queryParams:{name:this.name, surname:this.surname, car:this.car, date:this.date}});


  }

}
