window.onload = function () {
    let hova = document.getElementById("ide");
    //hova.innerHTML = "";

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

    var faktoriálisR = (n) => {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * faktoriálisR(n - 1)
        }
    }

    let kiir = document.getElementById("pascal");
    //kiir.innerHTML = "";

    for (var r = 0; r < 10; r++) {
        let row = document.createElement("div");
        kiir.appendChild(row);
        row.classList.add("sorok");

        for (var c = 0; c <= r; c++) {
            let elem = document.createElement("div");
            row.appendChild(elem);
            elem.innerText = faktoriálisR(r) / (faktoriálisR(c) * (faktoriálisR(r - c)));
            elem.classList.add("elemek");

        }
    }

}