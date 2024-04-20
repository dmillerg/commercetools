import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { SplashScreenComponent } from './shared/components/splash-screen/splash-screen.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SplashScreenComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'commercetools';

  splashscreen: boolean = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.splashscreen = false;
    }, 2000);
  }
}
