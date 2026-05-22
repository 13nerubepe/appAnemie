import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {IonButton, IonContent, IonIcon, IonInput, IonToast} from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    FormsModule,

  ]
})
export class LoginComponent {







  showToast = false;
  toastMessage = '';
  toastColor = 'danger';

  onLogin() {
    if (!this.username || !this.password) {
      this.toastMessage = 'Veuillez remplir tous les champs.';
      this.toastColor = 'danger';
      this.showToast = true;
      return;
    }

    this.loading = true;

    // TODO: appelle ton service d'authentification ici
    setTimeout(() => {
      this.loading = false;
      // navigation vers home après succès
    }, 2000);
  }


  username: string = '';
  password: string = '';
  remember: boolean = false;
  errorMsg: string = '';
  loading = false;
  show: boolean = false;
  isShowResetPassword: boolean = false;
  isResetPassword: boolean = false;
  passwordConfirmation: string = '';
  visible: boolean = false;

  constructor(
    // private authService: AuthService,
    // private messageService: MessageService
    // private router: Router
  ) {}

  // ngOnInit() {}

  // login() {
  //   this.loading = true;
  //   this.authService.login(this.username, this.password).subscribe({
  //     next: (response) => {
  //       window.location.href = response.redirectUrl;
  //       //alert('Connexion réussie !');
  //       this.showSuccess();
  //       //this.router.navigateByUrl('dashboard-ecommerce').then(r => console.log(r));
  //     },
  //     error: (err) => {
  //       this.errorMsg = err.error.error;
  //       this.loading = false;
  //       this.showError();
  //       this.isResetPassword = err.status == 426;
  //       /* if(err.status == 426) {
  //           this.router.navigate(['new-password', this.username]).then(r => console.log(r));
  //       }*/
  //     },
  //     complete: () => {
  //       this.loading = false;
  //     }
  //   });
  // }

  // logOrResetPassword() {
  //   if (this.isResetPassword) {
  //     this.changePassword();
  //   } else {
  //     this.login();
  //   }
  // }
  //
  // showError(msg?: string) {
  //   this.messageService.add({ severity: 'error', detail: msg ? msg : this.errorMsg, key: 'lg' });
  // }
  //
  // showSuccess() {
  //   this.messageService.add({ severity: 'success', summary: 'Connected', detail: '', key: 'lg' });
  // }

  _onToggle() {
    this.show = !this.show;
  }

  _onTogglePassword() {
    this.isShowResetPassword = !this.isShowResetPassword;
  }

  showDialog() {
    this.visible = true;
  }
  // changePassword() {
  //   this.loading = true;
  //   if (this.password === this.passwordConfirmation) {
  //     this.showSuccess();
  //     this.authService.passwordInit(this.username, this.passwordConfirmation).subscribe({
  //       next: (value) => {
  //         //window.open('https://example.com', '_blank');
  //         this.router.navigateByUrl('/').then((r) => console.log(r));
  //         this.loading = false;
  //         this.showSuccess();
  //       },
  //       error: (err) => {
  //         this.errorMsg = err.error.error;
  //         this.loading = false;
  //         this.showError(this.errorMsg);
  //       },
  //       complete: () => {
  //         this.loading = false;
  //       }
  //     });
  //   } else {
  //     this.showError("Passwords doesn't match");
  //     this.loading = false;
  //   }
  // }

}
