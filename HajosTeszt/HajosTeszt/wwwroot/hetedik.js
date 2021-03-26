var kérdések;
var kérdésSzám = 0;

function letöltés() {
    fetch('questions.json')
        .then(r => r.json())
        .then(d => letöltésBefejeződött(d));
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
}

var kérdésMegjelenítés = function (kérdésSzám) {
    let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    let kép = document.getElementById("kép1");
    let válasz1 = document.getElementById("válasz1");
    let válasz2 = document.getElementById("válasz2");
    let válasz3 = document.getElementById("válasz3");

    kérdés_szöveg.innerHTML = kérdések[kérdésSzám].questionText;
    kép.src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSzám].image;
    válasz1.innerText = kérdések[kérdésSzám].answer1;
    válasz2.innerText = kérdések[kérdésSzám].answer2;
    válasz3.innerText = kérdések[kérdésSzám].answer3;
}

window.onload = () => {
    letöltés();

    document.getElementById("vissza").onclick = () => {
        kérdésSzám--;
        if (kérdésSzám == -1) {
            kérdésMegjelenítés(kérdésSzám[2]);
        }
    }

    document.getElementById("előre").onclick = () => {
        kérdésSzám++;
        if (kérdésSzám == 3) {
            kérdésMegjelenítés(kérdésSzám[0]);
        }
    }
}