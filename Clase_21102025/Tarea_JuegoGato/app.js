let tablero = ['', '', '', '', '', '', '', '', ''];
let jugadorActual = 'X';
let juegoActivo = true;

const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]  
];

const celdas = document.querySelectorAll('.celda');

celdas.forEach(celda => {
    celda.addEventListener('click', manejarClick);
});

function manejarClick(evento) {
    const celda = evento.target;
    const index = parseInt(celda.getAttribute('data-index'));

    if (tablero[index] !== '' || !juegoActivo) {
        return;
    }

    tablero[index] = jugadorActual;
    celda.textContent = jugadorActual;
    celda.style.textAlign = 'center';
    celda.style.fontSize = '30px';
    celda.style.fontWeight = 'bold';
    celda.style.cursor = 'default';

    verificarResultado();
}

function verificarResultado() {
    let hayGanador = false;

    for (let combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            hayGanador = true;
            juegoActivo = false;
            setTimeout(() => {
                alert(`Jugador ${jugadorActual} gano`);
            }, 100);
            return;
        }
    }

    if (!tablero.includes('') && !hayGanador) {
        juegoActivo = false;
        setTimeout(() => {
            alert('Empate');
        }, 100);
        return;
    }

    if (!hayGanador) {
        jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
    }
}

function reiniciar() {
    tablero = ['', '', '', '', '', '', '', '', ''];
    jugadorActual = 'X';
    juegoActivo = true;

    celdas.forEach(celda => {
        celda.textContent = '';
        celda.style.backgroundColor = '';
        celda.style.cursor = 'pointer';
    });
}