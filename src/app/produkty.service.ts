import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduktyService {

  public kategorie: Array<string> = ["owoce", "warzywa", "nabiał", "mięso", "ryby", "pieczywo", "przyprawy", "słodycze", "napoje"];
  constructor() { }
}
