import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

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
        TasksModule
    ],
    // for letting angular know the entry component
    bootstrap: [AppComponent]
})
export class AppModule {}