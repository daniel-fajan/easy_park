var sorteado1;
var sorteado2;
var sorteado3;



setInterval(() => {
    sorteado1 = parseInt(Math.random() * 100) + 1;

    sorteado2 = parseInt(Math.random() * 100) + 1;

    sorteado3 = parseInt(Math.random() * 100) + 1;

    trocar()

}, 4000);


function trocar()
{
    if (sorteado1 <= 20)
    {
        botao_1.style.backgroundColor = 'red';
    }

    else if (sorteado1 >= 61)
    {
        botao_1.style.backgroundColor = 'green';
    }

    else
    {
        botao_1.style.backgroundColor = 'yellow';
    }


    if (sorteado2 <= 20)
    {
        botao_2.style.backgroundColor = 'red';
    }

    else if (sorteado2 >= 61)
    {
        botao_2.style.backgroundColor = 'green';
    }

    else
    {
        botao_2.style.backgroundColor = 'yellow';
    }

    if (sorteado3 <= 20)
    {

        botao_3.style.backgroundColor = 'red';
    }

    else if (sorteado3 >= 61)
    {

        botao_3.style.backgroundColor = 'green';
    }

    else
    {
        botao_3.style.backgroundColor = 'yellow';
    }
}

function clicar1()
{
    sessionStorage.nome_est = 'Shopping Lar Center';
    window.location.href = '../HTML/MeuEstacionamento.html';
}

function clicar2()
{
    sessionStorage.nome_est = 'Paulista Park';
    window.location.href = '../HTML/MeuEstacionamento.html';
}

function clicar3()
{
    sessionStorage.nome_est = 'Portal Park';
    window.location.href = '../HTML/MeuEstacionamento.html';
}