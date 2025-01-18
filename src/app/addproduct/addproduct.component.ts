import { Component } from '@angular/core';
import { ProduktyService } from '../produkty.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [NgFor],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent {

  constructor(public prod:ProduktyService) { }

}
