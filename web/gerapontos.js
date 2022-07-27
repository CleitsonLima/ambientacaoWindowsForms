function numRandom() {
    /*
    var num = 100
    return Math.floor(Math.random()* num);
    */
    var random = Math.random();
    document.getElementById("pontos").innerHTML = random;

    var login = window.sessionStorage.getItem('login');
    document.getElementById("login").innerHTML = login;

}
