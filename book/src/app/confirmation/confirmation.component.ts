import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name
  surname
  car
  date
  constructor(private access: ActivatedRoute ) { }

  ngOnInit() {

    this.access.queryParams.subscribe(data=>{
        this.name = data['name'];
        this.surname = data['surname'];
        this.car = data['car'];
        this.date = data['date'];

    })
  }

}
