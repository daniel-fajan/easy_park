function Entrar(){

    var nome = login.value;
    var senha = password.value;
    var aplicacao = '../../APLICACAO_WEB_USUARIO/HTML/PainelUsuario.html';
    pree_log.style.display="none";
    pree_pass.style.display="none";
    pree_tipo.style.display = 'none';
    invalido.style.display="none";

    aplicacao = tipo_login.value == 'motorista' ? '../../APLICACAO_WEB_USUARIO/HTML/PainelUsuario.html' : (tipo_login.value == 'empresa' ? '../../APLICACAO_WEB_GESTOR/HTML/PainelEmpresa.html' : '');

    if((nome=='admin'|| nome=='admin@email.com') && senha=="1234" && tipo_login.value != '')
    {
        window.location.href = aplicacao;
    }

    else{
        
        if(nome == "" || senha == "" || tipo_login.value == '')
        {
            if(nome=="")pree_log.style.display="block";
            if(senha=="")pree_pass.style.display="block";
            if(tipo_login.value=="")pree_tipo.style.display="block";
        }

        else
        {
            invalido.style.display="block";      
        }
    }

   
}

function fecharLog()
{
    pree_log.style.display="none";
}

function fecharPass()
{  
    pree_pass.style.display="none";
}

function fecharInva()
{
    invalido.style.display="none";
}

function fecharTipo()
{
    pree_tipo.style.display="none";
}