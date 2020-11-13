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
        });
}

function addUserBlock(user){
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
document.getElementById("liststart")
      .insertAdjacentHTML("afterend", userHTMLBlock);
}