import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-themes',
  standalone: false,
  templateUrl: './themes.html',
  styleUrl: './themes.scss'
})
export class Themes {
  isDark = signal(false);

  constructor() {
    this.checkUserPreference();
  }

  toggleTheme() {
    this.isDark.update(value => !value);
    this.updateTheme();
  }

  checkUserPreference() {
    if (typeof window !== 'undefined') {
      const isDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDark.set(isDarkPreferred);
      this.updateTheme();
    }
  }

  updateTheme() {
    if (this.isDark()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
