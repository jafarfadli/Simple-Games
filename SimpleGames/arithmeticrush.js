
const problem = document.getElementById('problem');
const inputJawab = document.getElementById('inputJawab');
const numberOfQs = document.getElementById('numberOfQs');
const time = document.getElementById('time');
const nyawa = document.getElementById('nyawa');

let life = 3;
let qs = 1; 
let waktu = 60;
countdown();

running()

function running(){
    let a = Math.floor(Math.random() * 8) + 2;
    let b = Math.floor(Math.random() * 8) + 2;
    let c = Math.floor(Math.random() * 8) + 2;
    let d = Math.floor(Math.random() * 8) + 2;
    let op1 = Math.floor(Math.random() * 3);
    let op2 = Math.floor(Math.random() * 3);
    let op3 = Math.floor(Math.random() * 3);

    soal = `${a}${operation(op1)}${b}${operation(op2)}${c}${operation(op3)}${d}`;
    problem.textContent = soal;

    arrayProblem = [Number(a), operation(op1), Number(b), operation(op2), Number(c), operation(op3), Number(d)]

    numberOfQs.textContent = `Problem #${qs}/5`

    document.onkeydown = checkKey;

    function checkKey(e){

        e = e || window.event;

        if (e.keyCode == '13' && life != 0 && waktu >= 0){
            jawaban = Number(inputJawab.value);
            if (jawaban != result()){
                life -= 1;
                nyawa.textContent = `Life: ${life}`;
                if (life == 0){
                    waktu = 0;
                } else {
                    running();
                }
            } else {
                qs += 1;
                running();
            }
            if (qs == 6){
                window.location.href = "menang.html";
            }
        }
    }
}

function operation(n){
    if (n == 0){
        return '+';
    } else if (n==1){
        return '-';
    } else{
        return 'x';
    }
}

function result(){
    while (arrayProblem.includes('x')){
        for (let i=0; i<arrayProblem.length;i++){
            if ((arrayProblem[i]) == 'x'){
                arrayProblem[i] = arrayProblem[i+1] * arrayProblem[i-1];
                arrayProblem.splice(i+1,1);
                arrayProblem.splice(i-1,1);
                break;
            }
        }
    }
    while (arrayProblem.includes('+') || arrayProblem.includes('-')){
        for (let i=0; i<arrayProblem.length;i++){
            if ((arrayProblem[i]) == '+'){
                arrayProblem[i] = arrayProblem[i-1] + arrayProblem[i+1];
                arrayProblem.splice(i+1,1);
                arrayProblem.splice(i-1,1);
                break;
            } else if ((arrayProblem[i]) == '-'){
                arrayProblem[i] = arrayProblem[i-1] - arrayProblem[i+1];
                arrayProblem.splice(i+1,1);
                arrayProblem.splice(i-1,1);
                break;               
            }
        }
    }
    return arrayProblem[0];
}

function countdown() {
    function tick() {
        if (waktu >= 0) {
            time.textContent = `Time left: ${waktu}s`;
            waktu--;
            setTimeout(tick, 1000);
            if (waktu < 0){
                numberOfQs.textContent = 'You Lose!';
            }

        }
    }
    tick();
}
