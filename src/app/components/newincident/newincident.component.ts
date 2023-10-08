import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { IncidentdialogComponent } from 'src/app/incidentdialog/incidentdialog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-newincident',
  templateUrl: './newincident.component.html',
  styleUrls: ['./newincident.component.css']
})


export class NewincidentComponent implements OnInit {
  angForm: FormGroup
  selectedValue: string;

  public datePipe = new DatePipe('en-US');
  dateformat = this.datePipe.transform(new Date(), "yyyy-MM-dd HH:mm:ss");

  status = ['New', 'In Progress',
    'On Hold', 'Resolved', 'Closed', 'Cancelled'];

  priority = ['Critical', 'High', 'Major', 'Minor'];

  incType = ['Inquiry', 'Software', 'Hardware', 'Network', 'Database']

  contactType = ['Email', 'Phone', 'Self-Service', 'Walk-In']

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(private fb: FormBuilder, private dataservice: DataService, private route: Router,public dialog: MatDialog) {
    this.angForm = this.fb.group({
      IncidentID: ['', Validators.required],
      IncidentType: ['', Validators.required],
      ContactType: ['', Validators.required],
      Impact: ['', Validators.required],
      Urgency: ['', Validators.required],
      Priority: ['', Validators.required],
      BusinessService: ['', Validators.required],
      ConfigurationItem: ['', Validators.required],
      AssignmentGroup: ['', Validators.required],
      Assignedto: ['', Validators.required],
      Opened: [this.dateformat, Validators.required],
      Updated: [this.dateformat, Validators.required],
      CreatedBy: ['Admin', Validators.required],
      UpdatedBy: ['Admin', Validators.required],
      ShortDescription: ['', Validators.required],
      Description: ['', Validators.required],
      Status: ['', Validators.nullValidator],
    })


  }


  ngOnInit(): void {


  }

  openDialog() {
    this.dialog.open(IncidentdialogComponent, {
      width:'30%'
    });
  }

  postdata(data: any) {
    console.log(this.angForm.value)
    this.dataservice.AddIncident(this.angForm.value).subscribe(data => {
      this.route.navigate(['viewincident']);
    })
  }
}


