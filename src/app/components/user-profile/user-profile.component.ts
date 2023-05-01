import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  isupdate: boolean = false
  profileId: any
  usersId: any
  fileName: string = "";
  getData: any

  data: any = []


  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  age: number;
  state: string;
  country: string;
  address: string;
  tags: string;

  constructor(public router: Router, private userdataService: UserRegistrationService, private actRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.profileId = this.actRoute.snapshot.paramMap.get("id");
    console.log("ProfileId", this.profileId)
    this.userdataService.getProfileById(this.profileId).subscribe((result) => {
      console.log("get all list", result)
      this.getData = result
    })
  }

  onChange(event) {
    this.fileName = event.target.files[0].name;
  }

  editProfileUser(code: any) {
    this.isupdate = true
    console.log(code)
    this.editProfile(code)
  }

  addUserProfile() {
    this.editProfile(0)
  }

  editProfile(userId: any) {
    console.log("userId", userId)
    const dialogRef = this.dialog.open(UserRegistrationComponent, {
      data: {
        userId: userId
      },

      width: '55%', height: '650px',
    })



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}
