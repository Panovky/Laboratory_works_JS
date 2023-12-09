const iconsContainer = document.querySelector('.icons');
const icons = document.querySelectorAll('.icons__item');
const nezukoIcon = icons[0];
const tanjiroIcon = icons[1];
const zenitsuIcon = icons[2];
const areas = document.querySelectorAll('.areas__item');
const areaTitles = document.querySelectorAll('.areas__item__title');
const messageModal = document.querySelector('#message-modal');
const okBtn = document.querySelector('#message-modal button');

// через 10 миллисекунд с начала перетаскивания оригинал перетаскиваемой иконки скрывается
function dragStart() {
    setTimeout(
        () => { this.classList.add('hidden'); },
        10);
}

// когда перетаскивание завершено, делаем видимой оригинал иконки
function dragEnd() {
    this.classList.remove('hidden');
    // проверяем, не закончена ли игра
    check();
}

function dragOver(e) {
    e.preventDefault();
}

// выделяем область, когда над ней появляется иконка (иконка заходит на возможную область сброса)
function dragEnter() {
    this.classList.add('hovered');
}

// убираем выделение области, когда иконка выходит за ее пределы (за пределы возможной области сброса)
function dragLeave() {
    this.classList.remove('hovered');
}

// проверка, все ли иконки находятся в нужных областях
function check() {
    if (document.querySelectorAll('.icons .icons__item').length == 0) {
        messageModal.style.display = 'block';
    }
}

// возврат игры в начало
function clear() {
    areas.forEach(area => {
        area.classList.remove('hovered');
    });

    areaTitles.forEach(areaTitle => {
        areaTitle.style.display = 'block';
    });

    iconsContainer.append(nezukoIcon, tanjiroIcon, zenitsuIcon);
}

// перед возможным сбросом элемента проверяется, правильная ли выбрана область для сброса иконки
function drop() {
    let icon = document.querySelector('.hidden');

    if (this.dataset.character == icon.dataset.character) {
        this.querySelector('.areas__item__title').style.display = 'none';
        this.append(icon);
        this.classList.remove('hovered');
    } else {
        clear();
    }
}

icons.forEach(icon => {
    icon.addEventListener('dragstart', dragStart);  // начало перетаскивания
    icon.addEventListener('dragend', dragEnd);  // конец перетаскивания
});

areas.forEach(area => {
    area.addEventListener('dragover', dragOver);  // периодически при прохождении иконки над возможным местом сброса
    area.addEventListener('dragenter', dragEnter);  // единожды, в момент, когда иконка попадает в область сброса
    area.addEventListener('dragleave', dragLeave);  // единожды, в момент, когда иконка покидает область сброса
    area.addEventListener('drop', drop); // в момент, когда иконка будет брошена
});

okBtn.addEventListener('click', () => {
    messageModal.style.display = 'none';
    clear();
});

