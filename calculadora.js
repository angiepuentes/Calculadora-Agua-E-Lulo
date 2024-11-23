const botones = document.querySelectorAll('.btn_calculadora');
const pantalla = document.getElementById('pantalla');
const btnIgual = document.getElementById('btn_igual');
const btnClear = document.getElementById('btn_c');
const btnSuma = document.getElementById('sumar');

let valor1 = null;
let valor2 = null;
let operador = '';
let resultado = 0;

function actualizarPantalla(texto) {
    pantalla.textContent = texto;
}

function obtenerValor(textoBtn) {
    if (textoBtn === 'Evento') return 1;
    if (textoBtn === 'Salsa') return 2;
    if (textoBtn === 'Rock') return 4;
    if (textoBtn === 'Recuerdo') return 5;
    if (textoBtn === 'Cali') return 6;
    if (textoBtn === "70's") return 7;
    if (textoBtn === 'Comida') return 8;
    if (textoBtn === 'Personas') return 9;
    if (textoBtn === 'Cultura') return 0;
    return null;
}

botones.forEach(boton => {
    boton.addEventListener('click', (dato) => {
        const textoBtn = dato.target.textContent;
        const valorActual = obtenerValor(textoBtn);

        if (!operador && valor1 === null) {
            valor1 = valorActual;
            pantalla.textContent = textoBtn;
        } else if (operador && valor2 === null) {
            valor2 = valorActual;
            pantalla.textContent += ` ${textoBtn}`;
        }
    });
});

btnSuma.addEventListener('click', () => {
    if (valor1 !== null && operador === '') {
        operador = '+';
        pantalla.textContent += ' +';
    }
});

btnIgual.addEventListener('click', () => {
    if (valor1 === null || valor2 === null || operador === '') {
        actualizarPantalla('Error: Falta un valor');
        return;
    }

    resultado = valor1 + valor2;


    let mensajeResultado = '';
    if (resultado >= 1 && resultado <= 5) {
        mensajeResultado = 'Casi Algo';
    } else if (resultado >= 6 && resultado <= 10) {
        mensajeResultado = 'Casi es Agua';
    } else if (resultado >= 11 && resultado <= 15) {
        mensajeResultado = 'Ya casi sale el Lulo';
    } else if (resultado >= 16 && resultado <= 20) {
        mensajeResultado = 'Agua E Lulo';
    } else {
        mensajeResultado = 'FUERA DE RANGO';
    }

    actualizarPantalla(mensajeResultado);

    valor1 = null;
    valor2 = null;
    operador = '';
});

btnClear.addEventListener('click', () => {
    valor1 = null;
    valor2 = null;
    operador = '';
    resultado = 0;
    actualizarPantalla('');
});