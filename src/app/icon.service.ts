import { Injectable } from "@angular/core";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Icons } from "./icons";

@Injectable({
  providedIn: "root",
})
export class IconService {
  private registeredIcons = new Set<string>();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {}

  public registerIcons(): void {
    const baseUrl = "icons";
    Object.values(Icons).forEach((icon) => {
      if (!this.registeredIcons.has(icon)) {
        const iconUrl = `${baseUrl}/${icon}.svg`;
        this.matIconRegistry.addSvgIcon(
          icon,
          this.domSanitizer.bypassSecurityTrustResourceUrl(iconUrl),
        );
        this.registeredIcons.add(icon);
      }
    });
  }
}
