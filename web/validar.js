/* */
function validar() {
    
    // declara as variaveis
    // o tipo e implicito
    // o JavaScript e uma linguagem fracamente tipada

    var login;
    var senha;

    login = document.getElementById("login").value;
    senha = document.getElementById("senha").value;

    if (login === 'senai' || senha === '123') {
        window.sessionStorage.setItem('login', login);
        return true;
    }
    else if (login === '' || senha === '') {
        alert("Login e Senha Obrigatorio");
        return false;

    } else {
        alert("Usuario ou senha invalido");
        return false;
    }
}