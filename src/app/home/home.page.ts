import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonInput,
    IonButton,
    IonItem,
    IonLabel,
    CommonModule,
    FormsModule,
  ],
})
export class HomePage {
  username: string = '';
  password: string = '';
  loggedIn: boolean = false;
  error: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.loggedIn = true;
      this.error = '';
    } else {
      this.error = 'Usuário ou senha inválidos.';
    }
  }

  goToCrud() {
    this.router.navigate(['/crud']);
  }
}
