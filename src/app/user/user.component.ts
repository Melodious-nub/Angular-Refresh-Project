import { Component, computed, EventEmitter, Input, input, output, Output, signal } from '@angular/core';
import { User } from '../interfaces/user.model';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // default way zone.js and angular default change detection machanism
  // selectedUser = DUMMY_USERS[randomIndex];

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }

  // using signal
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

  //   // for updating signal data
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]) ;
  // }


  // input in default way
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // user as object
  // @Input({required: true}) user!: {
  //   id: string,
  //   avatar: string,
  //   name: string
  // }

  // user input with ref. interface
  @Input({required: true}) user!: User;
  // output common way used from begining
  @Output() selectUser = new EventEmitter<string>();
  // output the mordern way (does actuly same as decorator)
  // selectUser = output<string>();

  // for activating the class on user list
  @Input({required: true}) selected!: boolean;

  get imagePath() {
      return 'assets/users/' + this.user.avatar;
  }

  // signal ways input
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {return 'assets/users/' + this.avatar()})  

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
