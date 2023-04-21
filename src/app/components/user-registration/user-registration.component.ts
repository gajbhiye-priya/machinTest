import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { ActivatedRoute, Router } from '@angular/router';


export interface DialogData {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  age: number;
  state: string;
  country: string;
  address: string;
  tags: string;
  
}

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  profile_id:any
  result:any=[];

  isEditable:boolean
  
  hobbies:string[] = []
  createForm:any=[]

  public stateList=['Maharashtra',  'Goa',  'Gujarat',   'Hydrabad', 'Andhra Pradesh', 'Asam', "tripura"]

  public CountryList=['India',  'Pakistan',  'Bangladesh',   'Afghanistan', 'Albania', 'Brunei', "Cambodia"]

  public selectAddress=['Home', 'Company']
         
 public selectHome:boolean=false

 public selectCompany=''

 datas:any =[]
 
 firstName: string;
 lastName: string;
 email: string;
 contactNumber: string;
 age: number;
 state: string;
 country: string;
 address: string;
 tags: string;

  constructor( private register:UserRegistrationService, private router:Router,private actRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<UserRegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData 
  ) {
  

    this.createForm = new FormGroup({
      firstName: new FormControl('',  [Validators.required, Validators.maxLength(20)]),
      lastName: new FormControl(''),
      email: new FormControl(''),
      contactNumber: new FormControl(''),
      age: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
      address: new FormControl(''),
      tags: new FormControl(''),  
    });

  }
  ngOnInit(): void {
   
  }
  


  onEnter(value: any)
  
  { 

    if(value){
      
     this.hobbies.push(value)
      this.createForm.patchValue( {'tags':null} );
    console.log("show value",this.hobbies )

    }
  
  }

  removeHobby(item:any){
    this.hobbies.splice(item,1)

  }

  
  submit(){

     this.register.addProfile(this.createForm.value).subscribe((result:any)=>{
     console.log("show registration", result)
     if(result){
      
      this.router.navigate(['/user-profile',result.id]);
      this.dialogRef.close();
     }
     
    } )
  }




  value: number = 123;
  options: Options = {
   
    ceil: 100
  };
 
  
 }


