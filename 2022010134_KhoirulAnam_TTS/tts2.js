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
 

function submitString(concat, tipe, tabel) {
    if (concat.toUpperCase() == "HARDWARE" && tipe == "D1") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "RAM" && tipe == "D2") {
        pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "DCIM" && tipe == "D3") {
    pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "TOP" && tipe == "D4") {
     pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "SOFTWARE" && tipe == "D5") {
    pengulanganTabel(tabel);
    }else if (concat.toUpperCase() == "FOLDER" && tipe == "D6") {
    pengulanganTabel(tabel);
    }else if (concat.toUpperCase() == "HARDDISK" && tipe == "M1") {
    pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "ROM" && tipe == "M2") {
     pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "RIGHT" && tipe == "M3") {
    pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "PIXEL" && tipe == "M4") {
    pengulanganTabel(tabel);
    } else if (concat.toUpperCase() == "SAVE" && tipe == "M5") {
    pengulanganTabel(tabel);
    showCongratulatoryMessage();
    }
}

function pengulanganTabel(table) {
    for (let j = 0; j < table.length; j++) {
        table[j].disabled = true;
    }
}

// Fungsi menampilan pesan
function showCongratulatoryMessage() {
    const message = "Selamat! Kamu Telah Menyelesaikan game! Lanjut Level Selanjutnya?";
    alert(message);
    window.location.href = "tts3.html";
}
 
  
