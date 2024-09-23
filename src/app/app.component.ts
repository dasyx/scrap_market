import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { HeroSlideComponent } from "./hero-slide/hero-slide.component";
import { HeroCategoriesComponent } from "./hero-categories/hero-categories.component";
import { HeroServicesComponent } from "./hero-services/hero-services.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroSlideComponent,
    HeroCategoriesComponent,
    HeroServicesComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "scrap_city-market";
}
