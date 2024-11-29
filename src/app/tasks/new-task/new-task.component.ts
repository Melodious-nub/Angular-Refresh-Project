import { Component, EventEmitter, Output } from '@angular/core';

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

  onCancel() {
    this.cancel.emit();
  }

  onAddNewData() {
    this.newAddData.emit({
      title: this.title, summary: this.summary, dueDate: this.dueDate
    });
  }

}
