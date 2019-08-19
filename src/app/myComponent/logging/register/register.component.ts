import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../myService/users.service';
import {User} from '../../../classes/users'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private user:UsersService) { }

  jobs=['Hotels','Resturant','Retail'];
  ids=['inlinelineRadio1','inlinelineRadio2','inlinelineRadio1'];
  selectedJob;
  showMessage:boolean=false;
  serverError:string;

  ngOnInit() {
  }
  radioChangeHandler (event: any) {
    this.selectedJob= event.target.value;
  }
  onSubmit(form:NgForm){
    this.user.postUser(form.value).subscribe((res:any)=>{
       this.showMessage=true;
       setTimeout(()=>this.showMessage=false,4000);
       this.serverError=res.message;
       
    },(err)=>{
      this.serverError=err;
  });
  }

}
