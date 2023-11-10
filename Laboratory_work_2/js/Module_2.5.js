let select = document.querySelector('select');
let divs = document.querySelectorAll('div');

select.onchange = function() {
    let category = select.value;

    if (category == 'all-cats') {
        console.log(0);
        divs.forEach(function(div) {
            div.style.display = 'flex';
        });
        return;
    }

    divs.forEach(function(div) {
        if (div.dataset.category == category) {
            div.style.display = 'flex';
        }
        else {
            div.style.display = 'none';
        }
    });
};