import { Component } from '@angular/core';
import { ProduktyService } from '../produkty.service';
import { Produkt } from '../produkt';
import { log } from 'console';
import { NgFor } from '@angular/common';
import e from 'express';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listaprod',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './listaprod.component.html',
  styleUrl: './listaprod.component.scss'
})
export class ListaprodComponent {

  get produkty():Produkt[] {
    return this.prod.produkty.filter(p=>this.prod.select[p.category]);
  }

  public save():void{
    this.prod.saveProducts();
  }

  constructor(private prod: ProduktyService) {
    
  }
}
