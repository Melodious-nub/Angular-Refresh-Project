import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-user-modal',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './manage-user-modal.component.html',
  styleUrl: './manage-user-modal.component.css'
})
export class ManageUserModalComponent {

}
