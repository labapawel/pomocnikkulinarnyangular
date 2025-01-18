import { Component } from '@angular/core';
import { AddproductComponent } from "./addproduct/addproduct.component";
import { FiltryComponent } from './filtry/filtry.component';
import { ListaprodComponent } from './listaprod/listaprod.component';
import { PropozycjeComponent } from './propozycje/propozycje.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddproductComponent, FiltryComponent, ListaprodComponent, PropozycjeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'przepisy';
}
