import { Component, OnInit } from '@angular/core';
import { Theme } from '../theme';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
  standalone: false,
})
export class PengaturanPage implements OnInit {
  constructor(private theme: Theme) {}

  ngOnInit() {}

  getDarkMode(): boolean {
    return this.theme.getDarkMode();
  }

  toggleDarkMode() {
    this.theme.toggleTheme();
  }

  getThemeName(): string {
    return this.theme.getThemeName();
  }
}
