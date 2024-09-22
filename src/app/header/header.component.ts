import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  standalone: true, // Assurez-vous que votre composant est bien défini comme "standalone"
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class HeaderComponent {}
