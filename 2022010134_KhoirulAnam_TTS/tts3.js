const btn = document.querySelectorAll("body button");

btn.forEach(function (pil) {
    pil.addEventListener('click', function () {
        let namebtn = pil.getAttribute('name');
        geserCek(namebtn);
    });
});

function geserCek(nbtn) {
    const table = document.querySelectorAll('.' + nbtn);
    if (table[0].disabled == true) {
        autoNext(0, nbtn);
    } else {
        table[0].select();
    }


    for (let i = 0; i < table.length; i++) {
        table[i].addEventListener('input', function () {
            if (i == table.length - 1) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);


            } else if (i == table.length - 2 && table[table.length - 1].disabled == true) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);

            } else {
                autoNext(i, nbtn);
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);
            }

        });

    }
}

function autoNext(i, cn) {
    let d = document.querySelectorAll('.' + cn);
    if (d[i + 1].disabled == true) {
        d[i + 2].select();

    } else {
        d[i + 1].select();
    }

}

// concat input to string
function catString(cn) {
    var concat = "";
    let d = document.querySelectorAll('.' + cn);
    for (let i = 0; i < d.length; i++) {
        concat += d[i].value;
    }
    return concat;
}
// const allLevelsCompleted = Array.from(table).every(input => input.disabled);
function submitString(concat, tipe, tabel) {
    if (concat.toUpperCase() == "WINDOWS" && tipe == "d1") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "WORD" && tipe == "m1") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "FIREWALL" && tipe == "d2") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "MEMORY" && tipe == "d3") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "WINRAR" && tipe == "m2") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "HTML" && tipe == "m3") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "CACHE" && tipe == "d4") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "EXCEL" && tipe == "m4") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "CLOUD" && tipe == "d5") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "LINUX" && tipe == "m5") {
        pengulanganTabel(tabel);
        showCongratulatoryMessage();
    }
}
function pengulanganTabel(table) {
    for (let j = 0; j < table.length; j++) {
        table[j].disabled = true;
    }
}

function showCongratulatoryMessage() {
    const message = "Selamat! Kamu Telah Menyelesaikan game! Lanjut Level Selanjutnya?";
    alert(message);
    window.location.href = "tts3.html";
}


