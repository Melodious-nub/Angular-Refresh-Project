import { Inject, Injectable } from "@angular/core";
import { Task } from "../interfaces/task.interface";
import { dummyTasks } from "./dummy-task";

@Injectable({providedIn: 'root'})
export class TaskService {
    tasks = dummyTasks;

    selectedTask(selectedUserId: string) {
        return this.tasks.filter((task) => task.userId === selectedUserId)!;
    }

    onComplete(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id)!;
    }

    onAdd(data: Task, selectedUserId: string) {
        // push add the value on end of the array and unshift add the value on first
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: selectedUserId,
            title: data.title,
            summary: data.summary,
            dueDate: data.dueDate
        });
    }
}
