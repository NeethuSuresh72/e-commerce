import { ChangeDetectorRef, Component } from '@angular/core';
import { Api } from '../../api'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singlepg',
  imports: [],
  templateUrl: './singlepg.html',
  styleUrl: './singlepg.css',
})
export class Singlepg {
  singleData: any;
  productId: any;
  constructor(private api: Api, private cdr: ChangeDetectorRef, private ar: ActivatedRoute){

  }

  ngOnInit(){
    this.productId= this.ar.snapshot.params['id'];
    this.api.getSingleProduct(this.productId).subscribe((res: any) => {
      this.singleData = res;
      this.cdr.detectChanges()
    })
  }
}
