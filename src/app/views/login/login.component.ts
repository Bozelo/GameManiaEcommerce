import { Component, OnInit } from '@angular/core';
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

    //vai enviar os dados para a API
    this.loginService.login(this.userModel).subscribe( (response) => {
      // console.log("response: ", response)
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
