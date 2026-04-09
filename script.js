function alterarNome() {
    let trocarNome = document.getElementById
    ('inputNome').value;

    if (trocarNome === '') {
        alert('Digite um nome!')
    } else {
        document.getElementById("nomeUsuario").
        innerHTML = trocarNome;
    }
}

function alterarCurso() {
    let trocarCurso = document.getElementById
    ('inputCurso').value;

    if (trocarCurso === '') {
        alert('Digite um Curso!')
    } else {
        document.getElementById("NomeCurso").
        innerHTML = trocarCurso;
    }
}

function alterarStatus() {
    let trocarStatus = document.getElementById
    ('inputStatus').value;

    if (trocarStatus === '') {
        alert('Digite um Status!')
    } else {
        document.getElementById("Status").
        innerHTML = trocarStatus;
    }
}

function MudarCorNav() {
    let corNavegacao = document.getElementById('corNavegação').value;
    document.querySelector('.navegacao').style.backgroundColor = corNavegacao;
}

function MudarCorSeção() {
    let corSeção = document.getElementById('corSeção').value;
    document.querySelector('.secao').style.backgroundColor = corSeção;
}

function MudarCorFooter() {
    let corFooter = document.getElementById('corFooter').value;
    document.querySelector('.rodape').style.backgroundColor = corFooter;
}
function MudarCorHeader() {
    let corHeader = document.getElementById('corHeader').value;
    document.querySelector('.cabeca').style.backgroundColor = corHeader;
}
