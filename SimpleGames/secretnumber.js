const inputTebak = document.getElementById('inputTebak');
const nyawa = document.getElementById('nyawa');
const petunjuk = document.getElementById('petunjuk');

let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 124) + 900;
let lowerBound = a-1;
let upperBound = a+b;

let angka = Math.floor((Math.random() * b)+a);
let sisaNyawa = 12;
let tebakan;

nyawa.textContent = `Guesses left: ${sisaNyawa}`;
petunjuk.textContent = `Hint: between ${lowerBound} and ${upperBound}`;

document.onkeydown = checkKey;

function checkKey(e){

    e = e || window.event;

    if (e.keyCode == '13' && sisaNyawa != 0){
        tebakan = Number(inputTebak.value);
        if (tebakan > angka) {
            sisaNyawa -= 1;
            if (tebakan < upperBound){
                upperBound = tebakan;
            }
            nyawa.textContent = `Guesses left: ${sisaNyawa}`;
            petunjuk.textContent = `Hint: between ${lowerBound} and ${upperBound}`;
        } else if (tebakan < angka) {
            sisaNyawa -= 1;
            if (tebakan > lowerBound){
                lowerBound = tebakan;
            }
            nyawa.textContent = `Guesses left: ${sisaNyawa}`;
            petunjuk.textContent = `Hint: between ${lowerBound} and ${upperBound}`;
        } else {
            window.location.href = "menang.html";
        }
        if (sisaNyawa == 0){
            petunjuk.textContent = 'YOU LOSE!'
        }
    }
}