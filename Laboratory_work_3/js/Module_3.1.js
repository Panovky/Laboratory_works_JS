const mainModal = document.querySelector('#main-modal');
const btnLookPhotos = document.querySelector('#main-modal button');

const messageModal = document.querySelector('#message-modal');
const btnOK = document.querySelector('#message-modal button');

const carousel = document.querySelector('#carousel');
const carousel_inner = document.querySelector('.carousel-inner');

const backwardBtn = document.querySelector('#backward-btn');

function show_photos(photos) {
    for (let i = 0; i < photos.length; i++) {
        let div = document.createElement('div');
        i == 0 ? div.classList.add('carousel-item', 'active') : div.classList.add('carousel-item');

        let img = document.createElement('img');
        img.src = photos[i].img_src;
        img.classList.add('d-block', 'w-100');

        div.appendChild(img);
        carousel_inner.appendChild(div)
    }

    mainModal.style.display = 'none';
    carousel.style.display = 'block';
    backwardBtn.style.display = 'block';
}

function show_message(message) {
    mainModal.style.display = 'none';
    messageModal.querySelector('p').innerHTML = message;
    messageModal.style.display = 'block';
}

btnLookPhotos.addEventListener('click', () => {
    let date = document.querySelector('[name=date]').value;
    if (!date) {
        show_message('Пожалуйста, выберете дату.');
        return;
    }

    let rover = document.querySelector('[name=rover]').value;
    const key = '6Jgyinyb2GOLr1f1VWZ1w8t1LhaH0oONUUjyQm2B';
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&page=1&api_key=${key}`;

    fetch(url)
        .then(response => {

            if (response.status != 200) {
                show_message(`Что-то пошло не так. Код ошибки: ${response.status}`);
                return;
            }

            response.json()
                .then(result => {
                    let photos = result.photos;
                    photos.length > 0 ? show_photos(photos) : show_message('В этот день марсоход не сделал ни одной фотографии.');
                });
        });
});

btnOK.addEventListener('click', () => {
    messageModal.style.display = 'none';
    mainModal.style.display = 'block';
});

backwardBtn.addEventListener('click', () => {
    document.location.reload();
});