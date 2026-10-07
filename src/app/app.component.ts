import { Component } from '@angular/core';
import { Theme } from './theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private theme: Theme,
    private router: Router,
  ) {}

  getThemeClass(): string {
    return this.theme.getThemeClass();
  }

  logout() {
    this.router.navigate(['/tabs/home']);
  }
}
