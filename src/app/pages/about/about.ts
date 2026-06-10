import { Component } from '@angular/core';
import { Faq } from '../../ui/faq/faq';
import { InfoCard } from '../../ui/info-card/info-card';

@Component({
  selector: 'app-about',
  imports: [Faq, InfoCard],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}