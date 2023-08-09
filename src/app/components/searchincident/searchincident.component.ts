import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-searchincident',
  templateUrl: './searchincident.component.html',
  styleUrls: ['./searchincident.component.css']
})
export class SearchincidentComponent implements OnInit{


  nameFilter = new FormControl('');
  idFilter = new FormControl('');
  colourFilter = new FormControl('');
  petFilter = new FormControl('');
  dataSource = new MatTableDataSource();
  
  incident:any;
  displayedColumns: string[] = ['IncidentType', 'ContactType', 'Impact', 'Urgency','Priority','BusinessService','ConfigurationItem','AssignmentGroup','Assignedto','ShortDescription','Description','Status','Opened','Updated','CreatedBy','UpdatedBy'];
  constructor(private ddataservice:DataService){}
  
  ngOnInit():void{
    
    this.ddataservice.viewIncident().subscribe((data)=>{
      this.incident=data;
      console.log(this.incident)
    })
  }

  

}
