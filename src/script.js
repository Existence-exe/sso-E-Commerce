/* Categories section bs */

function toggleCategories() {
    categories_element = document.getElementsByClassName('categories')[0];
    main_element = document.getElementsByClassName('main-page')[0];

    if (categories_element.style.display == 'none') {
        categories_element.style.display = 'block';
        main_element.style.display = 'none';
    } else {
        categories_element.style.display = 'none';
        main_element.style.display = 'grid';
    }
}

document.getElementsByClassName('button-categories')[0].addEventListener('click', toggleCategories);
document.getElementsByClassName('button-home')[0].addEventListener('click', toggleCategories);
document.getElementsByClassName('categories')[0].style.display = 'none';

/* Category underline bs */

buttons = document.getElementsByClassName('button-navbar');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        document.getElementsByClassName('active')[0].classList.remove('active');
        this.classList.add('active');
    });
}

toggleCategories();