const ww = window.innerWidth;
const wh = window.innerHeight;
const messageModal = document.querySelector('#message-modal');
const messageText = document.querySelector('#message-modal p');
const messageImg = document.querySelector('#message-modal img');
const startBtn = document.querySelector('#start-btn');
const closeBtn = document.querySelector('#close-btn');
let letter;
let points = 0;
let timerId;

function getRandomX() {
    // мин: 0, макс: ширина экрана - ширина клавиши (100)
    return `${Math.random() * (ww - 100 + 1)}px`;
}

function getRandomY() {
    // мин: 0, макс: высота экрана - высота клавиши (100)
    return `${Math.random() * (wh - 100 + 1)}px`;
}

function getRandomLetter() {
    let code = Math.random() * (122 - 97 + 1) + 97;
    return String.fromCharCode(code);
}

function createKey() {
    deleteKey();

    let key = document.createElement('div');
    key.style.top = getRandomY();
    key.style.left = getRandomX()
    key.classList.add('key');

    let keyTitle = document.createElement('p');
    keyTitle.classList.add('key__title');
    letter = getRandomLetter();
    keyTitle.innerHTML = letter;

    key.append(keyTitle);
    document.body.append(key);

    timerId = setTimeout(showFailure, 3000);
}

function deleteKey() {
    let key = document.querySelector('.key');
    if (key) {
        key.remove();
    }
}

function showFailure() {
    deleteKey();
    points = 0;
    messageText.innerHTML = 'Эхх, ты не смог одержать победу!';
    messageImg.src = '../images/failure.gif';
    messageModal.style.display = 'block';
}

function showVictory() {
    deleteKey();
    points = 0;
    messageText.innerHTML = 'Ура, ты смог одержать победу!';
    messageImg.src = '../images/victory.gif';
    messageModal.style.display = 'block';
}

document.addEventListener('keydown', (e) => {
    if (e.key == letter) {
        clearTimeout(timerId);
        points++;
        document.querySelector('.key').classList.add('green');
        setTimeout(() => { points == 10 ? showVictory() : createKey(); }, 500);
    }
    else
    {
        document.querySelector('.key').classList.add('red');
        setTimeout(showFailure, 500);
    }
});

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    createKey();
});

closeBtn.addEventListener('click', () => {
    messageModal.style.display = 'none';
    startBtn.style.display = 'block';
});


