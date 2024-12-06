const guide = document.getElementById('guide')
const time = document.getElementById('time');
const hint = document.getElementById('hintButton');
hint.onclick = function(){
    if (hintCount>0){
        for (let i = 1; i < 9; i++){
            for (let j = 1; j < 9; j++){
                square(i,j).style.backgroundColor = 'cornflowerblue'
            }
        }
        setTimeout(darkk,1000)
        hintCount--;
        hint.textContent = `hint (${hintCount})`
    }
}

let listdir =  [[0,2,2,2,2,2,2,2],
                [1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1],
                [1,1,1,1,1,1,1,1]];
let x = 1;
let y = 1;
let n = 1;
let hintCount = 2;
let p = 1;
let q = 1;
let s = 1;
let t = 1;
let u = 1;
let v = 1;
let done = false;
let together = false;
let waktu = 30;

countdown()
generateMaze();

function square(a,b){
    return document.getElementById(`square${a}${b}`);
}

function border(a,b){
    square(a,b).style.borderColor = 'black';

    if (listdir[b-1][a-1] != 0){
        if (listdir[b-1][a-1] == 1 || listdir[b-1][a-1] == 3){
            square(a,b).style.borderTopColor = 'transparent';
            square(a,b).style.borderBottomColor = 'transparent';
        } else if (listdir[b-1][a-1] == 2 || listdir[b-1][a-1] == 4){
            square(a,b).style.borderLeftColor = 'transparent';
            square(a,b).style.borderRightColor = 'transparent';            
        }
    } else {
        square(a,b).style.borderColor = 'transparent';
    }

    // sebelahnya
    if (a != 8){
        if (listdir[b-1][a-1+1] == 2){
            square(a,b).style.borderRightColor = 'transparent';
        }
    }
    if (a != 1){
        if (listdir[b-1][a-1-1] == 4){
            square(a,b).style.borderLeftColor = 'transparent';
        }
    }
    if (b != 8){
        if (listdir[b-1+1][a-1] == 1){
            square(a,b).style.borderBottomColor = 'transparent';
        }
    }
    if (b != 1){
        if (listdir[b-1-1][a-1] == 3){
            square(a,b).style.borderTopColor = 'transparent';
        }
    }

    // ujung
    if (a == 8){
        square(a,b).style.borderRightColor = 'black';
    } 
    if (a == 1){
        square(a,b).style.borderLeftColor = 'black';
    }
    if (b == 8){
        square(a,b).style.borderBottomColor = 'black';
    }
    if (b == 1){
        square(a,b).style.borderTopColor = 'black';
    }
}

function darkk(){
    for (let i = 1; i < 9; i++){
        for (let j = 1; j < 9; j++){
            square(i,j).style.backgroundColor = 'black'
        }
    }   
    light(p,q);
         
}

function light(a,b){
    square(a,b).style.backgroundColor = 'cornflowerblue'
    if (a != 8){
        square(a+1,b).style.backgroundColor = 'cornflowerblue'
    } 
    if (a != 1){
        square(a-1,b).style.backgroundColor = 'cornflowerblue'
    }
    if (b != 8){
        square(a,b+1).style.backgroundColor = 'cornflowerblue'
    }
    if (b != 1){
        square(a,b-1).style.backgroundColor = 'cornflowerblue'
    }
    if (a != 1 && b != 1){
        square(a-1,b-1).style.backgroundColor = 'cornflowerblue'
    }
    if (a != 8 && b != 1){
        square(a+1,b-1).style.backgroundColor = 'cornflowerblue'
    }
    if (a != 1 && b != 8){
        square(a-1,b+1).style.backgroundColor = 'cornflowerblue'
    }
    if (a != 8 && b != 8){
        square(a+1,b+1).style.backgroundColor = 'cornflowerblue'
    }
}

function dark(a,b){
    square(a,b).style.backgroundColor = 'black'
    if (a != 8){
        square(a+1,b).style.backgroundColor = 'black'
    } 
    if (a != 1){
        square(a-1,b).style.backgroundColor = 'black'
    }
    if (b != 8){
        square(a,b+1).style.backgroundColor = 'black'
    }
    if (b != 1){
        square(a,b-1).style.backgroundColor = 'black'
    }
    if (a != 1 && b != 1){
        square(a-1,b-1).style.backgroundColor = 'black'
    }
    if (a != 8 && b != 1){
        square(a+1,b-1).style.backgroundColor = 'black'
    }
    if (a != 1 && b != 8){
        square(a-1,b+1).style.backgroundColor = 'black'
    }
    if (a != 8 && b != 8){
        square(a+1,b+1).style.backgroundColor = 'black'
    }
}

function changeOP(){
    let pathx = 0;
    let pathy = 0;
    let path;

    path = n%2;

    if (path == 0){
        if (x == 8){
            pathx = -1;
        } else if (x == 1){
            pathx = 1;
        } else {
            pathx = (Math.floor(Math.random() * 2) * 2) - 1;
        }   
    } else {
        if (y == 8){
            pathy = -1;
        } else if (y == 1){
            pathy = 1;
        } else {
            pathy = (Math.floor(Math.random() * 2) * 2) - 1;
        }
    }

    if (pathx == -1){
        listdir[y-1][x-1] = 2;
    } else if (pathx == 1){
        listdir[y-1][x-1] = 4;
    } else if (pathy == -1){
        listdir[y-1][x-1] = 1;
    } else if (pathy == 1){
        listdir[y-1][x-1] = 3;
    }

    x += pathx;
    y += pathy;

    listdir[y-1][x-1] = 0;

    border(x,y)
    if (x != 8){
        border(x+1,y)
    }
    if (x != 1){
        border(x-1,y)
    }
    if (y != 8){
        border(x,y+1)
    }
    if (y != 1){
        border(x,y-1)
    }

    n += 1
}


function generateMaze() {
    square(p,q).textContent = '';
    square(s,t).textContent = '';
    square(u,v).textContent = '';
    dark(p,q);
    done = false;

    for (let i = 1; i < 1000; i++){
        changeOP();
    }

    if (x <= 4 && y <= 4){
        p = 8;
        q = 8;
        s = 1;
        t = 8;
        u = 1;
        v = 1;
    } else if (x <= 4 && y > 4){
        p = 8;
        q = 1;  
        s = 8;
        t = 8;   
        u = 1;
        v = 8;           
    } else if (x > 4 && y <= 4){
        p = 1;
        q = 8;
        s = 1;
        t = 1;    
        u = 8;
        v = 1;            
    } else if (x > 4 && y > 4){
        p = 1;
        q = 1;  
        s = 8;
        t = 1; 
        u = 8;
        v = 8;             
    }
    square(p,q).textContent = 'A';
    square(s,t).textContent = 'Exit';
    square(u,v).textContent = 'B';
    light(p,q);
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (waktu >= 0){
        if (e.keyCode == '38' && q != 1 && square(p,q-1).style.borderBottomColor != 'black' && square(p,q).style.borderTopColor != 'black') {
            // up arrow
            square(p,q).textContent = '';
            dark(p,q);
            q -= 1;
            if (square(p,q).textContent == 'B' || done){
                square(p,q).textContent = 'A&B';
                done = true;
            } else {
                square(p,q).textContent = 'A';
            }
            light(p,q);
        } else if (e.keyCode == '40' && q != 8 && square(p,q+1).style.borderTopColor != 'black' && square(p,q).style.borderBottomColor != 'black') {
            // down arrow
            square(p,q).textContent = '';
            dark(p,q);
            q += 1;
            if (square(p,q).textContent == 'B' || done){
                square(p,q).textContent = 'A&B';
                done = true;
            } else {
                square(p,q).textContent = 'A';
            }
            light(p,q);
        } else if (e.keyCode == '37' && p != 1 && square(p-1,q).style.borderRightColor != 'black' && square(p,q).style.borderLeftColor != 'black') {
            // left arrow
            square(p,q).textContent = '';
            dark(p,q);
            p -= 1;
            if (square(p,q).textContent == 'B' || done){
                square(p,q).textContent = 'A&B';
                done = true;
            } else {
                square(p,q).textContent = 'A';
            }
            light(p,q);
        }
        else if (e.keyCode == '39' && p != 8 && square(p+1,q).style.borderLeftColor != 'black' && square(p,q).style.borderRightColor != 'black') {
            // right arrow
            square(p,q).textContent = '';
            dark(p,q);
            p += 1;
            if (square(p,q).textContent == 'B' || done){
                square(p,q).textContent = 'A&B';
                done = true;
            } else {
                square(p,q).textContent = 'A';
            }
            light(p,q);
        }
        if (square(s,t).textContent != 'A' && square(s,t).textContent != 'A&B'){
            square(s,t).textContent = 'Exit';
        }
        if (square(s,t).textContent == 'A&B'){
            window.location.href = 'menang.html';
        }
    }
}

function countdown() {
    function tick() {
        if (waktu >= 0) {
            time.textContent = `Time left: ${waktu}s`;
            waktu--;
            setTimeout(tick, 1000);
            if (waktu < 0){
                hint.disabled = true;
                guide.textContent = 'You Lose!';
            }

        }
    }
    tick();
}