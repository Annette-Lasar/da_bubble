import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { IconButtonComponent } from '../shared/components/buttons/icon-button/icon-button.component';

@Component({
  selector: 'bubble-messenger',
  standalone: true,
  imports: [MatButtonModule, IconButtonComponent],
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.scss',
})
export class MessengerComponent {
  constructor(private router: Router) {}

  onLogout() {
    console.log('Logout geklickt -> Navigiere zurück zum Login');
    this.router.navigate(['/authentication/login']);
  }
}
