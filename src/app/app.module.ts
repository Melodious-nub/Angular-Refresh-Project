import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";
import { HttpClientModule } from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddUserModalComponent } from "./add-user-modal/add-user-modal.component";
import { ManageUserModalComponent } from "./manage-user-modal/manage-user-modal.component";
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    // declaration for non standalone component
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
    ],
    // declaration for standalone component and others imports
    imports: [
        BrowserModule,
        SharedModule,
        TasksModule,
        HttpClientModule,
        AddUserModalComponent,
        ManageUserModalComponent,
        MatButtonModule,
        MatDialogModule,
        MatSnackBarModule
    ],
    // for letting angular know the entry component
    bootstrap: [AppComponent],
    providers: [
      provideAnimationsAsync()
    ]
})
export class AppModule {}