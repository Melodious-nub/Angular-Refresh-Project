import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DataService } from '../service/data.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user-modal',
  imports: [MatDialogModule, MatButtonModule, FormsModule, MatSnackBarModule],
  templateUrl: './add-user-modal.component.html',
  styleUrl: './add-user-modal.component.css'
})
export class AddUserModalComponent {
  userData:any = {};
  @Output() userCreated = new EventEmitter(); 

  constructor(private api: DataService, private snackBar: MatSnackBar) {
    this.userData.imgUrl = 'https://avatar.iran.liara.run/public/';
  }

  addNewUser() {
    // console.log(this.userData);
    this.api.createUser(this.userData).subscribe(res => {
      // Show snackbar
      this.snackBar.open('User added successfully!', 'Close', {
        duration: 3000, // 3 seconds
        horizontalPosition: 'end', // Position options: 'start', 'center', 'end', 'left', 'right'
        verticalPosition: 'bottom',
      });
      this.userCreated.emit(true);
    })
  }

}
