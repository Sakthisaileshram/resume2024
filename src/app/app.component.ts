import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Page1Component } from "./page1/page1.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Page1Component, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resume2024';
}
