let button = document.querySelector('button');
let span = document.querySelector('p span');

let cookie = document.cookie;
let click_count;

if (cookie.includes('click_count')) {
    click_count = cookie.split(';').find((pair) => pair.includes('click_count')).split('=')[1];
}
else {
    click_count = '0';
    document.cookie = `click_count=0; max-age=${3600*24*30}`;
}

span.innerHTML = click_count;

button.onclick = function() {
    let click_count = `${parseInt(span.innerHTML) + 1}`;
    span.innerHTML = click_count;
    document.cookie = `click_count=${click_count}; max-age=${3600*24*30}`;
};