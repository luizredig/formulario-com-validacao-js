/*======================================================================*/

/*================= VALIDAÇAO DO INPUT 'NOME COMPLETO' =================*/

/* Regex para o campo 'Nome Completo'*/

const regexNome = /^[a-zA-Zá-úÁ-Ú ]+$/;

/* Importando elementos pelos ID's */

const inputNome = document.querySelector('#input-nome');
const spanNome = document.querySelector('#input-nome-span');
let nomeValidado = false;

/* Validando o nome e aplicando efeitos visuais correspondentes */

function validarNome() {

    if (regexNome.test(inputNome.value) && inputNome.value.length >= 5) {
        /* Colocando uma quantidade mínima de caracteres */

        /* Efeitos visuais de validez */

        removeErro(inputNome);
        esconderMensagem(spanNome);

        nomeValidado = true;

    } else {

        /* Efeitos visuais de erro */

        setErro(inputNome);
        mostrarMensagem(spanNome);

        nomeValidado = false;

    }
}

/*======================================================================*/

/*================= VALIDAÇAO DO INPUT 'TELEFONE' ======================*/

/* Regex para o campo 'Telefone'*/

const regexTelefone = /^[0-9]{4}-[0-9]{4}$/;

/* Importando elementos pelos ID's */

const inputTelefone = document.querySelector('#input-telefone');
const spanTelefone = document.querySelector('#input-telefone-span');
let telefoneValidado = false;

/* Validando o telefone e aplicando efeitos visuais correspondentes */

function validarTelefone() {

    if (regexTelefone.test(inputTelefone.value) && inputTelefone.value.length === 9) {

        /* Efeitos visuais de validez */

        removeErro(inputTelefone);
        esconderMensagem(spanTelefone);

        telefoneValidado = true;


    } else {

        /* Efeitos visuais de erro */

        setErro(inputTelefone);
        mostrarMensagem(spanTelefone);

        telefoneValidado = false;

    }
}
/*======================================================================*/

/*================= MASCARA DO INPUT 'TELEFONE' ========================*/

/* Adicionando um evento para cada vez que uma tecla for apertada */

inputTelefone.addEventListener('keypress', () => {

    /* Armazenando a 'length' do input */

    const telefoneLength = inputTelefone.value.length;

    /* Ao chegar em length === 4, adiciona em seguida '-' */

    if (telefoneLength === 4) {
        inputTelefone.value += "-";
    }

})

/*======================================================================*/

/*================= VALIDAÇAO DO INPUT 'CELULAR' =======================*/

/* Regex para o campo 'Celular'*/

const regexCelular = /^[(][0-9]{2}[)][ ][0-9]{4}-[0-9]{4}$/;

/* Importando elementos pelos ID's */

const inputCelular = document.querySelector('#input-celular');
const spanCelular = document.querySelector('#input-celular-span');
let celularValidado = false;


/* Validando o celular e aplicando efeitos visuais correspondentes */

function validarCelular() {

    if (regexCelular.test(inputCelular.value) && inputCelular.value.length === 14) {

        /* Efeitos visuais de validez */

        removeErro(inputCelular);
        esconderMensagem(spanCelular);

        celularValidado = true;


    } else {

        /* Efeitos visuais de erro */

        setErro(inputCelular);
        mostrarMensagem(spanCelular);

        celularValidado = false;

    }

}
/*======================================================================*/

/*================= MASCARA DO INPUT 'CELULAR' =========================*/

/* Adicionando um evento para cada vez que uma tecla for apertada */

inputCelular.addEventListener('keypress', () => {

    /* Armazenando a 'lenght' do input */

    const celularLength = inputCelular.value.length;

    /* Ao chegar em length === 0, adiciona '(' */

    if (celularLength === 0) {
        inputCelular.value += "(";
    }

    /* Ao chegar em length === 3, adiciona ')' e um espaço */

    if (celularLength === 3) {
        inputCelular.value += ") ";
    }

    /* Ao chegar em length === 9, adiciona '-' */

    if (celularLength === 9) {
        inputCelular.value += "-";
    }

})

/*======================================================================*/

/*================= VALIDAÇÃO INPUT 'EMAIL' ============================*/

/* Regex para o campo 'Email'*/

const regexEmail = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/;

/* Importando elementos pelos ID's */

const inputEmail = document.querySelector('#input-email');
const spanEmail = document.querySelector('#input-email-span');
let emailValidado = false;

/* Validando o email e aplicando efeitos visuais correspondentes */

function validarEmail() {

    if (regexEmail.test(inputEmail.value)) {

        /* Efeitos visuais de validez */

        removeErro(inputEmail);
        esconderMensagem(spanEmail);

        emailValidado = true;

    } else {

        /* Efeitos visuais de erro */

        setErro(inputEmail);
        mostrarMensagem(spanEmail);

        emailValidado = false;
    }
}

/*======================================================================*/

/*================= VALIDAÇÃO INPUT 'NUMERO' ===========================*/

/* Importando elementos pelos ID's */

const inputNumero = document.querySelector("#input-numero");
const spanNumero = document.querySelector("#input-numero-span");
let numeroValidado = false;

/* Validando o numero e aplicando efeitos visuais correspondentes */

function validarNumero() {

    /* Armazenando o value do input como um número */
    const numeroEscolhido = inputNumero.valueAsNumber;

    /* Verificando se o número está entre 1 e 999 */

    if (numeroEscolhido >= 1 && numeroEscolhido <= 999) {

        /* Efeitos visuais de validez (caso especial)*/

        removeErro(inputNumero);
        spanNumero.style.display = 'block';
        spanNumero.style.color = '#07b641';

        numeroValidado = true;

    } else {

        /* Efeitos visuais de erro */

        setErro(inputNumero);
        esconderMensagem(spanNumero);

        numeroValidado = false;

    }
};

/*======================================================================*/

/*================= MASCARA DO INPUT 'NUMERO' ==========================*/

/* Adicionando um evento para cada vez que uma tecla for apertada */

inputNumero.addEventListener('keypress', () => {

    /* Verificando se a length é maior que 3 (max: 999)*/

    if (inputNumero.value.length > inputNumero.maxLength) {

        /* Caso seja maior, desconsidera o excedente */

        inputNumero.value = inputNumero.value.slice(0, inputNumero.maxLength - 1);

    }
});

/*======================================================================*/

/*================= FUNCTION PARA 'SETAR' ESTILO DE ERRO ===============*/

/* Definindo efeitos visuais de erro */

function setErro(input) {
    input.style.border = '2px solid red';
}

/*======================================================================*/

/*================= FUNCTION PARA REMOVER ESTILO DE ERRO ===============*/

/* Definindo efeitos visuais de validez */

function removeErro(input) {
    input.style.border = '2px solid #07b641';
}

/*======================================================================*/

/*=============== FUNCTION INICIAR FASE 2 (FORMULÁRIO) =================*/

function iniciarFormulario() {
    const container = document.querySelector('#container');
    const form = document.querySelector("#form");

    container.className = 'container principal';
    form.style.display = 'flex';
}

/*======================================================================*/

/*=============== FUNCTION MOSTRAR MENSAGEM DE ERRO ====================*/

function mostrarMensagem(input) {
    input.style.display = 'block';
    input.style.color = 'red';
}

/*======================================================================*/

/*=============== FUNCTION ESCONDER MENSAGEM DE ERRO ===================*/

function esconderMensagem(input) {
    input.style.display = 'none';
}

/*======================================================================*/

/*=============== FUNCTION EXIBIR RESPOSTAS (FASE 3) ==================*/

function exibirPainelResposta() {
    const painelResposta = document.querySelector('#painel-resposta');
    const fundo = document.querySelector('.fundo-desfocado');
    painelResposta.style.display = 'block';
    fundo.className = 'fundo-desfocado ligado';

    condicionarRespostas();
}

/*======================================================================*/

/*=============== FUNCTION OCULTAR RESPOSTAS (FASE 3) ==================*/

function ocultarPainelResposta() {
    const painelResposta = document.querySelector('#painel-resposta');
    const fundo = document.querySelector('.fundo-desfocado');

    painelResposta.style.display = 'none';
    fundo.className = 'fundo-desfocado';
    document.querySelector('#resposta').innerHTML = '';

}

/*======================================================================*/

/*=============== FUNCTION CONDICIONAR RESPOSTAS  ======================*/

function condicionarRespostas() {

    /* Importando elementos pelos ID's */

    const nome = document.querySelector('#input-nome').value;
    const celular = document.querySelector('#input-celular').value;
    const email = document.querySelector('#input-email').value;
    const numero = document.querySelector('#input-numero').value;

    /* Formatando o nome */

    const arrayNome = nome.split(' ');
    const primeiroNome = arrayNome[0];
    const maiuscula = primeiroNome.charAt(0).toUpperCase();

    /* Adquirindo dominio do email */

    const dominio = email.split('@');

    /* Calculando quantidade de letras e caracteres */

    const quantidadeDeLetras = nome.replace(/\s/g, "");
    const quantidadeDeCaracteres = email.replace(/[@.]/g, '');

    /* Exibindo o número escolhido no html */

    document.querySelector('#numero-span').innerHTML = '<strong>' + numero + '</strong>';


    /* CONDIÇÕES ESTABELECIDAS */

    if (numero % 3 == 0) {

        /* Imprimir o Primeiro Nome */

        document.querySelector('#resposta').innerHTML += 'Primeiro nome: ' + '<strong>' + maiuscula + primeiroNome.slice(1) + '</strong>' + '<br>';

    } else if (numero % 5 == 0) {

        /* Imprimir o DDD do Telefone */

        document.querySelector('#resposta').innerHTML += 'DDD : ' + '<strong>' + celular.slice(1, 3) + '</strong>' + '<br>';

    } else if (numero % 7 == 0) {

        /* Imprimir o domínio do e-mail */

        document.querySelector('#resposta').innerHTML += 'Domínio do email : ' + '<strong>' + dominio[1] + '</strong>' + '<br>';

    } else {

        /* Imprimir quantidade de letras do Nome Completo, excluindo os espaços e quantidade de caracteres excluindo @ e pontos do e-mail. */

        document.querySelector('#resposta').innerHTML += "Quantidade de letras no nome sem espaços : " + '<strong>' + quantidadeDeLetras.length + '</strong>' + "<br>";

        document.querySelector('#resposta').innerHTML += 'Quantidade de caracteres excluindo @ e pontos do e-mail : ' + '<strong>' + quantidadeDeCaracteres.length + '</strong>' + "<br>";

    }
}

/*======================================================================*/

/*=============== FUNCTION HABILITAR BOTÃO ENVIAR  =====================*/

function habilitarBotao() {

    /* Importando elemento pelo ID */

    const botaoEnviar = document.querySelector('#button-enviar');

    /* Caso todos os inputs estejam validados ... */
    if (!nomeValidado || !telefoneValidado || !celularValidado || !emailValidado || !numeroValidado) {

        botaoEnviar.disabled = true;
        botaoEnviar.className = 'button-enviar';

    }

    else {

        botaoEnviar.disabled = false;
        botaoEnviar.className = 'button-enviar not-disabled';

    }
}



