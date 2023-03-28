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
}
function naoaceitocookies(){
    localStorage.NaoAceitoLgpd = "Nao Aceito"
    msgCookies.classList.add('mostrar')
}
if(localStorage.AceitoLgpd == 'Aceito'){
    msgCookies.classList.remove('mostrar')
}
else{
    msgCookies.classList.add('mostrar')
}