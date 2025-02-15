import { Component } from '@angular/core';
import { ProduktyService } from '../produkty.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent {

  public name: string = "";
  public category: string = "";

  constructor(public prod:ProduktyService) {
    this.category = this.prod.kategorie[0];
   }

  addProduct(){
    this.prod.addProduct(this.name, this.category);
  }

}
