const guide = document.getElementById('guide');
let a = Math.floor(Math.random() * 8) + 1;
let b = Math.floor(Math.random() * 8) + 1;

tombol(a,b).style.backgroundColor = 'yellow';
yourTurn(a,b);

function tombol(a,b){
    return document.getElementById(`tombol${a}${b}`);
}

function disableButton(){
    for (let i=1;i<=8;i++){
        for (let j=1;j<=8;j++){
            tombol(i,j).disabled = true;
        }
    }    
}

function enableButton(){
    for (let i=1;i<=8;i++){
        for (let j=1;j<=8;j++){
            tombol(i,j).disabled = false;
        }
    }    
}

function checkPoint(a,b){
    let noWay = true;
    for (let i=1;i<=8;i++){
        for (let j=1;j<=8;j++){
            if (Math.pow(i-a,2)+Math.pow(j-b,2)==5 && tombol(i,j).style.backgroundColor != 'red'){
                noWay = false;
            }
        }
    }
    return noWay;
}

function randomMove(a,b){
    let done = false;
    for (let i=1;i<=8;i++){
        for (let j=1;j<=8;j++){
            if (Math.pow(i-a,2)+Math.pow(j-b,2)==5 && tombol(i,j).style.backgroundColor != 'red'){
                tombol(a,b).style.backgroundColor = 'red';
                a = i;
                b = j;
                tombol(a,b).style.backgroundColor = 'yellow';
                done = true;
                break;
            }
        }
        if (done){
            break;
        }
    }
    return [a,b]
}

function computerTurn(a,b){
    if ((a%4 == 1 || a%4 == 2) && b%2 == 0){
        tombol(a,b).style.backgroundColor = 'red';
        if (tombol(a+2,b-1).style.backgroundColor != 'red'){
            a += 2;
            b -= 1;
            tombol(a,b).style.backgroundColor = 'yellow';
        } else {
            nextPoint = randomMove(a,b);
            a = nextPoint[0];
            b = nextPoint[1];
        }
    } else if ((a%4 == 0 || a%4 == 3) && b%2 == 1){
        tombol(a,b).style.backgroundColor = 'red';
        if (tombol(a-2,b+1).style.backgroundColor != 'red'){
            a -= 2;
            b += 1;
            tombol(a,b).style.backgroundColor = 'yellow';
        } else {
            nextPoint = randomMove(a,b);
            a = nextPoint[0];
            b = nextPoint[1];
        }
    } else if ((a%4 == 1 || a%4 == 2) && b%2 == 1){
        tombol(a,b).style.backgroundColor = 'red';
        if (tombol(a+2,b+1).style.backgroundColor != 'red'){
            a += 2;
            b += 1;
            tombol(a,b).style.backgroundColor = 'yellow';
        } else {
            nextPoint = randomMove(a,b);
            a = nextPoint[0];
            b = nextPoint[1];
        }
    } else {
        tombol(a,b).style.backgroundColor = 'red';
        if (tombol(a-2,b-1).style.backgroundColor != 'red'){
            a -= 2;
            b -= 1;
            tombol(a,b).style.backgroundColor = 'yellow';
        } else {
            nextPoint = randomMove(a,b);
            a = nextPoint[0];
            b = nextPoint[1];
        }
    }

    if (checkPoint(a,b)){
        guide.textContent = 'YOU LOSE!';
    } else {
        yourTurn(a,b);
        guide.textContent = 'Your turn!';
        enableButton();
    }
}

function yourTurn(a,b){
    for (let i=1;i<=8;i++){
        for (let j=1;j<=8;j++){
            tombol(i,j).onclick = function(){
                if (Math.pow(i-a,2)+Math.pow(j-b,2)==5 && tombol(i,j).style.backgroundColor != 'red'){
                    disableButton();
                    tombol(a,b).style.backgroundColor = 'red';
                    a = i;
                    b = j;
                    tombol(a,b).style.backgroundColor = 'yellow';

                    if (checkPoint(a,b)){
                        window.location.href = "menang.html";
                    } else{
                        setTimeout(computerTurn,1000,a,b);
                        guide.textContent = "Computer's turn";
                    }
                }
            }
        }
    }  
}
