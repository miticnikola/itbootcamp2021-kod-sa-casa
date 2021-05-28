let listItems = document.querySelectorAll('li');

listItems.forEach(listItem => {
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('line-through');
    });
});