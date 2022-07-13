const controlle = document.querySelectorAll('[data-controle]');
const estatistica = document.querySelectorAll('[data-estatistica]')

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -28
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controlle.forEach((elemento =>{
    elemento.addEventListener('click', (evento)=>{
        //pegar o pai dos elementos
        OperationNumber(evento.target.dataset.controle, evento.target.parentNode)
        atualizarEstatiticas(evento.target.dataset.peca)
    })
}))


function OperationNumber(operator, controle){
const pecaNumber = controle.querySelector('[data-contador]');

    if(operator ==='-'){
        pecaNumber.value = parseInt(pecaNumber.value) - 1;
    }else if(operator === '+'){
        pecaNumber.value = parseInt(pecaNumber.value) + 1
 }
}
function atualizarEstatiticas(peca){
    estatistica.forEach((elemento)=>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}