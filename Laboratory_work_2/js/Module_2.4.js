let dragon = document.querySelector('img');
dragon.style.top = `${window.innerHeight / 2 - 60}px`;
dragon.style.left = `${window.innerWidth / 2 - 60}px`;
let timer_id;
dragon.onmousedown = cut_head;
dragon.onmouseover = run;

function getRandomXY() {
    let ww = window.innerWidth;
    let wh = window.innerHeight;

    //Math.random() * (max - min + 1) + min;
    let x = Math.random() * (ww - 120 + 1);
    let y = Math.random() * (wh - 120 + 1);

    return [x, y];
}

function run(event) {
    clearTimeout(timer_id);
    timer_id = setTimeout(
        function () {
            let dragon = event.target;
            console.log(dragon);
            let [x, y] = getRandomXY();
            dragon.style.top = `${y}px`;
            dragon.style.left = `${x}px`;
        },
        500
    );
}

function cut_head(event) {
    clearTimeout(timer_id);
    let img1 = document.createElement('img');
    let img2 = document.createElement('img');

    img1.src = '../images/icon-dragon.png';
    img2.src = '../images/icon-dragon.png';

    let [x1, y1] = getRandomXY();
    img1.style.top = `${y1}px`;
    img1.style.left = `${x1}px`;

    let [x2, y2] = getRandomXY();
    img2.style.top = `${y2}px`;
    img2.style.left = `${x2}px`;

    img1.onmousedown  = cut_head;
    img1.onmouseover = run;

    img2.onmousedown  = cut_head;
    img2.onmouseover = run;

    document.body.removeChild(event.target);
    document.body.appendChild(img1);
    document.body.appendChild(img2);
}