import { Component } from '@angular/core';
import { ProduktyService } from '../produkty.service';
import { AIService } from '../ai.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-propozycje',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './propozycje.component.html',
  styleUrl: './propozycje.component.scss'
})
export class PropozycjeComponent {


  
    constructor(private prod: ProduktyService, private ai: AIService) {
      
    }

    public async pytajAI(){
      let prompt = `jesteś specjalistą od gastronomi, przygotujesz propozycje na podstawie zawartosci mojej lodówki, jak czegoś mi brakuje to zaproponuj z listą zakupów
      zawartość lodówki: ${this.prod.produkty.filter(p=>p.selected).map(p=>p.name).join(', ')}      
      
      odpowiedz w formie json:
      formuła: {propozycje: [{nazwapropozycji, [lista_zakupow], [lista_skladnikow], czasprzygotowania}]]}

      nie dodawaj dodatkowych informacji
      nie dodawaj dodatkowych komentarzy
      nie dodawaj dodatkowych pytań
      nie dodawaj dodatkowych znaczników
      `;

      let odpowiedz = await this.ai.AI(prompt,"");
      console.log(odpowiedz.replace(/(```json|```)/g, ''));
      

    }
}
