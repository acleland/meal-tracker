export function renderIngredient(ingredient) {
    return `${ingredient.quantity} ${ingredient.units} of ${ingredient.name}`;
}

export function renderMeal(meal) {
    return `${meal.name}: ${meal.totalIngredients} ingredients`;
}