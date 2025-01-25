import { Component } from '@angular/core';
import { ProduktyService } from '../produkty.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-filtry',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './filtry.component.html',
  styleUrl: './filtry.component.scss'
})
export class FiltryComponent {

  private checked: boolean = true;  

  get listaKategorii(): Array<string> {
    return this.produkty.kategorie; 
  }

  get select(): Record<string, boolean> {
    return this.produkty.select;
  }

  set select(value: Record<string, boolean>) {
    this.produkty.select = value;
  }

  public rev(){

    this.checked = !this.checked; 

    this.produkty.kategorie.forEach((kategoria) => {
      this.select[kategoria] = this.checked
    });    
  }

  constructor(private produkty: ProduktyService) {

    this.produkty.kategorie.forEach((kategoria) => {
      this.select[kategoria] = true
    });

   }
}
