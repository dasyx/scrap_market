import { NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-hero-services",
  standalone: true,
  imports: [MatIcon, NgFor],
  templateUrl: "./hero-services.component.html",
  styleUrl: "./hero-services.component.css",
})
export class HeroServicesComponent {
  services = [
    {
      icon: "construction",
      title: "Réparation Express",
      description:
        "Quand le monde s'effondre, on répare plus vite que la lumière. Pièces détachées incluses, rouillée ou pas.",
    },
    {
      icon: "local_shipping",
      title: "Livraison dans le Wasteland",
      description:
        "Livraison dans tous les endroits effondrés. Oui, même dans les zones radioactives. Le sourire en option.",
    },
    {
      icon: "security",
      title: "Protection Anti-Mutants",
      description:
        "Nos systèmes de sécurité protègent des mutants... et des voisins un peu trop affamés.",
    },
    // Ajoute d'autres services si nécessaire
  ];
}
