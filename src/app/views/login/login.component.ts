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

  receberDados() {
    console.log(this.userModel)

    //vai enviar os dados para a API
    this.loginService.login(this.userModel).subscribe( (response) => {
      console.log("response: ", response)
    }, (erro) => {
      console.log(erro)
    })

  }

}
