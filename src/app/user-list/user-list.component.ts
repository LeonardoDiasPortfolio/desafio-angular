import { createElementCssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  ngAfterContentInit(): void {
    generateAllUsers();
  }

}

function generateAllUsers() {
  let userArray = [
    {
        "name": "Alexandre Tavares",
        "email": "alex.tav@mail.com",
        "date": "28/05/2020",
        "state": true
    },
    {
        "name": "Bernardo Dias",
        "email": "bern.dia@mail.com",
        "date": "01/07/2020",
        "state": true
    },
    {
        "name": "Carla Freitas",
        "email": "carl.fre@mail.com",
        "date": "21/04/2020",
        "state": true
    },
    {
        "name": "Douglas Machado",
        "email": "doug.mac@mail.com",
        "date": "07/02/2020",
        "state": true
    },
    {
        "name": "Ernano Lucas",
        "email": "erna.luc@mail.com",
        "date": "19/05/2020",
        "state": true
    },
    {
        "name": "Fernando Pinho",
        "email": "fern.pin@mail.com",
        "date": "08/09/2020",
        "state": true
    },
    {
        "name": "Guilherme Moraes",
        "email": "guil.mor@mail.com",
        "date": "13/11/2020",
        "state": true
    }
  ];
    userArray.forEach(element => {
      addUserBlock(element);
      console.log(element);
    });

}

function addUserBlock(user){
  let userHTMLBlock = document.createElement("ul");
  userHTMLBlock.setAttribute("style", "box-sizing: border-box;" + 
                                      "border: solid black;" +
                                      "border-width: 2px;" +
                                      "border-radius: 5px;" +
                                      "border-spacing: 1%;" +
                                      "box-sizing: border-box;" +
                                      "color:black;" +
                                      "text-decoration: none;" +
                                      "font-weight: lighter;" +
                                      "display: flex;" +
                                      "flex-direction: row;" +
                                      "flex-wrap: nowrap;" +
                                      "text-align: center;" +
                                      "justify-content: space-evenly;" +
                                      "list-style: none;");

  let userCheck = document.createElement("li");
  userCheck.setAttribute("style", "flex: 5%;");
  userCheck.innerHTML = "<img src=\"assets/uncheckedbox36dp.svg\" alt=\"Selected\">";
  userHTMLBlock.appendChild(userCheck);

  let userName = document.createElement("li");
  userName.setAttribute("style", "flex: 25%;");
  userName.innerText = user.name;
  userHTMLBlock.appendChild(userName);

  let userEmail = document.createElement("li");
  userEmail.setAttribute("style", "flex: 25%;");
  userEmail.innerText = user.email;
  userHTMLBlock.appendChild(userEmail);

  let userDate = document.createElement("li");
  userDate.setAttribute("style", "flex: 15%;");
  userDate.innerText = user.date;
  userHTMLBlock.appendChild(userDate);

  let userSituation = document.createElement("li");
  userSituation.setAttribute("style", "flex: 15%;");
  userSituation.innerText = (user.state ? "ATIVO" : "INATIVO");
  userHTMLBlock.appendChild(userSituation);

  let userActions = document.createElement("li");
  userActions.setAttribute("style", "flex: 15%;");
  userActions.innerHTML = "<img src=\"assets/edit36dp.svg\" alt=\"Edit\"><img src=\"assets/delete36dp.svg\" alt=\"Delete\">";
  userHTMLBlock.appendChild(userActions);

  /*
  let userHTMLBlock = "<ul class=\"users\">" + 
        "<li class=\"checkbox\"><img src=\"assets/uncheckedbox36dp.svg\" alt=\"Selected\"></li>" + 
        "<li class=\"name\">" + user.name + "</li>" + 
        "<li class=\"email\">" + user.email + "</li>" +
        "<li class=\"date\">" + user.date + "</li>" +
        "<li class=\"situation\">" + (user.state ? "ATIVO" : "INATIVO") + "</li>" +
        "<li class=\"actions\">" +
            "<img src=\"assets/edit36dp.svg\" alt=\"Edit\">" +
            "<img src=\"assets/delete36dp.svg\" alt=\"Delete\">" + 
        "</li>" + 
    "</ul>"
  */

  document.getElementById("userlist")
          .appendChild(userHTMLBlock);
}
