import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day6';
  strUIDForQueryParam='Navnath';
  strPWDForQueryParams='kumbhar';

  constructor(private authenticationService:AuthenticationService){}

  loginInForAuthGuard()
  {
    this.authenticationService.login();

  }
  loginOutForAuthGuard()
  {
    this.authenticationService.logout();
  }

}
