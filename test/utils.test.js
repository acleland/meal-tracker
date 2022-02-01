// IMPORT MODULES under test here:
import { renderIngredient, renderMeal } from '../utils.js';


const test = QUnit.test;

test('test renderIngredient', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '4 Cups of Sugar';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderIngredient({ name: 'Sugar', quantity: 4, units: 'Cups' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test renderMeal', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'Pancakes: 8 ingredients';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMeal({ name: 'Pancakes', totalIngredients: 8 });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
