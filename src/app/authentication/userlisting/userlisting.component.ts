import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent implements OnInit{
  register:any;
  displayedColumns: string[] = ['UserName', 'Password', 'Name', 'Email','Gender','Role','Project','Isactive'];
  constructor(private ddataservice:DataService){}
  ngOnInit():void{
    this.ddataservice.viewUser().subscribe((data)=>{
      this.register=data;
      console.log(this.register)
    })
  }
}
