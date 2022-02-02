// import functions and grab DOM elements
import { renderIngredient, renderMeal } from './utils.js';
const ingredientForm = document.getElementById('ingredientForm');
const ingredientSubmit = document.getElementById('ingredientSubmit');
const ingredientList = document.getElementById('ingredientList');
const mealList = document.getElementById('mealList');
const mealForm = document.getElementById('mealForm');
const saveSubmit = document.getElementById('saveSubmit');
const removeButton = document.getElementById('removeIngredientButton');


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

function renderMeals() {
    mealList.innerHTML = '';
    for (let meal of meals) {
        const li = document.createElement('li');
        li.innerText = renderMeal(meal);
        mealList.appendChild(li);
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

removeButton.addEventListener('click', () => {
    ingredients.pop();
    renderIngredients();
});
  
saveSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const mealData = new FormData(mealForm);
    const meal = mealData.get('meal');
    meals.push({
        name: meal,
        totalIngredients: ingredients.length
    });
    ingredients = [];
    renderIngredients();
    renderMeals();
    mealForm.reset();
});