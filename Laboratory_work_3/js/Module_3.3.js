const api_key = 'OmC7i2tfmsVnm6M7UnYdhemDEOfcmFI3';
const query = 'student';
const limit = 100;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('span').innerHTML = query;

    $.get(`https://api.giphy.com/v1/stickers/search/?q=${query}&limit=${limit}&api_key=${api_key}`, (response, status) => {
        let stickers = response.data;

        if (status != 'success') {
            return;
        }

        stickers.forEach(sticker => {
            let img = document.createElement('img');
            img.src = sticker.images.original.url;
            img.style.width = "25%";
            document.body.append(img);
        });
    });
});

