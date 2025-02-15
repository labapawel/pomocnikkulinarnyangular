import { generateStory } from "./gemini.js";

let out = "";

let produkty = [
    "mąka", 
    "ziemniaki", 
    "ser biały", 
    "sól", 
    "pieprz"
]
let rodzaj = "Obiad";
let przepisna = "Frytki ziemniaczane z serową sałatką"

let systemprzepis = "jesteś generatorem przepisów. wynik podaj w krokach wykonania, dodaj litę składników.\n"
                    +"bierz pod uwagę, dostępne składniki\n"
                    +"odpowiadaj w tylko formie json {skladniki:[string], kroki:[string], uwagi:string}.\n"
                    +"nie dodawaj dodatkowych opisów.\n"
                    +"nie dodawaj dodatkowych informacji.\n"
                    +"nie dodawaj dodatkowych komentarzy.\n"
let userprzepis = "Przepis "+ przepisna +". składniki: "+produkty.join(", ");  

let systempropozycja = "jesteś generatorem przepisów. wynik podaj w krokach wykonania, dodaj litę składników.\n"
                    +"bierz pod uwagę, dostępne składniki\n"
                    +"dodaj 5 propozycji potraw.\n"
                    +"odpowiadaj w tylko formie json {propozycja:[{nazwa_potrawy, czas_wykonania}], uwagi:string}.\n"
                    +"nie dodawaj dodatkowych opisów.\n"
                    +"nie dodawaj dodatkowych informacji.\n"
                    +"nie dodawaj dodatkowych komentarzy.\n"
let userpropozycja = "Przepis "+ rodzaj + " składniki: "+produkty.join(", ");                   


let system = systemprzepis;
let user = userprzepis;

let odp = await generateStory("token_gemini",  system+"\n\n"+user);


let json = odp.replaceAll("`", "").replace('json','');

// console.log(json);

console.log(JSON.parse(json));
