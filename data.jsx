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
]);

// Adding even more ingredients
currentIngredients.set("garlic", 1);
currentIngredients.set("ginger", 1);
currentIngredients.set("soy sauce", 1);
currentIngredients.set("lime", 1);
currentIngredients.set("cilantro", 1);
currentIngredients.set("spinach", 1);
currentIngredients.set("potato", 1);
currentIngredients.set("sweet corn", 1);
currentIngredients.set("zucchini", 1);
currentIngredients.set("jalapeno", 1);
currentIngredients.set("turmeric", 1);
currentIngredients.set("cumin", 1);
currentIngredients.set("basil", 1);
currentIngredients.set("oregano", 1);
currentIngredients.set("bay leaf", 1);
currentIngredients.set("dill", 1);
currentIngredients.set("parsley", 1);
currentIngredients.set("thyme", 1);
currentIngredients.set("rosemary", 1);
currentIngredients.set("sage", 1);
currentIngredients.set("nutmeg", 1);
currentIngredients.set("cloves", 1);
currentIngredients.set("cardamom", 1);
currentIngredients.set("fennel", 1);
currentIngredients.set("coriander", 1);
currentIngredients.set("mustard seeds", 1);
currentIngredients.set("paprika", 1);
currentIngredients.set("cayenne pepper", 1);
currentIngredients.set("chili powder", 1);
currentIngredients.set("bay leaves", 1);
currentIngredients.set("sesame seeds", 1);
currentIngredients.set("peanut butter", 1);
currentIngredients.set("honey", 1);
currentIngredients.set("vinegar", 1);
currentIngredients.set("sugar", 1);
currentIngredients.set("salt", 1);
currentIngredients.set("black pepper", 1);
currentIngredients.set("white pepper", 1);
currentIngredients.set("soybean oil", 1);
currentIngredients.set("olive oil", 1);
currentIngredients.set("butter", 1);
currentIngredients.set("cream", 1);
currentIngredients.set("cheese", 1);
currentIngredients.set("milk", 1);
currentIngredients.set("yogurt", 1);
currentIngredients.set("egg", 1);
currentIngredients.set("bread", 1);
currentIngredients.set("pasta", 1);
currentIngredients.set("noodles", 1);
currentIngredients.set("flour", 1);
currentIngredients.set("cornstarch", 1);
currentIngredients.set("baking powder", 1);
currentIngredients.set("baking soda", 1);
currentIngredients.set("yeast", 1);
currentIngredients.set("oats", 1);
currentIngredients.set("cocoa powder", 1);
currentIngredients.set("vanilla extract", 1);
currentIngredients.set("coffee", 1);
currentIngredients.set("tea", 1);
currentIngredients.set("almonds", 1);
currentIngredients.set("walnuts", 1);
currentIngredients.set("cashews", 1);
currentIngredients.set("raisins", 1);
currentIngredients.set("dried cranberries", 1);
currentIngredients.set("sunflower seeds", 1);
currentIngredients.set("pumpkin seeds", 1);
currentIngredients.set("salsa", 1);
currentIngredients.set("ketchup", 1);
currentIngredients.set("mayonnaise", 1);
currentIngredients.set("hot sauce", 1);
currentIngredients.set("bbq sauce", 1);
currentIngredients.set("teriyaki sauce", 1);
currentIngredients.set("dijon mustard", 1);
currentIngredients.set("sriracha", 1);

// Adding more diverse ingredients
currentIngredients.set("avocado", 1);
currentIngredients.set("cabbage", 1);
currentIngredients.set("kale", 1);
currentIngredients.set("bell pepper", 1);
currentIngredients.set("lemon", 1);
currentIngredients.set("orange", 1);
currentIngredients.set("apple", 1);
currentIngredients.set("banana", 1);
currentIngredients.set("pear", 1);
currentIngredients.set("grapes", 1);
currentIngredients.set("mango", 1);
currentIngredients.set("pineapple", 1);
currentIngredients.set("strawberries", 1);
currentIngredients.set("blueberries", 1);
currentIngredients.set("raspberries", 1);
currentIngredients.set("kiwi", 1);
currentIngredients.set("pomegranate", 1);
currentIngredients.set("beetroot", 1);
currentIngredients.set("radish", 1);
currentIngredients.set("turnip", 1);
currentIngredients.set("eggplant", 1);
currentIngredients.set("asparagus", 1);
currentIngredients.set("artichoke", 1);
currentIngredients.set("butternut squash", 1);
currentIngredients.set("pumpkin", 1);
currentIngredients.set("chili flakes", 1);
currentIngredients.set("saffron", 1);
currentIngredients.set("miso paste", 1);
currentIngredients.set("tahini", 1);
currentIngredients.set("coconut milk", 1);
currentIngredients.set("coconut flakes", 1);
currentIngredients.set("seaweed", 1);
currentIngredients.set("oyster sauce", 1);
currentIngredients.set("fish sauce", 1);
currentIngredients.set("curry powder", 1);
currentIngredients.set("cinnamon", 1);
currentIngredients.set("maple syrup", 1);
currentIngredients.set("syrup", 1);
currentIngredients.set("chocolate chips", 1);
currentIngredients.set("marshmallows", 1);
currentIngredients.set("graham crackers", 1);

console.log(Array.from(currentIngredients.entries()));

















const recipes = new Map([
    ["chicken_soup", {
        name: "Chicken Soup",
        description: "A comforting chicken soup with vegetables.",
        ingredients: new Map([
            ["chicken", 1],
            ["onion", 1],
            ["carrot", 1],
            ["celery", 1],
            ["pepper", 1],
            ["tomato", 1],
        ]),
        author: {
            name: "Berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: ["Cook chicken", "Add onion, carrot, and celery", "Season with pepper and add tomato", "Simmer until vegetables are tender"]
    }],

    ["chicken_salad", {
        name: "Chicken Salad",
        description: "A refreshing chicken salad with a mix of vegetables.",
        ingredients: new Map([
            ["chicken", 1],
            ["onion", 1],
            ["carrot", 1],
            ["celery", 1],
            ["pepper", 1],
            ["tomato", 1],
        ]),
        author: {
            name: "Berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: ["Cook chicken and shred", "Chop onion, carrot, celery, and tomato", "Mix all ingredients together", "Season with pepper"]
    }],

    ["sushi", {
        name: "Sushi",
        description: "Japanese sushi with fish and vegetables.",
        ingredients: new Map([
            ["fish", 4],
            ["carrot", 1],
            ["cucumber", 1],
            ["sushi rice", 1],
            ["nori", 1],
        ]),
        author: {
            name: "Berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: ["Prepare sushi rice", "Slice fish, carrot, and cucumber", "Assemble sushi rolls with nori", "Slice rolls into pieces"]
    }],

    ["pasta", {
        name: "Pasta",
        description: "Classic pasta with a simple seasoning.",
        ingredients: new Map([
            ["pasta", 1],
            ["salt", 1],
            ["pepper", 1],
            ["olive oil", 1],
        ]),
        author: {
            name: "Berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: ["Cook pasta according to package instructions", "Drain and toss with olive oil", "Season with salt and pepper"]
    }],

    ["pizza", {
        name: "Pizza",
        description: "Homemade pizza with a basic dough and topping.",
        ingredients: new Map([
            ["flour", 2],
            ["salt", 1],
            ["pepper", 1],
            ["olive oil", 1],
            ["tomato sauce", 1],
            ["cheese", 1],
            ["toppings", 1],
        ]),
        author: {
            name: "Berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: ["Prepare dough with flour, salt, and olive oil", "Spread tomato sauce on dough", "Add cheese and toppings", "Bake until crust is golden"]
    }],

    ["cake", {
        name: "Cake",
        description: "A sweet and moist cake for any occasion.",
        ingredients: new Map([
            ["flour", 2],
            ["sugar", 1],
            ["baking powder", 1],
            ["eggs", 2],
            ["butter", 1],
            ["milk", 1],
        ]),
        author: {
            name: "Shmuli",
            avatar: "https://avatars.githubusercontent.com/u/10146773?v=4",
        },
        steps: ["Mix flour, sugar, and baking powder", "Add eggs, melted butter, and milk", "Pour into a baking pan", "Bake until a toothpick comes out clean"]
    }],

    ["cookies", {
        name: "Cookies",
        description: "Delicious homemade cookies with chocolate chips.",
        ingredients: new Map([
            ["flour", 2],
            ["sugar", 1],
            ["butter", 1],
            ["eggs", 1],
            ["chocolate chips", 1],
            ["baking powder", 1],
        ]),
        author: {
            name: "Someone",
            avatar: "https://www.newyorker.com/magazine/profiles",
        },
        steps: ["Cream butter and sugar", "Add eggs and mix well", "Stir in flour, baking powder, and chocolate chips", "Drop spoonfuls onto a baking sheet and bake"]
    }],

    // Additional recipes

    ["beef_stir_fry", {
        name: "Beef Stir Fry",
        description: "A quick and tasty beef stir fry with vegetables.",
        ingredients: new Map([
            ["beef", 1],
            ["bell pepper", 1],
            ["broccoli", 1],
            ["carrot", 1],
            ["soy sauce", 1],
            ["garlic", 1],
            ["ginger", 1],
        ]),
        author: {
            name: "Alex",
            avatar: "https://avatars.githubusercontent.com/u/10234567?v=4",
        },
        steps: ["Slice beef and vegetables", "Stir fry beef until browned", "Add vegetables and cook until tender", "Season with soy sauce, garlic, and ginger"]
    }],

    ["vegetable_curry", {
        name: "Vegetable Curry",
        description: "A rich and flavorful vegetable curry.",
        ingredients: new Map([
            ["potato", 1],
            ["carrot", 1],
            ["peas", 1],
            ["onion", 1],
            ["curry powder", 1],
            ["coconut milk", 1],
            ["cilantro", 1],
        ]),
        author: {
            name: "Jamie",
            avatar: "https://avatars.githubusercontent.com/u/10345678?v=4",
        },
        steps: ["Cook onion until translucent", "Add curry powder and cook briefly", "Add vegetables and coconut milk", "Simmer until vegetables are tender", "Garnish with cilantro"]
    }],

    ["greek_salad", {
        name: "Greek Salad",
        description: "A fresh Greek salad with feta cheese and olives.",
        ingredients: new Map([
            ["cucumber", 1],
            ["tomato", 1],
            ["red onion", 1],
            ["feta cheese", 1],
            ["olives", 1],
            ["olive oil", 1],
            ["oregano", 1],
        ]),
        author: {
            name: "Sophia",
            avatar: "https://avatars.githubusercontent.com/u/10456789?v=4",
        },
        steps: ["Chop cucumber, tomato, and onion", "Mix with feta cheese and olives", "Drizzle with olive oil and sprinkle with oregano"]
    }],

    ["pancakes", {
        name: "Pancakes",
        description: "Fluffy pancakes perfect for breakfast.",
        ingredients: new Map([
            ["flour", 1],
            ["milk", 1],
            ["eggs", 2],
            ["baking powder", 1],
            ["sugar", 1],
            ["butter", 1],
        ]),
        author: {
            name: "Emma",
            avatar: "https://avatars.githubusercontent.com/u/10567890?v=4",
        },
        steps: ["Mix dry ingredients", "Add milk, eggs, and melted butter", "Cook on a griddle until bubbles form", "Flip and cook until golden"]
    }],

    ["lasagna", {
        name: "Lasagna",
        description: "A hearty lasagna with layers of meat, cheese, and pasta.",
        ingredients: new Map([
            ["lasagna noodles", 1],
            ["ground beef", 1],
            ["tomato sauce", 1],
            ["mozzarella cheese", 1],
            ["ricotta cheese", 1],
            ["parmesan cheese", 1],
            ["garlic", 1],
            ["onion", 1],
        ]),
        author: {
            name: "Lucas",
            avatar: "https://avatars.githubusercontent.com/u/10678901?v=4",
        },
        steps: ["Cook ground beef with garlic and onion", "Mix with tomato sauce", "Layer noodles, meat sauce, and cheeses", "Bake until bubbly"]
    }],

    ["chocolate_mousse", {
        name: "Chocolate Mousse",
        description: "A rich and creamy chocolate mousse for dessert.",
        ingredients: new Map([
            ["dark chocolate", 1],
            ["cream", 1],
            ["sugar", 1],
            ["egg yolks", 2],
            ["vanilla extract", 1],
        ]),
        author: {
            name: "Olivia",
            avatar: "https://avatars.githubusercontent.com/u/10789012?v=4",
        },
        steps: ["Melt chocolate and let cool", "Whip cream until stiff", "Mix egg yolks with sugar and vanilla", "Fold chocolate into egg mixture, then fold in cream", "Chill before serving"]
    }],

    ["chocolate_cake", {
        name: "Chocolate Cake", 
        description: "A classic chocolate cake with fudge frosting.",
        ingredients: new Map([
            ["flour", 1],
            ["eggs", 2],
            ["butter", 1],
            ["sugar", 1],
            ["vanilla extract", 1],
            ["chocolate", 1],
        ]),
        author: {
            name: "Liam",
            avatar: "https://avatars.githubusercontent.com/u/10890123?v=4", 
        },
        steps: ["Mix dry ingredients", "Add milk, eggs, and melted butter", "Bake until golden brown", "Cool and frost with chocolate"]
    }],

    ["strawberry_shortcake", {
        name: "Strawberry Shortcake",
        description: "A creamy and delicious strawberry shortcake.",
        ingredients: new Map([
            ["flour", 1],
            ["eggs", 2],
            ["butter", 1],
            ["sugar", 1],
            ["vanilla extract", 1],
            ["strawberries", 1],
        ]),
        author: {
            name: "Noah",
            avatar: "https://avatars.githubusercontent.com/u/10901234?v=4",
        },
        steps: ["Mix dry ingredients", "Add milk, eggs, and melted butter", "Bake until golden brown", "Cool and decorate with strawberries"]
    }],
    ["french_toast", {
        name: "French Toast",
        description: "A simple and delicious breakfast.",
        ingredients: new Map([
            ["bread", 1],
            ["eggs", 2],
            ["milk", 1],
            ["butter", 1],
            ["sugar", 1],
        ]),
        author: {
            name: "Emma",
            avatar: "https://avatars.githubusercontent.com/u/10567890?v=4",
        },
        steps: ["Mix eggs, milk, and sugar", "Soak bread in egg mixture", "Cook until golden brown", "Serve with butter and syrup"]
    }],
    ["chicken_soup", {
        name: "Chicken Soup",
        description: "A comforting chicken soup with vegetables.",
        ingredients: new Map([
            ["chicken", 1],
            ["onion", 1],
            ["carrot", 1],
            ["celery", 1],
            ["pepper", 1],
            ["tomato", 1],
        ]),
        author: {
            name: "Berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: ["Cook chicken", "Add onion, carrot, and celery", "Season with pepper and add tomato", "Simmer until vegetables are tender"]
    }],

    ["chicken_salad", {
        name: "Chicken Salad",
        description: "A refreshing chicken salad with a mix of vegetables.",
        ingredients: new Map([
            ["chicken", 1],
            ["onion", 1],
            ["carrot", 1],
            ["celery", 1],
            ["pepper", 1],
            ["tomato", 1],
        ]),
        author: {
            name: "Berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: ["Cook chicken and shred", "Chop onion, carrot, celery, and tomato", "Mix all ingredients together", "Season with pepper"]
    }],

    ["sushi", {
        name: "Sushi",
        description: "Japanese sushi with fish and vegetables.",
        ingredients: new Map([
            ["fish", 4],
            ["carrot", 1],
            ["cucumber", 1],
            ["sushi rice", 1],
            ["nori", 1],
        ]),
        author: {
            name: "Berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: ["Prepare sushi rice", "Slice fish, carrot, and cucumber", "Assemble sushi rolls with nori", "Slice rolls into pieces"]
    }],

    ["pasta", {
        name: "Pasta",
        description: "Classic pasta with a simple seasoning.",
        ingredients: new Map([
            ["pasta", 1],
            ["salt", 1],
            ["pepper", 1],
            ["olive oil", 1],
        ]),
        author: {
            name: "Berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: ["Cook pasta according to package instructions", "Drain and toss with olive oil", "Season with salt and pepper"]
    }],

    ["caesar_salad", {
        name: "Caesar Salad",
        description: "Classic Caesar salad with homemade dressing.",
        ingredients: new Map([
            ["romaine lettuce", 1],
            ["croutons", 1],
            ["parmesan cheese", 1],
            ["chicken breast", 1],
            ["egg", 1],
            ["garlic", 2],
            ["lemon juice", 1],
            ["olive oil", 1],
            ["worcestershire sauce", 1],
            ["dijon mustard", 1],
            ["anchovy paste", 1],
        ]),
        author: {
            name: "Berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: [
            "Grill chicken breast and slice",
            "Make dressing: blend egg, garlic, lemon juice, olive oil, worcestershire sauce, dijon mustard, and anchovy paste",
            "Toss romaine lettuce with dressing",
            "Add croutons, parmesan cheese, and sliced chicken",
            "Serve immediately"
        ]
    }],

    ["beef_stir_fry", {
        name: "Beef Stir Fry",
        description: "Quick and flavorful beef stir fry with vegetables.",
        ingredients: new Map([
            ["beef sirloin", 1],
            ["bell pepper", 1],
            ["broccoli", 1],
            ["carrot", 1],
            ["onion", 1],
            ["garlic", 2],
            ["ginger", 1],
            ["soy sauce", 1],
            ["sesame oil", 1],
            ["vegetable oil", 1],
            ["cornstarch", 1],
        ]),
        author: {
            name: "Berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: [
            "Slice beef and vegetables",
            "Mix soy sauce, sesame oil, and cornstarch for sauce",
            "Stir-fry beef in vegetable oil until browned",
            "Remove beef, stir-fry vegetables with garlic and ginger",
            "Return beef to pan, add sauce, and cook until thickened",
            "Serve hot with rice"
        ]
    }],

    ["vegetable_lasagna", {
        name: "Vegetable Lasagna",
        description: "Hearty vegetarian lasagna packed with vegetables and cheese.",
        ingredients: new Map([
            ["lasagna noodles", 1],
            ["zucchini", 2],
            ["spinach", 1],
            ["ricotta cheese", 1],
            ["mozzarella cheese", 1],
            ["parmesan cheese", 1],
            ["tomato sauce", 1],
            ["onion", 1],
            ["garlic", 3],
            ["egg", 1],
            ["olive oil", 1],
            ["italian seasoning", 1],
        ]),
        author: {
            name: "Berel",
            avatar: "https://avatars.githubusercontent.com/u/10146743?v=4",
        },
        steps: [
            "Cook lasagna noodles",
            "Sauté zucchini, spinach, onion, and garlic",
            "Mix ricotta, egg, and parmesan",
            "Layer: sauce, noodles, ricotta mix, vegetables, mozzarella",
            "Repeat layers, ending with sauce and mozzarella on top",
            "Bake until bubbly and golden"
        ]
    }]


]);

