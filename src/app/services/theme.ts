import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio_theme';
  readonly isDark = signal<boolean>(false);

  constructor() {
    this.initTheme();
    effect(() => {
      const dark = this.isDark();
      if (typeof document !== 'undefined') {
        if (dark) {
          document.documentElement.classList.add('dark');
          localStorage.setItem(this.THEME_KEY, 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem(this.THEME_KEY, 'light');
        }
      }
    });
  }

  private initTheme(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem(this.THEME_KEY);
      if (savedTheme) {
        this.isDark.set(savedTheme === 'dark');
      } else if (typeof window.matchMedia === 'function') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDark.set(prefersDark);
      }
    }
  }

  toggleTheme(): void {
    this.isDark.update(current => !current);
  }
}
