const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!'_-&@#$%*()/:<>|+= ";

// Función para encriptar:


function Encriptar(texto, clave) {
    let PalabraEncriptada = "";

    for (let i = 0; i < texto.length; i++) {
        const Caracter = texto[i];
        const CaracterClave = clave[i % clave.length];

        const IndicePalabra = alfabeto.indexOf(Caracter);
        const IndiceClave = alfabeto.indexOf(CaracterClave);

        if (IndicePalabra === -1) {
            Encriptar += Caracter;
        } else {
            const NuevoIndice = (IndicePalabra + IndiceClave) % alfabeto.length;
            PalabraEncriptada += alfabeto[NuevoIndice];
        }
    }

    return PalabraEncriptada;
}

// Función para desencriptar:


function Desencriptar(PalabraEncriptada, clave) {
    let PalabraDesencriptada = "";

    for (let i = 0; i < PalabraEncriptada.length; i++) {
        const CaracterEncriptado = PalabraEncriptada[i];
        const CaracterClave = clave[i % clave.length];

        const IndiceEncriptado = alfabeto.indexOf(CaracterEncriptado);
        const IndiceClave = alfabeto.indexOf(CaracterClave);

        if (PalabraEncriptada === -1) {
            PalabraDesencriptada += CaracterEncriptado;
        } else {
            let NuevoIndice = IndiceEncriptado - IndiceClave;
            if (NuevoIndice < 0) NuevoIndice += alfabeto.length;
            PalabraDesencriptada += alfabeto[NuevoIndice];
        }
    }

    return PalabraDesencriptada;
}

// Función para ver el resultado:


function VerResultado(Encriptando) {
    const texto = document.getElementById("mensaje").value;
    const clave = document.getElementById("clave").value;

    let result = "";

    if (Encriptando) {
        result = Encriptar(texto, clave);
    } else {
        result = Desencriptar(texto, clave);
    }

    document.getElementById("result").textContent = result;
}

// Agregar botones al documento:


document.getElementById("enc-btn").addEventListener('click', function () {
    VerResultado(true);
});

document.getElementById("dec-btn").addEventListener('click', function () {
    VerResultado(false);
});

// Iniciar la página con un texto inicial encriptado:


document.addEventListener('DOMContentLoaded', () => {
    VerResultado(true);
});