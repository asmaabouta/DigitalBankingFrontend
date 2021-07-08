import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  public code: any="939838";
  public compteDetail:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  setCode(event: Event): void{
    this.code = (event.target as HTMLInputElement).value;
  }

  getAccountInfo():void {
    this.http.get("http://localhost:8093/comptes/"+this.code)
      .subscribe(data=>{
      this.compteDetail = data;
    }, err=>{
        console.log(err);
      });
  }


}
