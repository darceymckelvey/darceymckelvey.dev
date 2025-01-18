import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterModule, MatIconModule, CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  tooltips = {
    home: "Home",
    projects: "Projects",
    contact: "Contact",
    blog: "Blog",
    codestrata: "CodeStrata",
  };
}
