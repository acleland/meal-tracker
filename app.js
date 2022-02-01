// import functions and grab DOM elements
const ingredientForm = document.getElementById('ingredientForm');
const ingredientSubmit = document.getElementById('ingredientSubmit');

// let state
let ingredients = [];
let meals = [];

// Display list function
function displayIngredients() {
    
}

// set event listeners 
ingredientSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const ingredientData = new FormData(ingredientForm);
    const ingredient = {
        name: ingredientData.get('ingredient'),
        quantity: ingredientData.get('quantity'),
        units: ingredientData.get('units'),
    };
    ingredients.push(ingredient);
    displayIngredients();
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
