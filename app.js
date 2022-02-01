// import functions and grab DOM elements
import { renderIngredient } from './utils.js';
const ingredientForm = document.getElementById('ingredientForm');
const ingredientSubmit = document.getElementById('ingredientSubmit');
const ingredientList = document.getElementById('ingredientList');

// let state
let ingredients = [];
let meals = [];

// Display list function
function renderIngredients() {
    ingredientList.innerHTML = '';
    for (let ingredient of ingredients) {
        const li = document.createElement('li');
        li.innerText = renderIngredient(ingredient);
        ingredientList.appendChild(li);
    }
}

// set event listeners 
ingredientSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const ingredientData = new FormData(ingredientForm);
    const ingredient = {
        name: ingredientData.get('ingredient'),
        quantity: Number(ingredientData.get('quantity')),
        units: ingredientData.get('units'),
    };
    ingredients.push(ingredient);
    ingredientForm.reset();
    renderIngredients();
});
  