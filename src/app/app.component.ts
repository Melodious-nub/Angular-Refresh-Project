import { Component, OnInit } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { DataService } from './service/data.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';
import { ManageUserModalComponent } from './manage-user-modal/manage-user-modal.component';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  users:any = [];
  selectedUserId?: string;

  constructor(private api: DataService, private dialog: MatDialog,) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  openDialogAddUser() {
    const dialogRef = this.dialog.open(AddUserModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        // console.log('User added successfully, refreshing user list...');
        this.fetchUsers();
      }
    });
  }

  openDialogManageUser() {
    const dialogRef = this.dialog.open(ManageUserModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  fetchUsers() {
    this.api.getUsers().subscribe(res => {
      this.users = res;
      // console.log(this.users);
    })
  }


  selectedTasks: any;
  fetchSelectedTask(id: any) {
    this.api.getTasks(id).subscribe(res => {
      this.selectedTasks = res;
      // console.log(res, 'triggerd selected task');
    })
  }

  onRecive(event: string){
    console.log(event);
  }

  get selectedUser() {
    return this.users.find((user:any) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    // console.log('selected user id' + id);
    this.selectedUserId = id;
    this.fetchSelectedTask(id);
  }
}
