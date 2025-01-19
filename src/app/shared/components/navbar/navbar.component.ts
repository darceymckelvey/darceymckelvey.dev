import { Component } from "@angular/core";
import { NavigationEnd, RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { Subscription, filter } from "rxjs";
import { Router } from "@angular/router";
import { OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterModule, MatIconModule, CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMobileMenuOpen = false;
  isMobile = false;
  private routerSubscription: Subscription;

  // close mobile menu when route changes
  constructor(private router: Router) {
    this.routerSubscription = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe(() => {
        this.isMobileMenuOpen = false;
      });
  }

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize.bind(this));
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
    window.removeEventListener("resize", this.checkScreenSize.bind(this));
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = "";
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? "hidden" : "";
  }

  tooltips = {
    home: "Home",
    projects: "Projects",
    contact: "Contact",
    blog: "Blog",
    codestrata: "CodeStrata",
  };

  navItems = [
    { icon: "home", path: "/home", label: this.tooltips.home },
    { icon: "projects", path: "/projects", label: this.tooltips.projects },
    { icon: "contact", path: "/contact", label: this.tooltips.contact },
    { icon: "blog", path: "/blog", label: this.tooltips.blog },
    {
      icon: "codestrata",
      path: "/codestrata",
      label: this.tooltips.codestrata,
    },
  ];
}
