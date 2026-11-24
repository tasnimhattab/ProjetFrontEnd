import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-list-user',
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './list-user.html',
  styleUrl: './list-user.css',
})
export class ListUser {
  list: User[];
  friends: string[];
  friend1: string;
  friend2: string;
  friend3: string;
  notifications: string[];
  showNotifications: boolean;
  constructor() {}
  ngOnInit() {
    this.list = [
      {
        username: 'Totoro',
        email: 'totoro.chihiro@gmail.com',
        age: 20,
      },
    ];

    this.friends = ['Sami', 'Sarra', 'Amine'];
    this.friend1 = 'Ahmed';
    this.friend2 = 'Ahmed';
    this.friend3 = 'Ahmed';

    this.notifications = [
      "Sami vous a envoyé une demande d'ami.",
      'Sara a commenté votre publication.',
    ];

    this.showNotifications = false;
  }
  afficherNotifications() {
    this.showNotifications = !this.showNotifications;
  }
}
