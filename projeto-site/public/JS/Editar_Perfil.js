editar_info.style.display = 'none';
Info_1.style.display = 'none';
Info_2.style.display = 'none';
Info_3.style.display = 'none';
botao_dropdown.innerHTML = sessionStorage.nome;
edi_nome_user.value = sessionStorage.nome;
nome_user.innerHTML = sessionStorage.nome;


function editar_perfil() {
    var edi = editar_info.style;
  
    if (edi.display == 'none') {
        edi.display = 'block';
    }else{
        edi.display = 'none';
    }
}
// alterar o nome de perfil

function confir_alter() {
    
    var Nome = document.getElementById("nome_user").innerHTML;
    var New_nome = edi_nome_user.value;

    sessionStorage.nome = `${New_nome}`;
    
    nome_user.innerHTML = sessionStorage.nome;
    botao_dropdown.innerHTML = sessionStorage.nome;
}

// Estacionamentos favoritos

function Local_esta_1() {
    

    if (Info_1.style.display == 'none') {
        Info_1.style.display = 'block';
    }else{
        Info_1.style.display = 'none';
    }

    sessionStorage.nome_estac = 'Shopping Lar Center';
}

function Local_esta_2() {
    

    if (Info_2.style.display == 'none') {
        Info_2.style.display = 'block';
    }else{
        Info_2.style.display = 'none';
    }

    sessionStorage.nome_estac = 'Paulista Park';
}
function Local_esta_3() {
  

    if (Info_3.style.display == 'none') {
        Info_3.style.display = 'block';
    }else{
        Info_3.style.display = 'none';
    }

    sessionStorage.nome_estac = 'Portal Park';
}