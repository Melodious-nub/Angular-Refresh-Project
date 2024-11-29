import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";
import { FormsModule } from "@angular/forms";
import { CommonModule, DatePipe } from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        TasksComponent,
        TaskComponent,
        NewTaskComponent,
    ],
    exports: [TasksComponent],
    imports: [CommonModule, FormsModule, SharedModule]
})
export class TasksModule { }