var contraseña = prompt("Ingrese contraseña");

if (contraseña.length >= 8){
    if (numero(contraseña)){
        if (letra(contraseña)){
            if (especial(contraseña)){
                alert("Contraseña segura")
            }
            else{
                alert("La contraseña debe tener por lo menos un caracter especial")
            }
        }
        else{
            alert("La contraseña debe teer minimo una letra")
        }
    }
    else{
        alert("La cobtraseña debe tener por lo menos un numero");
    }
}
else{
    alert("La contraseña debe tener minimo 8 digitos");
}

function numero(a){
    let caracter = /\d/;
    return caracter.test(a);
}


function letra(b){
    let caracter = /\D/;
    return caracter.test(b);
}

function especial(c){
    let caracter = /\W/;
    return caracter.test(c);
}

