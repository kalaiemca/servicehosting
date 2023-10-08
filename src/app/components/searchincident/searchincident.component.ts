import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ColDef, GridOptions } from 'ag-grid-community';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-searchincident',
  templateUrl: './searchincident.component.html',
  styleUrls: ['./searchincident.component.css']
})
export class SearchincidentComponent implements OnInit{

  gridApi:any;
  columnApi:any;
  nameFilter = new FormControl('');
  idFilter = new FormControl('');
  colourFilter = new FormControl('');
  petFilter = new FormControl('');
  dataSource = new MatTableDataSource();
  rowData=[];
  columnDefs:ColDef[]=[
    {field:"IncidentNumber"},
    {field:"Opened"},
    {field:"ShortDescription"},
    {field:"ContactType"},
    {field:"Priority"},
    {field:"Status"},
    {field:"IncidentType"},
  ];
  incident:any;
  displayedColumns: string[] = ['IncidentNumber','Opened','ShortDescription','ContactType','Priority','Status','IncidentType'];

  
  constructor(private ddataservice:DataService){}
  
  ngOnInit():void{
    
    this.ddataservice.viewIncident().subscribe((data)=>{
      this.incident=data;
      this.rowData=this.incident
      console.log(this.incident)
    })
  }


  gridOptions:GridOptions={
    defaultColDef:{
      sortable:true,filter:true,floatingFilter:true
    }
  }

}
