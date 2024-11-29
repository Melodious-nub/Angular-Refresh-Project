import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    standalone: false,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    @Output() testData = new EventEmitter<string>();

    onEventClick() {
        this.testData.emit('Output worked');
    }
}