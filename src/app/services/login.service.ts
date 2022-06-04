//Service faz a comunicação com as APIs.
//json-server faz a parte de autenticação(para testes, apenas simulação de API).
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Importando o Model "user.ts" que esta na pasta "models".
import { User } from '..//models/user'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // Declarando uma dependencia ClientHttp.
  constructor(private httpClient: HttpClient) { }

  // Declarando um endereço 
  url = "http://localhost:3000/login";

  // Método de login, a comunicação em si(Uma função).
  login(usuario: User): Observable<any> { //Observable determina como vai funcionar o método login(função assíncrona).
    //Quero usar o httpClient para fazer uma requisição, um post para "url" login.
    return this.httpClient.post(this.url, JSON.stringify(usuario),{ //JSON.stringify transforme em string os dados do usuario.
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), //Se prepara ae que vou enviar um jason!
      observe: "response"
    }) 
  }
}
