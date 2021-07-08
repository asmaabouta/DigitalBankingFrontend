import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-banque',
  templateUrl: './banque.component.html',
  styleUrls: ['./banque.component.css']
})
export class BanqueComponent implements OnInit {


  public operations :any;
  constructor(private  http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/operation")
      .subscribe(data=>{
        this.operations=data;
      },error => {
        console.log(error);

      })
  }

}
