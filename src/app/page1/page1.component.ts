import { Component } from '@angular/core';
import { NavbarComponent as NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-page1',
  imports: [CommonModule ,NavbarComponent],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  menuOpen = false;
  

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
