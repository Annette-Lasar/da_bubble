import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconTextButtonComponent } from '../../shared/components/buttons/icon-text-button/icon-text-button.component';

@Component({
  selector: 'bubble-login',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, IconTextButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    // currently dummy data – auth will be added later
    console.log('Login geklickt → Navigiere zum Messenger');
    this.router.navigate(['/messenger']);
  }
}
