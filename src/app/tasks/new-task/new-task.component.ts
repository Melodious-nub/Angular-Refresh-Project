import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  title: string = '';
  summary: string = '';
  dueDate: string = 'dueDate';
  @Output() newAddData = new EventEmitter();
  @Input({required: true}) selectedUserId: any;

  onCancel() {
    this.cancel.emit();
  }

  onAddNewData() {
    this.newAddData.emit({
      userId: this.selectedUserId, title: this.title, summary: this.summary, dueDate: this.dueDate
    });
  }

}
