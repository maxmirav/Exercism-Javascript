/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime){
    return remainingTime === undefined ? 'You forgot to set the timer.': remainingTime > 0 ? 'Not done, please wait.' : 'Lasagna is done.'; 
}

export function preparationTime(layers, layerPrepTime = 2) {
    return layers.length * layerPrepTime;
}

export function quantities(layers) {
    let noodles = 0;
    let sauce = 0;
    for(let layer of layers){
        if(layer === 'noodles'){
            noodles++;
        }
        if(layer === 'sauce') {
            sauce++;
        }
    }
    return {noodles: noodles * 50, sauce: sauce * 0.2}
}

export function addSecretIngredient(friendsList, myList) {
    let secretIngredient = friendsList[friendsList.length - 1];
    myList.push(secretIngredient);
}

export function scaleRecipe(recipe, noOfServings) {
    let scaledRecipe = {};
    for(let ingredient in recipe) {
        scaledRecipe[ingredient] = recipe[ingredient] * (noOfServings/2);
    }
    return scaledRecipe;
}