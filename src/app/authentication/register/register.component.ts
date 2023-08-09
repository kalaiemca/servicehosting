import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerform:FormGroup;
  constructor(private builder: FormBuilder, private service: DataService, private router: Router,
    private toastr: ToastrService) {
  
  this.registerform = this.builder.group({
    UserName: this.builder.control('' , Validators.compose([Validators.required, Validators.minLength(5)])),
    Name: this.builder.control('', Validators.required),
    Password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    Email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    Gender: this.builder.control('male'),
    Role: this.builder.control(''),
    Project: this.builder.control(''),
    Isactive: this.builder.control(true)
    
  });
}
  proceedregister(data:any) {
    console.log(this.registerform.value)
    if (this.registerform.valid) {
      this.service.RegisterUser(this.registerform.value).subscribe(data => {
        this.toastr.success('Please contact admin for enable access.','Registered successfully')
        this.router.navigate(['userlist'])
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }
}
