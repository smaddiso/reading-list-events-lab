const handleFormSubmit = function (event) {
  event.preventDefault();
  const newListItem = document.createElement('li');
  newListItem.textContent = `Title: ${event.target.title.value},\r
  Author: ${event.target.author.value},\r
  Category: ${event.target.category.value}`;
  const list = document.querySelector('#reading-list'); //#reading-list
  list.appendChild(newListItem);
  document.querySelector('#new-item-form').reset();
    // console.log(newListItem);
    // console.log(event.target.title.value);
};

const handleButtonClick = function () {
  document.querySelector('#reading-list').innerHTML = '';
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#delete_all');
  button.addEventListener('click', handleButtonClick)

});



// const resultParagraph = document.querySelector('#form-result');
// resultParagraph.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
