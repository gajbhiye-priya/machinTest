import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';







@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  age: number;
  state: string;
  country: string;
  address: string;
  tags: string;


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(UserRegistrationComponent, {
      data: {
        firstName: this.firstName, lastName: this.lastName, email: this.email,
        contactNumber: this.contactNumber, age: this.age, state: this.state,
        country: this.country, address: this.address, tags: this.tags
      },
      width: '55%', height: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.firstName = result;
      this.lastName = result;
      this.email = result;
      this.contactNumber = result;
      this.age = result;
      this.state = result;
      this.country = result;
      this.address = result;
      this.tags = result;
    });

  }

}

