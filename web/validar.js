/* */
function validar() {

    // declara as variaveis
    // o tipo e implicito
    // o JavaScript e uma linguagem fracamente tipada

    var login;
    var senha;

    login = document.getElementById("login").value;
    senha = document.getElementById("senha").value;

    if (login === '' || senha === '') {
        alert("Login e Senha Obrigatorio");
        return false;
    }
    else {
        return true;
    }
}