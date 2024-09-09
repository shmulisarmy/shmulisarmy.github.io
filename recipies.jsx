const currentIngredients = new Map([
    ["chicken", 3],
    ["onion", 1],
    ["carrot", 1],
    ["celery", 1],
    ["pepper", 1],
    ["tomato", 1],
    ["rice", 1],
    ["lettuce", 1],
    ["beans", 1],
    ["carrots", 1],
    ["cucumber", 1],
    ["chickpeas", 1],
    ["mushrooms", 1],
    ["peas", 1],
    ["shrimps", 1],
    ["shrimp", 1],
    ["pork", 1],
])




const recipesMaking = new Map()


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
    if (!recipesMaking.has(ingredients)) {
        recipesMaking.set(ingredientsName, 1)
    } else {
        recipesMaking.set(ingredientsName, recipesMaking.get(ingredients) + 1)
    }
    document.querySelector(".ingredients-making").rerender()
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
}


function isMaking(ingredients) {
    return recipesMaking.has(ingredients)
}


const recipes = new Map([
    ["chicken_soup", {
        name: "chicken soup",
        description: "chicken soup description",
        ingredients: new Map([
            ["chicken", 1],
            ["onion", 1],
            ["carrot", 1],
            ["celery", 1],
            ["pepper", 1],
            ["tomato", 1],
        ]),
         auther: {
            name: "berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: ["chicken", "onion", "carrot", "celery", "pepper", "tomato"]
    }],
    
    ["chicken_salad", {
        name: "chicken salad",
        description: "chicken salad description",
        ingredients: new Map([
            ["chicken", 1],
            ["onion", 1],
            ["carrot", 1],
            ["celery", 1],
            ["pepper", 1],
            ["tomato", 1],
        ]),
         auther: {
            name: "berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: ["chicken", "onion", "carrot", "celery", "pepper", "tomato"]
    }],
    
    ["sushi", {
        name: "sushi",
        description: "sushi description",
        ingredients: new Map([
            ["fish", 4],
            ["carrot", 1],
            ["cucumber", 1],
        ]),
         auther: {
            name: "berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: ["fish", "carrot", "cucumber"]
    }],
    
    ["paste", {
        name: "paste",
        description: "paste description",
        ingredients: new Map([
            ["flour", 1],
            ["salt", 1],
            ["pepper", 1],
            ["oil", 1],
        ]),
         auther: {
            name: "berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: ["flour", "salt", "pepper", "oil"]
    }],
    
    ["pizza", {
        name: "pizza",
        description: "pizza description",
        ingredients: new Map([
            ["flour", 1],
            ["salt", 1],
            ["pepper", 1],
            ["oil", 1],
        ]),
        auther: {
            name: "berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
         auther: {
            name: "berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: ["flour", "salt", "pepper", "oil"]
    }],
    
    ["cake", {
        name: "cake",
        description: "cake description",
        ingredients: new Map([
            ["flour", 1],
            ["salt", 1],
            ["pepper", 1],
            ["oil", 1],
        ]),
        auther: {
            name: "shmuli",
            avatar: "https://avatars.githubusercontent.com/u/10146773?v=4",
        },
        steps: ["flour", "salt", "pepper", "oil"]
    }],
    
    ["cookies", {
        name: "cookies",
        description: "cookies description",
        ingredients: new Map([
            ["flour", 1],
            ["salt", 1],
            ["pepper", 1],
            ["oil", 1],
        ]),
        auther: {
            name: "someone",
            avatar: "https://www.google.com/imgres?q=profiles&imgurl=https%3A%2F%2Fmedia.newyorker.com%2Fphotos%2F66d0c5eb0b2def957400e75c%2F4%3A3%2Fw_1600%252Cc_limit%2Fr44775_rd.jpg&imgrefurl=https%3A%2F%2Fwww.newyorker.com%2Fmagazine%2Fprofiles&docid=oKusbZja6il_NM&tbnid=8SqUEGlG_WbwGM&vet=12ahUKEwjOu6DF0bSIAxUPJNAFHW05FkU4ChAzegQIVRAA..i&w=1600&h=1200&hcb=2&ved=2ahUKEwjOu6DF0bSIAxUPJNAFHW05FkU4ChAzegQIVRAA"
        },
        steps: ["flour", "salt", "pepper", "oil"]
    }],
]);


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
    console.log(props.ingredients)
    const auther = props.auther
    return html`
    <div class="recipe ${canMake(props.ingredients) ? "can-make" : "cannot-make"}">
    
        <img src=${`images/${recipeName}.jpeg`} alt="" />

        <section class="auther">
            <img src="${auther.avatar}" alt="" />
            <h4>made by ${auther.name}</h4>
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
                ${html`<button ${canMake(props.ingredients) ? "": "disabled"} onclick=${(el, event) => {make(recipeName, props.ingredients); el.component().RenderMap.rerender()}}>make</button>`}
                ${isMaking(recipeName) ? html`<button onclick=${(el, event) => {unmake(recipeName, props.ingredients); el.component().RenderMap.rerender()}}>unmake</button>`: ""}
            </div>
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

function toggleNightMode() {
    document.body.classList.toggle("night-mode")
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