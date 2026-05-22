import { Component } from '@angular/core';
import {IonButton, IonContent, IonIcon, IonInput, IonSelect, IonSelectOption} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [
    IonButton,
    IonSelectOption,
    IonIcon,
    IonInput,
    IonSelect,
    FormsModule,
    IonContent
  ]
})
export class RegisterComponent   {


  firstName = '';
  lastName  = '';
  email     = '';
  phone     = '';
  password  = '';
  confirmPassword = '';
  role      = '';
  loading   = false;

  constructor() { }


  goToLogin() {
    // this.router.navigate(['/login']);
}

}
