import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Dependencia privada desta classe, funciona apenas aqui.
  constructor(private loginService: LoginService) { } //Ja sei quem é o service

  ngOnInit(): void {
  }

  // Classe vc vai utilizar o modelo user.ts que acabei de criar
  userModel = new User() //variavel recebe os parametros dentro de user
  mensagem = ""

  receberDados() {
    console.log(this.userModel)

    //Comandos contra ataques do SQL Injection para proteção do formulário de login.
    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";" ];

    listaPalavras.forEach(palavra => {
      if(this.userModel.email?.toLowerCase().includes(palavra)) {
        this.mensagem = "Proteção contra ataque SQL iniciado..." + "Dados inválidos: " + palavra
        return;
      }
    });
    //--------------

    //vai enviar os dados para a API
    this.loginService.login(this.userModel).subscribe( (response) => {
      
      console.log("O Status Code é: ", response.status)
      console.log("Token de permissão é: ", response.body.accessToken)

      this.mensagem = "Bem Vindo " + response.body.user.nome
      console.log(this.mensagem)

    }, (responseErro) => {
      this.mensagem = responseErro.error
      console.log(this.mensagem)
    })

  }

}
