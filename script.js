var menu = document.getElementById("lista-navbar");
var msgCookies = document.getElementById('cookies-msg');

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

if(localStorage.AceitoLgpd == 'Aceito'){
    msgCookies.classList.remove('mostrar')
}

else{
    msgCookies.classList.add('mostrar')
}


function enviarEmail(){
    Email.send({
        SecureToken : "56cb31ea-646d-427c-ba71-77cb6fd21567",
        To : "marianne.cichy@docente.fieb.edu.br",
        From : "marianne.cichy@docente.fieb.edu.br",
        Subject : "Entrando em contato pelo Site da Working at Var",
        Body : "<b>Nome:</b> " + document.getElementById("nome").value
            + "<br> <br> <b>Email:</b> " + document.getElementById("email-usuario").value
            + "<br> <br> <b>Assunto:</b>: " + document.getElementById("assunto").value
            + "<br> <br> <b>Mensagem:</b> " + document.getElementById("mensagem").value
        }).then(
        message => alert("mensagem enviada com sucesso!")
        );
}

function voltar(){
    window.history.back()
}
