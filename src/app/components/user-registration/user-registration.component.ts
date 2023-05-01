import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  isUserUpdate: boolean = false
  profileId: any
  inputData: any
  getProfileId: any

  userId: any
  profile_id: any
  result: any = [];

  isEditable: boolean

  hobbies: string[] = []
  createForm: any = []

  public stateList = ['Maharashtra', 'Goa', 'Gujarat', 'Hydrabad', 'Andhra Pradesh', 'Asam', "tripura"]

  public CountryList = ['India', 'Pakistan', 'Bangladesh', 'Afghanistan', 'Albania', 'Brunei', "Cambodia"]

  public selectAddress = ['Home', 'Company']

  public selectHome: boolean = false

  public selectCompany = ''

  datas: any = []

  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  age: number;
  state: string;
  country: string;
  address: string;
  tags: string;

  constructor(private register: UserRegistrationService,
    private actrout: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<UserRegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {


    this.createForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      contactNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9_-]{10,12}$"), Validators.maxLength(10)]),
      age: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      state: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      country: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      tags: new FormControl(''),
    });

  }
  ngOnInit(): void {
    console.log("data..", this.data)
    this.inputData = this.data
    console.log("inputData", this.inputData)
    if (this.inputData.userId > 0) {
      console.log("inputDatacodeata", this.inputData.userId)
      this.isUserUpdate = true
      this.setDialogData(this.inputData.userId)
    }

  }

  setDialogData(code: any) {
    this.register.getProfileById(code).subscribe(item => {
      this.getProfileId = item;
      console.log("getProfileId", this.getProfileId)
      console.log("setDialogData is working")
      this.createForm.setValue({
        firstName: this.getProfileId.firstName,
        lastName: this.getProfileId.lastName,
        email: this.getProfileId.email,
        contactNumber: this.getProfileId.contactNumber,
        age: this.getProfileId.age,
        state: this.getProfileId.state,
        country: this.getProfileId.country,
        address: this.getProfileId.address,
        tags: this.getProfileId.tags,
      })
    })

  }

  onEnter(value: any) {
    if (value) {
      this.hobbies.push(value)
      this.createForm.patchValue({ 'tags': null });
      console.log("show value", this.hobbies)
    }
  }

  removeHobby(item: any) {
    this.hobbies.splice(item, 1)
  }


  submit() {
    this.register.addProfile(this.createForm.value).subscribe((result: any) => {
      console.log("show registration", result)
      if (result) {
        this.router.navigate(['/user-profile', result.id]);
        this.dialogRef.close();
      }
    })
  }

  update() {
    this.register.userDataupdate(this.createForm.value, this.getProfileId).subscribe((result: any) => {
      console.log("show registration", result)
      if (result) {
        this.router.navigate(['/user-profile', result.id]);
        this.dialogRef.close();
      }
    })
  }


  value: number = 123;
  options: Options = {
    ceil: 100
  };
}


