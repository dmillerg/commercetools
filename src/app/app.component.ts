import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { SplashScreenComponent } from './shared/components/splash-screen/splash-screen.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WelcomeModalComponent } from './shared/components/welcome-modal/welcome-modal.component';
import { ModalService } from './core/services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SplashScreenComponent,
    FooterComponent,
    WelcomeModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'commercetools';
  welcomeModal = inject(ModalService).modal

  splashscreen: boolean = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.splashscreen = false;
    }, 2000);
  }
}
