import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  token!: string;


  ngOnInit(): void {
  }

  login(emailValue: string, passValue: string): void {
    //const url = 'http://localhost:3000/user/login'
    if (emailValue == 'fidel' && passValue == '123') {
      window.location.href = '/inicio/perfil'
    } else {
      if (emailValue == '') {
        alert('email invalido')
      }
      if (passValue == '') {
        alert('password invalido')
      }
    }
    // if (emailValue == '') {
    //   alert('email vacio')
    //   if (passValue == '') {
    //     alert('password vacio')
    //   }
    // }

  }

}
