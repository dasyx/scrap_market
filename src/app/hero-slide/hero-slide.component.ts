import { Component } from "@angular/core";
import { NgForOf, NgStyle } from "@angular/common";

@Component({
  selector: "app-hero-slide",
  standalone: true,
  imports: [NgStyle, NgForOf],
  templateUrl: "./hero-slide.component.html",
  styleUrl: "./hero-slide.component.css",
})
export class HeroSlideComponent {
  images = [
    { src: "/images/flower.webp" },
    { src: "/images/mask.webp" },
    { src: "/images/water.webp" },
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.images.length) % this.images.length;
  }
}
