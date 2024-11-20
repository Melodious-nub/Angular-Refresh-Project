import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from './dummy-task';
interface Task {
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string,
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) selectedUserId!: string;

  tasks = dummyTasks;

  get selectedTask() {
    return this.tasks.filter((task) => task.userId === this.selectedUserId)!;
  }

  constructor() {
    console.log(this.selectedTask);
    
  }

}
