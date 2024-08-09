let content = document.querySelector('#Content');
let button = document.querySelector('#start');
let n, no, j = 0;
let imgpath;

async function server_response(){
    let respon = await fetch('REPLACE_ME/img/',{method:'POST'});
    let jsondata = await respon.json();
    imgpath = JSON.stringify(jsondata);
    imgpath = imgpath.slice(1,8);
}

server_response();

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let gamearr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let newgg = document.querySelector('#newgg');
let highscores = [];
let winflag = 0;
let timee=0,timeee=0;


newgg.addEventListener("click", newgame);
button.addEventListener("click", newgame);

async function newgame() {
    timee = 0;
    timeee = 0;
    let flag = 0, butflg = 0;
    let fn1 = () => {
        button.innerHTML = "Give Up";
        button.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
        button.style.color = "white";
        butflg = 1;
    }
    let fn2 = () => { butflg = 0; }
    let fn3 = () => {
        button.style.backgroundColor = "rgb(46, 255, 46)";
        button.style.color = "black";
    }
    let fn4 = () => {
        button.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
        button.style.color = "white";
    }

    for (let i = 1; i <= 16; i++) {
        n = Math.random();
        n = n * 100;
        n = n / 6.25;
        no = parseInt(n);
        no = no + 1;
        for (let j = 0; j < 16; j++) {
            if (no == arr[j]) {
                arr[j] = 0;
                flag++;
                document.getElementById(`div${i}`).innerHTML = `<img src="/imagesplits/${imgpath + no}.jpg" alt="${no}" id="${no}">`;
                gamearr[i - 1] = no;
                break;
            }
            else {
                if (j == 15) {
                    i--;
                }
            }
        }
        for (z = 1; z <= 16; z++) {
        }
        if (flag == 16) {
            arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
            console.log(gamearr);
            break;
        }
    }
    setTimeout(() => {
        for (z = 1; z <= 16; z++) {
            document.getElementById(`${z}`).addEventListener("click", gameplay);
        }
    }, 500);

    button.removeEventListener("click", newgame);
    button.removeEventListener("mouseover", fn3);
    button.addEventListener("mouseleave", fn4);
    button.addEventListener("mouseover", fn1);
    button.addEventListener("mouseleave", fn2);
    newgg.innerHTML = "Give Up";
    newgg.removeEventListener("click", newgame);


    var tme = setInterval(() => {
        timee = timee + 0.01;
        timeee = timee.toFixed(2);
        if (butflg == 0) {
            button.style.backgroundColor = "rgb(46, 255, 46)";
            button.style.color = "black";
            button.innerHTML = ` ${timeee} `;
        }
    }, 10);

    window.giveup = function () {
        clearInterval(tme)
        newgg.removeEventListener("click", giveup);
        button.removeEventListener('click', giveup);
        newgg.addEventListener("click", newgame);
        button.addEventListener("click", newgame);
        button.removeEventListener("mouseover", fn1);
        button.removeEventListener("mouseleave", fn2);
        newgg.innerHTML = "New Game";
        button.innerHTML = "Start Game";
        button.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
        button.style.color = "white";
        button.addEventListener("mouseover", fn3);
        button.addEventListener("mouseleave", fn4);
        for (let k = 1; k <= 16; k++) {
            document.getElementById(`div${k}`).innerHTML = `<img src="/imagesplits/${imgpath + k}.jpg" alt="${k}" id="${k}">`;
            gamearr[k - 1] = k;
        }
    }
    newgg.addEventListener("click", giveup);
    button.addEventListener('click', giveup);

}


function gameplay(event) {
    let box = event.target.id;
    let divbox = document.getElementById(box).parentNode.id;
    let div16 = document.getElementById("16").parentNode.id;
    let divboxnum = parseInt(divbox.slice(3, 5));
    let div16num = parseInt(div16.slice(3, 5));
    if (divboxnum == div16num - 1) {
        move(box, "rightt", "leftt");
        setTimeout(() => {
            document.getElementById(divbox).innerHTML = `<img src="/imagesplits/${imgpath + "16"}.jpg" alt="${"16"}" id="${"16"}">`;
            document.getElementById(div16).innerHTML = `<img src="/imagesplits/${imgpath + box}.jpg" alt="${box}" id="${box}">`;
            document.getElementById(box).addEventListener("click", gameplay);
            document.getElementById("16").addEventListener("click", gameplay);
        }, 260);
        gamearr[divboxnum - 1] = 16;
        gamearr[div16num - 1] = parseInt(box);
        checkwin();

    }
    else if (divboxnum == div16num + 1) {
        move(box, "leftt", "rightt");
        setTimeout(() => {
            document.getElementById(divbox).innerHTML = `<img src="/imagesplits/${imgpath + "16"}.jpg" alt="${"16"}" id="${"16"}">`;
            document.getElementById(div16).innerHTML = `<img src="/imagesplits/${imgpath + box}.jpg" alt="${box}" id="${box}">`;
            document.getElementById(box).addEventListener("click", gameplay);
            document.getElementById("16").addEventListener("click", gameplay);
        }, 260);
        gamearr[divboxnum - 1] = 16;
        gamearr[div16num - 1] = parseInt(box);
        checkwin();
    }
    else if (divboxnum == div16num + 4) {
        move(box, "up", "down");
        setTimeout(() => {
            document.getElementById(divbox).innerHTML = `<img src="/imagesplits/${imgpath + "16"}.jpg" alt="${"16"}" id="${"16"}">`;
            document.getElementById(div16).innerHTML = `<img src="/imagesplits/${imgpath + box}.jpg" alt="${box}" id="${box}">`;
            document.getElementById(box).addEventListener("click", gameplay);
            document.getElementById("16").addEventListener("click", gameplay);
        }, 260);
        gamearr[divboxnum - 1] = 16;
        gamearr[div16num - 1] = parseInt(box);
        checkwin();
    }
    else if (divboxnum == div16num - 4) {
        move(box, "down", "up");
        setTimeout(() => {
            document.getElementById(divbox).innerHTML = `<img src="/imagesplits/${imgpath + "16"}.jpg" alt="${"16"}" id="${"16"}">`;
            document.getElementById(div16).innerHTML = `<img src="/imagesplits/${imgpath + box}.jpg" alt="${box}" id="${box}">`;
            document.getElementById(box).addEventListener("click", gameplay);
            document.getElementById("16").addEventListener("click", gameplay);
        }, 260);
        gamearr[divboxnum - 1] = 16;
        gamearr[div16num - 1] = parseInt(box);
        checkwin();
    }
    else { alert("Illegal move"); }

}

function move(box, dir1, dir2) {
    document.getElementById(box).className = `move${dir1}`;
    document.getElementById(box).style.zIndex = "1";
    setTimeout(() => {
        document.getElementById(box).classList.remove(`move${dir1}`);
        document.getElementById(box).style.zIndex = "0";
    }, 250);
    document.getElementById(16).className = `move${dir2}`;
    setTimeout(() => {
        document.getElementById(16).classList.remove(`move${dir2}`);
    }, 255);
}

function checkwin() {
    winflag = 1;
    for (let x = 1; x <= 12; x++) {
        if (gamearr[x - 1] != x) { winflag = 0; }
    }
    if (winflag == 1) {
        win();
    }
}

function win(newgame) {
    setTimeout(() => {
        content.innerHTML = "Solve the Puzzle";
    }, 5000);
    setTimeout(() => {
        content.innerHTML = "Congratulations, You Won";
        timeee=timeee-1;
        highscores.push(timeee);
        alert("Your score is"+timeee);
        giveup();
    }, 1000);

}