import { Component } from '@angular/core';
import { Carousel } from '../../ui/carousel/carousel';
import { CategoryCard } from '../../ui/category-card/category-card';

@Component({
  selector: 'app-home',
  imports: [Carousel, CategoryCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}