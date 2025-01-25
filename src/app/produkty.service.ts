import { Injectable } from '@angular/core';
import { Produkt } from './produkt';

@Injectable({
  providedIn: 'root'
})
export class ProduktyService {

  public select: Record<string, boolean> = {};
  public kategorie: Array<string> = ["owoce", "warzywa", "nabiał", "mięso", "ryby", "pieczywo", "przyprawy", "słodycze", "napoje"];
  public produkty: Produkt[]= []
  constructor() { }

  public addProduct(name:string, kategoria:string){
    let prod = this.produkty.filter(pr => pr.name == name)[0];
    if(prod){
      prod.selected = true;
      prod.category = kategoria;
    } else {
      prod = {name: name, category: kategoria, selected: true};
      this.produkty.push(prod);
    }
  }

  public removeProduct(name:string){
    this.produkty = this.produkty.filter(pr => pr.name != name);
  }

}
