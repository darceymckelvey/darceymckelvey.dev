import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from './shared/components/navbar/navbar.component'
import { IconService } from './icon.service'
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'darceymckelvey'

  constructor(private iconService: IconService) {}

  ngOnInit() {
    this.iconService.registerIcons()
  }
}
