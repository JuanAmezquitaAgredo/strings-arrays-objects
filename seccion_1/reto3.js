var correo = prompt("Ingrese un correo electronico");

function arroba(a){
    let caracter = /.@/;
    return caracter.test(a);
}

function PuntoDespues(b){
    let caracter = "@";
    let despues = b.substring(b.indexOf(caracter)+1);
    return despues.indexOf(".");
}

function blanco(c){
    let caracter = /. /;
    return caracter.test(c);
}

if (arroba(correo)){
    if (PuntoDespues(correo) == -1 || PuntoDespues(correo) == 0){
        alert("El correo debe tener un punto y no debe ser seguido al @");
    }
    else{
        if (blanco(correo)){
            alert("El correo no puedes tener espacios en blanco");
        }
        else{
            alert("Correo electrónico válido");
        }
    }
}
else{
    alert("El correo debe tener al menos un numero");
}
