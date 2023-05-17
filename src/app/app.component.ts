import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './Interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  isLogged: number;
  showFiller = false;
  _user = ''
  constructor(private _router: Router) {
    this.isLogged = 0;
    if (localStorage.getItem('user')) {
      this.isLogged = 1;
      this._user = localStorage.getItem('user2') || ''
    }
  }

  navigate(uri: string) {
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => this._router.navigate([uri]));
  }

  logout() {
    localStorage.clear()
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => this._router.navigate(['/login']));
  }

}

