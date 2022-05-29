import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Classe vc vai utilizar o modelo user.ts que acabei de criar
  userModel = new User() //variavel recebe os parametros dentro de user

  receberDados() {
    console.log(this.userModel)

    //vai enviar os dados para a API

  }

}
