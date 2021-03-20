window.onload = function () {
    let hova = document.getElementById("ide");
    hova.innerHTML = "";

    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        hova.appendChild(sor);
        sor.classList.add("egymás_mellé");

        for (var o = 0; o < 10; o++) {
            let szám = document.createElement("div");
            sor.appendChild(szám);
            szám.innerText = (s + 1) * (o + 1);
            szám.classList.add("doboz");
            szám.style.color = `rgb(${255 / 10 * s},0,${255 / 10 * o})`;
        }
    }
}    

