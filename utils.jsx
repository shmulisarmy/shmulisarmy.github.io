const recipesMaking = new Map([
    ['chicken_soup', 4],
    ['chicken_salad', 3],
    ['sushi', 2],
])

console.log(Array.from(recipesMaking));


function toggleNightMode() {
    document.body.classList.toggle("night-mode")
}



function canMake(ingredients) {
    for (const [key, value] of ingredients) {
        if (!(currentIngredients.has(key))) {
            return false
        }
        if (currentIngredients.get(key) < value) {
            return false
        }
    }
    return true
}

function make(ingredientsName, ingredients) {
    for (const [key, value] of ingredients) {
        currentIngredients.set(key, currentIngredients.get(key) - value)
    }
    if (!recipesMaking.has(ingredientsName)) {
        recipesMaking.set(ingredientsName, 1)
    } else {
        recipesMaking.set(ingredientsName, recipesMaking.get(ingredientsName) + 1)
    }
    document.querySelector(".ingredients-making").rerender()
    recalculateCanMake(ingredients)
}

function unmake(ingredientsName, ingredients) {
    for (const [key, value] of ingredients) {
        currentIngredients.set(key, currentIngredients.get(key) + value)
    }
    if (recipesMaking.has(ingredientsName)) {
        if (recipesMaking.get(ingredientsName) > 1) {
            recipesMaking.set(ingredientsName, recipesMaking.get(ingredientsName) - 1)
        } else {
            recipesMaking.delete(ingredientsName)
        }
    } else {
        throw new Error("your un-making a recipe that you werent making wich should be possible")
    }
    document.querySelector(".ingredients-making").rerender()
    recalculateCanMake(ingredients)
}

/**
 * 
 * @param {Map<string, number>} ingredients 
 */
function recalculateCanMake(ingredients){
    for (const [recipeName, recipe] of Array.from(recipes)){
        if (canMake(recipe.ingredients)){
            const recipieElement = document.querySelector(`#${recipeName}`)
            const makeButton = recipieElement.querySelector("button.make")
            makeButton.disabled = false
        } else {
            const recipieElement = document.querySelector(`#${recipeName}`)
            const makeButton = recipieElement.querySelector("button.make")
            makeButton.disabled = true
        }
    }
}


function isMaking(ingredients) {
    return recipesMaking.has(ingredients)
}