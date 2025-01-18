import { Injectable } from '@angular/core';
import { HfInference } from "@huggingface/inference"
import { MessageType } from './message-type';

@Injectable({
  providedIn: 'root'
})
export class AIService {

  client = new HfInference("api_key")
  public skladniki: Array<string> = [];
  public przepis: string = "";
  public rodzaj: Array<string> = ["sniadanie", "obiad", "kolacja"];
  public rodzajWybrany: number = 1;
  public opisAI:MessageType = {
      recipe:{
        system:`jesteś generatorem przepisów. wynik podaj w krokach wykonania, dodaj litę składników.\n
                bierz pod uwagę, dostępne składniki\n
                odpowiadaj w tylko formie json {skladniki:[string], kroki:[string], uwagi:string}.\n
                nie dodawaj dodatkowych opisów.\n
                nie dodawaj dodatkowych informacji.\n
                nie dodawaj dodatkowych komentarzy.\n`,
        user:`Przepis ${this.przepis} składniki: ${this.skladniki.join(", ")}`
      },
      list:{
        system:"",
        user:""
      }

  }

  public async  AI(system:string, user:string): Promise<string> {
    let out = "";

      const stream = this.client.chatCompletionStream({
        model: "microsoft/phi-4",
        messages: [
          { role: "system", content: system },
          { role: "user", content: user }
        ],
        temperature: 0.5,
        max_tokens: 2048,
        top_p: 0.7
      });

    for await (const chunk of stream) {
      if (chunk.choices && chunk.choices.length > 0) {
        const newContent = chunk.choices[0].delta.content;
        out += newContent;
      }  
    }
    
    return out;
  }

  constructor() { }
}
