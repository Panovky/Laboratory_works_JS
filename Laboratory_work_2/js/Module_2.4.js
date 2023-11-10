const ww = window.innerWidth;
const wh = window.innerHeight;

let dragon = document.querySelector('img');
dragon.style.top = `${wh / 2 - 60}px`;
dragon.style.left = `${ww / 2 - 60}px`;

let timer_id;
dragon.onmouseover = run;
dragon.onclick = cut_head;

function getRandomXY() {
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

    img1.onmouseover = run;
    img1.onclick  = cut_head;

    img2.onmouseover = run;
    img2.onclick  = cut_head;

    document.body.removeChild(event.target);
    document.body.appendChild(img1);
    document.body.appendChild(img2);
}