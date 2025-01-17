import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () =>
      import("../app/features/home/home.component").then(
        (m) => m.HomeComponent,
      ),
  },
  {
    path: "home",
    loadComponent: () =>
      import("../app/features/home/home.component").then(
        (m) => m.HomeComponent,
      ),
  },
  {
    path: "projects",
    loadComponent: () =>
      import("../app/features/projects/projects.component").then(
        (m) => m.ProjectsComponent,
      ),
  },
  {
    path: "contact",
    loadComponent: () =>
      import("../app/features/contact/contact.component").then(
        (m) => m.ContactComponent,
      ),
  },
  {
    path: "blog",
    loadComponent: () =>
      import("../app/features/blog/blog.component").then(
        (m) => m.BlogComponent,
      ),
  },
  {
    path: "codestrata",
    loadComponent: () =>
      import("../app/features/codestrata/codestrata.component").then(
        (m) => m.CodestrataComponent,
      ),
  },
];
