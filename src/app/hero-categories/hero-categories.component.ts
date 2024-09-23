import { Component } from "@angular/core";
import { NgFor } from "@angular/common";

interface Category {
  title: string;
  image: string;
}

@Component({
  selector: "app-categories",
  standalone: true,
  imports: [NgFor],
  templateUrl: "./hero-categories.component.html",
  styleUrl: "./hero-categories.component.css",
})
export class HeroCategoriesComponent {
  categories: Category[] = [
    { title: "Hydratation & Détresse", image: "/images/water_category.webp" },
    { title: "Soutien Textile", image: "/images/textile_category.webp" },
    { title: "Confort Nomade", image: "/images/confort_category.webp" },
    { title: "Energie & Désespoir", image: "/images/energie_category.webp" },
    { title: "Cuisine d'Urgence", image: "/images/cuisine_category.webp" },
    {
      title: "Communication & Mirages",
      image: "/images/communication_category.webp",
    },
  ];
}
