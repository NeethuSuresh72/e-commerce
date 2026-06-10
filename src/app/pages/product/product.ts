import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductCard } from '../../ui/product-card/product-card';
import { Api } from '../../api';

@Component({
  selector: 'app-product',
  imports: [ProductCard],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

  product: any[] = [];

  constructor(private api: Api, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.api.getAllProducts().subscribe((res: any) => {
      this.product = res;
      console.log(this.product);
      this.cdr.detectChanges()
    });
  }

}