/***
 * {
  "propozycje": [
    {
      "nazwapropozycji": "Makaron z jajkiem sadzonym i masłem",
      "lista_zakupow": [
        "Sól",
      ],
      "lista_skladnikow": [
        "Makaron",
      ],
      "czasprzygotowania": "15 minut"
    },
  ]
}
 */

export interface Propozycja {
    nazwapropozycji: string;
    lista_zakupow: string[];
    lista_skladnikow: string[];
    czasprzygotowania: string;
}

export interface Propozycje {
    propozycje: Propozycja[];
}

