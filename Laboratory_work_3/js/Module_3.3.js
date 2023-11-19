const api_key = 'OmC7i2tfmsVnm6M7UnYdhemDEOfcmFI3';
const q = 'cat';
const limit = 100;

$(document).ready(() => {
    $.get(`https://api.giphy.com/v1/stickers/search/?q=${q}&limit=${limit}&api_key=${api_key}`, response => {
        $('span').html(q);
        $.each(response.data, (index, sticker) => {
            $('body').append(`<img src="${sticker.images.original.url}" width="25%">`);

        });
    });
});
