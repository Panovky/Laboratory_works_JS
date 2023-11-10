let change = document.querySelector('#change');
let input = document.querySelector('#input');
let body = document.querySelector('body');
let timer_id;

change.onchange = function() {
    clearTimeout(timer_id);
    timer_id = setTimeout(
        () => body.style.backgroundColor = change.value,
        1000
    );
};

input.oninput = function() {
    clearTimeout(timer_id);
    timer_id = setTimeout(
        () => body.style.backgroundColor = input.value,
         1000
    );
};