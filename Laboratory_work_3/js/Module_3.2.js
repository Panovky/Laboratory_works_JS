const mainModal = document.querySelector('#main-modal');
mainModal.style.display = 'flex';
const searchInput = document.querySelector('[name=search]');
const messageModal = document.querySelector('#message-modal');
const messageP = document.querySelector('#message');
const btnMessage = document.querySelector('#btn-message');

function get_html_recipe(recipe_obj) {
    let recipe = document.createElement('div');
    recipe.classList.add('recipe');

    let title = document.createElement('p');
    title.classList.add('recipe-title');
    title.innerHTML = recipe_obj.title;

    let img = document.createElement('img');
    img.classList.add('recipe-img');
    img.src = recipe_obj.image;

    recipe.appendChild(title);
    recipe.appendChild(img);

    return recipe;
}

function show_message(message) {
    mainModal.style.display = 'none';
    messageP.innerHTML = message;
    messageModal.style.display = 'block';
}

btnMessage.addEventListener('click', () => {
    messageModal.style.display = 'none';
    mainModal.style.display = 'flex';
})

searchInput.addEventListener('change', () => {
    const key = 'ad9d42f2c1af4283a06241901f4c9565';
    let query = searchInput.value.trim();
    let url = `https://api.spoonacular.com/recipes/complexSearch?number=20&apiKey=${key}`
    if (query) {
        url += `&query=${query}`;
    }

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = function () {
        if (xhr.status != 200) {
            show_message(`Что-то пошло не так. Код ошибки: ${xhr.status}`);
            return;
        }

        document.body.removeChild(document.querySelector('#recipe-modal'));
        let recipeModal = document.createElement('div');
        recipeModal.id = 'recipe-modal';
        recipeModal.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'flex-wrap');

        let recipes = JSON.parse(xhr.response).results;
        recipes.forEach(recipe => recipeModal.appendChild(get_html_recipe(recipe)));
        document.body.appendChild(recipeModal);
    };

    xhr.onerror = function () {
        show_message('Не удалось выполнить запрос.');
    };
});


