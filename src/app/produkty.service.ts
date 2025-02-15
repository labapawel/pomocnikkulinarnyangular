import { Injectable } from '@angular/core';
import { Produkt } from './produkt';




@Injectable({
  providedIn: 'root'
})
export class ProduktyService {

  public select: Record<string, boolean> = {};
  public kategorie: Array<string> = ["owoce", "warzywa", "nabiał", "mięso", "ryby", "pieczywo", "przyprawy", "słodycze", "napoje"];
  public produkty: Produkt[] = []
  constructor() {
    this.loadProducts();
  }

  public loadProducts() {
    try {
      this.produkty = JSON.parse(sessionStorage.getItem('produkty') || '[]');
    } catch (e) {
      this.produkty = [];
    }
  }

  public saveProducts() {
    sessionStorage.setItem('produkty', JSON.stringify(this.produkty));
  }

  public addProduct(name: string, kategoria: string) {
    let prod = this.produkty.filter(pr => pr.name == name)[0];
    if (prod) {
      prod.selected = true;
      prod.category = kategoria;
    } else {
      prod = { name: name, category: kategoria, selected: true };
      this.produkty.push(prod);
    }


    this.saveProducts();
  }

  public removeProduct(name: string) {
    this.produkty = this.produkty.filter(pr => pr.name != name);
    this.saveProducts();
  }

}
