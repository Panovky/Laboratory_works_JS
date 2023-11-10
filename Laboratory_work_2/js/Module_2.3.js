let date_div = document.querySelector('#date-div');
let input = document.querySelector('input');
let modal_div = document.querySelector('#modal-div');
let p = document.querySelector('p');
let button = document.querySelector('button');

input.onchange = function() {
    let [year, month, day] = input.value.split('-');
    let date = +new Date(+year, month - 1, +day)
    let new_year = +new Date(2024, 0);

    if (date < new_year) {
        p.innerHTML = `Дней осталось до Нового года: ${(new_year - date) / (1000 * 3600 * 24)}`;
    }
    else if (date == new_year) {
        p.innerHTML = 'Ураа, Новый год!';
    }
    else {
        p.innerHTML = `Дней прошло после Нового года: ${(date - new_year) / (1000 * 3600 * 24)}`;
    }

    date_div.style.display = 'none';
    modal_div.style.display = 'block';
}

button.onclick = function() {
    modal_div.style.display = 'none';
    date_div.style.display = 'block';
};

