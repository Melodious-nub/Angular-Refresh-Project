import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-refresh-course';

  users = DUMMY_USERS;
  selectedUserId?: string;

  onRecive(event: string){
    console.log(event);
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    // console.log('selected user id' + id);
    this.selectedUserId = id;
  }
}
