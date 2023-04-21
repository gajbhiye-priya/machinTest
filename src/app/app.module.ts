import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationService } from './services/user-registration.service';


const routes: Routes = [
  {path:'', redirectTo:'home-page', pathMatch:'full'},
 {path:'home-page', component:HomePageComponent},
 {path:'user-profile', component:UserProfileComponent},
 {path:'user-profile/:id', component:UserProfileComponent}, 

];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    UserRegistrationComponent,
    UserProfileComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    NgxSliderModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    // NgToastModule,
    // NgConfirmModule,
    MatRadioModule,
    HttpClientModule,

    RouterModule.forRoot(routes)
  ],


  exports: [
    RouterModule

  ],
  

  entryComponents: [
    UserRegistrationComponent
],
  providers: [
    UserRegistrationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
