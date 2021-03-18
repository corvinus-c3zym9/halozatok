window.onload = function () {
let ide = document.getElementById("pascal");
    for (var sor = 0; sor < 10; sor++)
    {
        let sor = document.createElement("div");
        sor.appendChild("sor");
        pascal.appendChild("sor");
    //új div létrehozása az új sornak
    //új div osztálylistájához add hozzá a "sor"-t
    //új div-et add hozzá a "pascal" gyermekeihez
        for (var oszlop = 0; oszlop <= sor; oszlop++)
        {
            let elem = document.createElement("div");
            elem.appendChild("elem");
            sor.appendChild("elem");
            //új div létrehozása az új elemnek
            //új elem div osztálylistájához add hozzá az "elem"-et
            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            //új elem div-et vedd fel a sor elemei közé
        }
    }
}