function cambio() {
    let euro = document.getElementById("cifra").value;
    euro = Number(euro);

    if(isNaN(euro) || euro < 0) euro = 0;

    mostraCambio(euro, 1.12, '$', "dollaro");
    mostraCambio(euro, 0.85, '£', "sterlina");
    mostraCambio(euro, 177.06, '¥', "yen");
}

function mostraCambio(euro, tasso, simbolo, id) {
    let valore;

    valore = document.getElementById(id);
    valore.innerHTML = (euro * tasso).toFixed(2) + " " + simbolo;
}

function darkmode() {
    let toggle = document.getElementById("toggle");
    let temaAttuale = document.documentElement.getAttribute("data-bs-theme");
    
    let nuovoTema = temaAttuale === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", nuovoTema);

    toggle.classList.toggle("bi-toggle-off");
    toggle.classList.toggle("bi-toggle-on");
}