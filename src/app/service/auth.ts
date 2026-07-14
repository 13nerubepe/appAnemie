import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
// import {HttpHeaders} from "@angular/common/module.d";
import {AppConstants} from "../constants/constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl: string = AppConstants.API_AUTHSERVER_URL;

  // private loggedIn = new BehaviorSubject<Boolean>(false);
  // private userSubject = new BehaviorSubject<AppUser | null>(null);
  // private userGroupSubject = new BehaviorSubject<AppGroup | null>(null);

  constructor(
    // eslint-disable-next-line @angular-eslint/prefer-inject
    private http: HttpClient,
    // private cookieService: CookieService
  ) {}

  // login(username: string, password: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     Accept: 'application/json',
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   });
  //   const body = `username=${username}&password=${password}`;
  //
  //   return this.http.post(`${this.apiUrl}/login`, body, {
  //     headers: headers,
  //     withCredentials: true
  //   });
  // }

  // passwordInit(login: string, newPassword: string): Observable<any> {
  //   const url = `${this.apiUrl}/user/password/init?login=${encodeURIComponent(login)}&newPassword=${encodeURIComponent(newPassword)}`;
  //
  //   return this.http.post(url, null, {
  //     headers: new HttpHeaders({ Accept: 'application/json' }),
  //     withCredentials: true
  //   });
  // }

  // public.old isLoggedIn(): Observable<Boolean> {
  //   let isLoggedIn = this.cookieService.check('accessToken');
  //   if (isLoggedIn) {
  //     this.setLoggedIn(true);
  //   } else {
  //     this.setLoggedIn(false);
  //   }
  //   // return this.loggedIn.asObservable();
  // }

  private setLoggedIn(newValue: Boolean): void {
    // this.loggedIn.next(newValue);
  }

  // public.old getUserInfos(): Observable<AppUser> {
  //   const url = AppConstants.API_GATEWAY_URL + '/userinfo';
  //   return this.http.get<any>(url);
  // }

  // public.old getUserInfos2(): Observable<AppUser> {
  //   const url = AppConstants.API_GATEWAY_URL + '/userinfo';
  //   return this.http.get<AppUser>(url).pipe(tap((user) => this.userSubject.next(user)));
  // }
  //
  // public.old get user$(): Observable<AppUser | null> {
  //   return this.userSubject.asObservable();
  // }
  //
  // public.old getCurrentUserValue(): AppUser | null {
  //   return this.userSubject.value;
  // }
  // public.old getUserGroups(userId: string | undefined): Observable<AppGroup[]> {
  //   return this.http.get<AppGroup[]>(`${AppConstants.API_GATEWAY_URL}/administration/groupe/user/${userId}`);
  // }

  /**
   * Fetch MFA setup data (secret, QR code, username) from the server session.
   * Replaces the old flow where secret/qrcode were passed as URL query params.
   */
  // getMfaSetupData(): Observable<{ secret: string; qrcode: string; username: string }> {
  //   return this.http.get<{ secret: string; qrcode: string; username: string }>(
  //     `${AppConstants.API_AUTHSERVER_URL}/mfa-challenge/setup-data`,
  //     { withCredentials: true }
  //   );
  // }
  //
  // otpLogin(code: number): Observable<any> {
  //   return this.http.post(
  //     `${AppConstants.API_AUTHSERVER_URL}/mfa-challenge`,
  //     { code },
  //     { withCredentials: true }
  //   );
  // }
  //
  // logout() {
  //   this.http.post(`${AppConstants.API_GATEWAY_URL}/logout`, null, { withCredentials: true }).subscribe({
  //     complete: () => window.location.reload()
  //   });
  // }

  // getMenuUser(module: string | null, isAutorisation: boolean = false): Observable<Fonctionnalite[]> {
  //   return this.http.get<Fonctionnalite[]>(`${AppConstants.API_GATEWAY_URL}/administration/groupe/user/fonctionnalites?isAutorisation=${isAutorisation}&module=${module}`);
  // }

  // getUserNotification() {
  //   return this.http.get<AppNotification[]>(`${AppConstants.API_GATEWAY_URL}/administration/notification/unread`);
  // }
  //
  // lireNotification(notificationId: string) {
  //   return this.http.post(`${AppConstants.API_GATEWAY_URL}/administration/notification/${notificationId}`, {});
  // }
  // private menuUser$?: Observable<Fonctionnalite[]>;
  //
  // getMenuUserCached(
  //   module: string | null,
  //   isAutorisation: boolean = false
  // ): Observable<Fonctionnalite[]> {
  //
  //   if (!this.menuUser$) {
  //     this.menuUser$ = this.getMenuUser(module, isAutorisation).pipe(
  //       shareReplay(1)
  //     );
  //   }
  //
  //   return this.menuUser$;
  // }

  // 🔄 si changement utilisateur / logout
  // clearMenuCache() {
  //   this.menuUser$ = undefined;
  // }

}
