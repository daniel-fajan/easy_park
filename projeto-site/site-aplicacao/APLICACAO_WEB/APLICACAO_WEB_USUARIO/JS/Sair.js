
sessionStorage.nome;

botao_dropdown.innerHTML = sessionStorage.nome;


function Sair(){
    desfocado.style.display='block';
    sair_prg.innerHTML="<p>Tem certeza que deseja sair do programa</p><button class='cancelar' onclick='Cancela()'>Cancelar</button><button ><a class='sim' href='../../CADASTRO_LOGIN/HTML/Login.html'>Sim</a></button>";
}
function Cancela(){
    desfocado.style.display= 'none';
}