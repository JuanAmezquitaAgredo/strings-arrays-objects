
const users = {
}

var cont = 0;

while (true) {
    var nomCompleto = prompt("Ingrese su nombre completo").toLowerCase();

    let nombre = nomCompleto.split(' ');
    let primerNom = nombre[0];
    let primerApell = nombre[1];

    let userName = primerNom.slice(0, 3);
    let userapelli = primerApell.slice(0, 3);

    let user = userName + userapelli;
    let email = user + "@myDomain.com"

    var verificar = Object.keys(users);
    var nameexist = verificar.includes(user);



    if (nameexist == true) {
        cont++;
        user = user + cont;
        email = user + "@myDomain.com";
        Object.assign(users, {
            [user]: email
        })
    }
    else {
        Object.assign(users, {
            [user]: email
        })
    }
    console.log(users);
}



