var menu = document.getElementById("lista-navbar");
var msgCookies = document.getElementById('cookies-msg');
var botao = document.getElementById('submit');

    function abrirmenu(){
        menu.style.right = "0"
    }
    function fecharmenu(){
        menu.style.right = "-200px"
    }


function aceito(){
    localStorage.AceitoLgpd = "Aceito"
    msgCookies.classList.remove('mostrar')
    window.location.reload();
}
function naoaceitocookies(){
    localStorage.NaoAceitoLgpd = "Nao Aceito"
    msgCookies.classList.remove('mostrar')
}


if(localStorage.AceitoLgpd == 'Aceito'){
    msgCookies.classList.remove('mostrar')
}

else if(localStorage.NaoAceitoLgpd == 'Nao Aceito'){
    msgCookies.classList.remove('mostrar')
    botao.disabled=true
    alert("Você precisa aceitar o cookies para enviar o email")
}

else{
    msgCookies.classList.add('mostrar')
}


function voltar(){
    window.history.back()
}

function enviarEmail(){
    Email.send({
        SecureToken : "56cb31ea-646d-427c-ba71-77cb6fd21567",
        To : "leonardolisboalsl007@gmail.com",
        From : "leonardolisboalsl007@gmail.com",
        Subject : "Entrando em contato pelo Site da Working at Var",
        Body : "<b>Nome:</b> " + document.getElementById("nome").value
            + "<br> <br> <b>Email:</b> " + document.getElementById("email-usuario").value
            + "<br> <br> <b>Assunto:</b>: " + document.getElementById("assunto").value
            + "<br> <br> <b>Mensagem:</b> " + document.getElementById("mensagem").value
        }).then(
        message => alert("mensagem enviada com sucesso!")
        );
}
