/**
 * @type {Map<string, Array<string>>} for each ingredient, it stores a list of recipes that use it
 */
const usesIngredient = new Map()
for (const [recipeName, recipe] of recipes) {
    for (const [ingredientName, ingredient] of recipe.ingredients) {
        if (!usesIngredient.has(ingredientName)) {
            usesIngredient.set(ingredientName, [])
        }
        usesIngredient.get(ingredientName).push(recipeName)
    }
}




function Recipe(recipeName, props) {
    console.log({recipeName, props})
    console.log(props)
    const author = props.author
    return html`
    <div id="${recipeName}" class="recipe ${canMake(props.ingredients) ? "can-make" : "cannot-make"}">
    
        <img src=${`images/${recipeName}.jpeg`} alt="" />

        <section class="auther">
            <img src="${author.avatar}" alt="" />
            <h4>made by ${author.name}</h4>
        </section>

        <div class="non-image">
            <h2>${props.name}</h2>
            <p>${props.description}</p>

            <details>
                <summary>ingredients</summary>
                <ul>
                    /${Array.from(props.ingredients.entries()).map((key, value) => stringClean/*html*/`<li>${key}: ${value}</li>`).join(" ")}
                </ul>
            </details>
            <div class="buttons">
                ${html`<button class="make" ${canMake(props.ingredients) ? "": "disabled"} onclick=${(el, event) => {make(recipeName, props.ingredients); el.component().rerender()}}>make</button>`}
                ${isMaking(recipeName) ? html`<button onclick=${(el, event) => {unmake(recipeName, props.ingredients); el.component().rerender()}}>unmake</button>`: ""}
            </div>

            ${isMaking(recipeName)? html`<p class="info">you are making ${recipesMaking.get(recipeName)} of these</p>`: ""}
        </div>
    </div>
    `
}


function IngredientsMaking() {
    return html`
    <div class="ingredients-making" rerender-with='IngredientsMaking'>
        <h1>these ingredients are being made</h1>
        /${Array.from(recipesMaking.entries()).map((key, value) => {console.log(key, value); return stringClean/*html*/`<span>${key}: ${value}</span>`}).join(" ")}
    </div>
    `
}



function App(){

    return html`
    <main class="App" rerender-with='App' id="root">
        <header onclick="toggleNightMode()">
            
        </header>
        /${CreateRenderGroup("recipeList", recipes, Recipe)}
    </main>
    `
}

ingridiants_making.morphe(IngredientsMaking)
root.morphe(App)