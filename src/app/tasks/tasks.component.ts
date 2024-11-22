import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from './dummy-task';
import { NewTaskComponent } from "./new-task/new-task.component";
import { Task } from '../interfaces/task.interface';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
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

  completeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)!;
  }

  isAddingTask: boolean = false;
  openAddTask() {
    this.isAddingTask = true;
  }

  onCloseTask() {
    this.isAddingTask = false;
  }

  onAddNewTask(data: Task) {
    // push add the value on end of the array and unshift add the value on first
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.selectedUserId,
      title: data.title,
      summary: data.summary,
      dueDate: data.dueDate
    });
    this.isAddingTask = false;
  }

}
