const jumlahKoin = document.getElementById('jumlahKoin');
const ambil1 = document.getElementById('ambil1');
const ambil2 = document.getElementById('ambil2');
const ambil3 = document.getElementById('ambil3');
const guide = document.getElementById('guide');

let a = Math.floor(Math.random() * 3) + 5;
let b = Math.floor(Math.random() * 3) + 1;
let koin = 4*a + b;
let take;
let endTurn = false;

jumlahKoin.textContent = koin;

ambil1.onclick = function(){
    take = 1;
    koin -= take
    jumlahKoin.textContent = koin;

    if (koin <= 0){
        window.location.href = "menang.html";
    } else{
        ambil1.textContent = 'wait';
        ambil2.textContent = 'wait';
        ambil3.textContent = 'wait';

        ambil1.disabled = true;
        ambil2.disabled = true;
        ambil3.disabled = true;
    
        setTimeout(computerTurn,1000,koin);
        guide.textContent = "Computer's turn";
    }
}
ambil2.onclick = function(){
    take = 2;
    koin -= take
    jumlahKoin.textContent = koin;

    if (koin <= 0){
        window.location.href = "menang.html";
    } else{
        ambil1.textContent = 'wait';
        ambil2.textContent = 'wait';
        ambil3.textContent = 'wait';

        ambil1.disabled = true;
        ambil2.disabled = true;
        ambil3.disabled = true;
    
        setTimeout(computerTurn,1000,koin);
        guide.textContent = "Computer's turn";
    }
}
ambil3.onclick = function(){
    take = 3;
    koin -= take
    jumlahKoin.textContent = koin;

    if (koin <= 0){
        window.location.href = "menang.html";
    } else{
        ambil1.textContent = 'wait';
        ambil2.textContent = 'wait';
        ambil3.textContent = 'wait';

        ambil1.disabled = true;
        ambil2.disabled = true;
        ambil3.disabled = true;
    
        setTimeout(computerTurn,1000,koin);
        guide.textContent = "Computer's turn";
    }
}

function computerTurn(n){
    if (n%4 == 1){
        take = 1;
    } else if (n%4 == 2){
        take = 2;
    } else if (n%4 == 3){
        take = 3;
    } else{
        take = Math.floor(Math.random() * 3) + 1;
    }
    koin -= take
    jumlahKoin.textContent = koin;   
    guide.textContent = `The computer takes ${take} coin(s)`;

    if (koin <= 0){
        ambil1.textContent = 'Game Over!';
        ambil2.textContent = 'Game Over!';
        ambil3.textContent = 'Game Over!';

        guide.textContent = 'YOU LOSE!';
    } else{
        ambil1.textContent = 'Take 1 coin';
        ambil2.textContent = 'Take 2 coins';
        ambil3.textContent = 'Take 3 coins';

        ambil1.disabled = false;
        ambil2.disabled = false;
        ambil3.disabled = false;
    }
}