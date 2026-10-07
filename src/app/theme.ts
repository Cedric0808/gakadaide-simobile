import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  darkMode: boolean = false;

  toggleTheme() {
    if (this.darkMode) {
      this.darkMode = false;
    } else {
      this.darkMode = true;
    }
  }

  getDarkMode(): boolean {
    return this.darkMode;
  }

  getThemeClass(): string {
    if (this.darkMode) {
      return 'dark-theme';
    }

    return 'light-theme';
  }

   getThemeName(): string {
    if (this.darkMode) {
      return 'Gelap';
    }

    return 'Terang';
  }


  constructor() {}
}
