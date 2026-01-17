// src/data/dishes.js
// ✅ VEG-ONLY + FULL RECIPES + PREMIUM AI VIDEO LOCK (Ready to paste)

export const dishes = [
  // =========================
  // 🌏 ASIA (VEG)
  // =========================

  {
    slug: "pad-thai-veg",
    name: "Pad Thai (Veg)",
    continent: "asia",
    country: "Thailand",
    time: "20-30 mins",
    servings: "2",
    ingredients: [
      "Rice noodles",
      "Tofu",
      "Tamarind paste",
      "Soy sauce",
      "Brown sugar/jaggery",
      "Garlic",
      "Bean sprouts",
      "Peanuts",
      "Spring onion",
      "Lime",
      "Chili flakes (optional)",
    ],
    taste: ["Sweet", "Tangy", "Savory"],
    rating: 4.5,
    intro:
      "Veg Pad Thai is Thailand’s iconic stir-fried noodle dish made with tangy tamarind sauce, tofu, peanuts, and crunchy veggies.",

    recipe: {
      prepTime: "10 mins",
      cookTime: "12-15 mins",
      totalTime: "25 mins",
      difficulty: "Easy",
      steps: [
        "Soak rice noodles in warm water for 8–10 minutes until soft, then drain.",
        "Mix sauce: tamarind paste + soy sauce + a little sugar + water. Keep aside.",
        "Heat a pan on high flame, add garlic and tofu. Stir-fry until tofu turns slightly golden.",
        "Add drained noodles and pour the sauce. Toss quickly on high heat.",
        "Add bean sprouts and spring onion, cook for 30–45 seconds.",
        "Serve hot with crushed peanuts, lime juice, and chili flakes if you like spice.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 199,
      currency: "INR",
      previewText:
        "🔒 AI cooking video is premium. Unlock to watch full step-by-step visuals + plating shots.",
    },
  },

  {
    slug: "bibimbap-veg",
    name: "Bibimbap (Veg)",
    continent: "asia",
    country: "South Korea",
    time: "30-45 mins",
    servings: "1-2",
    ingredients: [
      "Cooked rice",
      "Carrot",
      "Spinach",
      "Cucumber",
      "Mushrooms",
      "Sesame oil",
      "Soy sauce",
      "Gochujang (Korean chili paste)",
      "Garlic",
      "Sesame seeds",
      "Egg (optional)",
    ],
    taste: ["Savory", "Spicy", "Balanced"],
    rating: 4.6,
    intro:
      "Veg Bibimbap is a colorful Korean rice bowl topped with sautéed vegetables and spicy gochujang sauce, mixed together for a perfect bite.",

    recipe: {
      prepTime: "15 mins",
      cookTime: "15-20 mins",
      totalTime: "35 mins",
      difficulty: "Easy",
      steps: [
        "Cook rice and keep warm.",
        "Slice vegetables into thin strips (carrot, cucumber, mushrooms).",
        "Sauté carrots for 2 minutes with a little oil and salt.",
        "Sauté mushrooms with garlic + soy sauce for 2–3 minutes.",
        "Blanch spinach for 1 minute, then toss with sesame oil + sesame seeds.",
        "In a bowl, add rice at the base, arrange veggies on top in sections.",
        "Add a spoon of gochujang and a drizzle of sesame oil. Top with egg if using.",
        "Mix everything and eat hot for best flavor.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 199,
      currency: "INR",
      previewText:
        "🔒 Unlock premium AI video for authentic Korean plating + mixing ASMR shots.",
    },
  },

  {
    slug: "veg-dumplings",
    name: "Veg Dumplings",
    continent: "asia",
    country: "China",
    time: "35-50 mins",
    servings: "2-4",
    ingredients: [
      "Dumpling wrappers",
      "Cabbage",
      "Carrot",
      "Spring onion",
      "Garlic",
      "Ginger",
      "Soy sauce",
      "Black pepper",
      "Sesame oil",
      "Cornflour (optional)",
    ],
    taste: ["Savory", "Juicy", "Umami"],
    rating: 4.4,
    intro:
      "Veg dumplings are soft wrappers filled with a flavorful veggie mix, steamed to perfection and served with spicy dipping sauce.",

    recipe: {
      prepTime: "20 mins",
      cookTime: "12-15 mins",
      totalTime: "40 mins",
      difficulty: "Medium",
      steps: [
        "Finely chop cabbage, carrot, spring onion. Squeeze excess water from cabbage.",
        "Mix veggies with ginger-garlic, soy sauce, pepper, sesame oil (add cornflour to bind if needed).",
        "Place a spoon of filling in wrapper, seal edges with water and pleat tightly.",
        "Steam dumplings for 10–12 minutes until wrappers turn glossy.",
        "Serve hot with soy-vinegar-chili dip.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 149,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video to learn perfect dumpling folding + steaming visuals.",
    },
  },

  // =========================
  // 🌍 EUROPE (VEG)
  // =========================

  {
    slug: "pizza-margherita",
    name: "Pizza Margherita",
    continent: "europe",
    country: "Italy",
    time: "25-40 mins",
    servings: "2-3",
    ingredients: [
      "Pizza base/dough",
      "Tomato sauce",
      "Mozzarella",
      "Basil",
      "Olive oil",
      "Salt",
      "Oregano (optional)",
    ],
    taste: ["Cheesy", "Fresh", "Savory"],
    rating: 4.5,
    intro:
      "Pizza Margherita is a classic Italian pizza with tomato sauce, mozzarella, and fresh basil—simple, iconic, and delicious.",

    recipe: {
      prepTime: "10 mins",
      cookTime: "12-15 mins",
      totalTime: "25 mins",
      difficulty: "Easy",
      steps: [
        "Preheat oven to maximum temperature (220–250°C).",
        "Spread tomato sauce evenly on pizza base.",
        "Add mozzarella pieces evenly across the base.",
        "Drizzle olive oil and sprinkle salt/oregano lightly.",
        "Bake for 12–15 minutes until cheese bubbles and edges turn golden.",
        "Top with fresh basil after baking and serve hot.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 249,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for pizza stretch technique + melt shots + slice pull visuals.",
    },
  },

  {
    slug: "ratatouille",
    name: "Ratatouille",
    continent: "europe",
    country: "France",
    time: "45-70 mins",
    servings: "2-4",
    ingredients: [
      "Eggplant",
      "Zucchini",
      "Tomatoes",
      "Bell peppers",
      "Onion",
      "Garlic",
      "Olive oil",
      "Salt",
      "Black pepper",
      "Herbs (thyme/oregano)",
    ],
    taste: ["Herby", "Fresh", "Light"],
    rating: 4.7,
    intro:
      "Ratatouille is a French veggie stew packed with olive oil, herbs, and slow-cooked vegetables, making it healthy and comforting.",

    recipe: {
      prepTime: "15 mins",
      cookTime: "35-45 mins",
      totalTime: "60 mins",
      difficulty: "Easy",
      steps: [
        "Chop eggplant, zucchini, peppers, and tomatoes into small chunks.",
        "Heat olive oil in a pot. Sauté onion + garlic until soft.",
        "Add bell peppers and cook 3–4 minutes.",
        "Add eggplant + zucchini, cook 8–10 minutes stirring occasionally.",
        "Add tomatoes, salt, pepper, herbs. Cover and simmer 20–25 minutes.",
        "Finish with extra olive oil and herbs. Serve with bread/rice/pasta.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 199,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for cinematic veggie slicing + simmer shots + plating ASMR.",
    },
  },

  {
    slug: "greek-salad",
    name: "Greek Salad",
    continent: "europe",
    country: "Greece",
    time: "10-15 mins",
    servings: "2",
    ingredients: [
      "Tomatoes",
      "Cucumber",
      "Onion",
      "Olives",
      "Feta cheese",
      "Olive oil",
      "Oregano",
      "Salt",
      "Black pepper",
      "Lemon (optional)",
    ],
    taste: ["Fresh", "Salty", "Tangy"],
    rating: 4.8,
    intro:
      "Greek salad is a fresh, crunchy mix of vegetables with feta and olive oil—light, healthy, and perfect for hot days.",

    recipe: {
      prepTime: "10 mins",
      cookTime: "0 mins",
      totalTime: "10 mins",
      difficulty: "Easy",
      steps: [
        "Chop tomatoes, cucumber, and onion into bite-sized pieces.",
        "Add olives and feta cubes on top.",
        "Drizzle olive oil, sprinkle oregano, salt, and pepper.",
        "Toss gently and serve chilled or fresh.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 99,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for crispy salad aesthetics + plating + dressing drizzle shots.",
    },
  },

  {
    slug: "pierogi-veg",
    name: "Pierogi (Potato & Cheese)",
    continent: "europe",
    country: "Poland",
    time: "45-80 mins",
    servings: "3-5",
    ingredients: [
      "Flour",
      "Boiled potatoes",
      "Cheese (paneer/cottage cheese)",
      "Onion",
      "Salt",
      "Black pepper",
      "Butter",
      "Water",
    ],
    taste: ["Soft", "Savory", "Comforting"],
    rating: 4.4,
    intro:
      "Pierogi are Polish dumplings filled with potato and cheese, boiled and pan-fried for a soft and crispy comfort meal.",

    recipe: {
      prepTime: "25 mins",
      cookTime: "20 mins",
      totalTime: "50 mins",
      difficulty: "Medium",
      steps: [
        "Make dough: mix flour + salt + water to form smooth soft dough. Rest 15 minutes.",
        "Mash potatoes, mix with cheese, salt, pepper. Add sautéed onions for extra flavor.",
        "Roll dough thin and cut circles.",
        "Fill each circle with potato-cheese mixture and seal well.",
        "Boil pierogi until they float (2–3 mins).",
        "Pan-fry in butter with onions until golden (optional but recommended).",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 199,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for dough rolling + dumpling sealing + buttery fry shots.",
    },
  },

  {
    slug: "croissant",
    name: "Croissant",
    continent: "europe",
    country: "France",
    time: "3-5 hrs",
    servings: "4-8",
    ingredients: ["Flour", "Butter", "Yeast", "Milk", "Sugar", "Salt"],
    taste: ["Buttery", "Flaky", "Light"],
    rating: 4.3,
    intro:
      "Croissants are flaky French pastries made with layered buttery dough—crispy outside, airy inside.",

    recipe: {
      prepTime: "2 hrs",
      cookTime: "18-22 mins",
      totalTime: "3-5 hrs",
      difficulty: "Hard",
      steps: [
        "Prepare yeast dough and chill it for at least 45 minutes.",
        "Roll dough and fold butter inside (lamination).",
        "Fold and chill the dough multiple times to create layers.",
        "Shape croissants and proof until puffy.",
        "Bake at 190–200°C until golden and flaky.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 299,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for perfect lamination layers + bakery-style croissant shots.",
    },
  },

  // =========================
  // 🌍 AFRICA (VEG / VEG VERSION)
  // =========================

  {
    slug: "koshari",
    name: "Koshari",
    continent: "africa",
    country: "Egypt",
    time: "45-70 mins",
    servings: "3-5",
    ingredients: [
      "Rice",
      "Lentils",
      "Pasta",
      "Tomato sauce",
      "Onions",
      "Garlic",
      "Vinegar",
      "Cumin",
      "Salt",
      "Chili (optional)",
    ],
    taste: ["Tangy", "Savory", "Filling"],
    rating: 4.7,
    intro:
      "Koshari is Egypt’s famous comfort bowl combining rice, lentils, pasta, tomato sauce, and crispy onions.",

    recipe: {
      prepTime: "15 mins",
      cookTime: "35-40 mins",
      totalTime: "55 mins",
      difficulty: "Easy",
      steps: [
        "Cook lentils until soft and keep aside.",
        "Cook rice separately and keep warm.",
        "Boil pasta and drain.",
        "Make tomato sauce with garlic, cumin, salt, and a splash of vinegar.",
        "Fry onions until crispy and golden.",
        "Assemble: rice + lentils + pasta + tomato sauce + crispy onions on top.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 149,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for crunchy onion fry + perfect layering + sauce pour shots.",
    },
  },

  {
    slug: "jollof-rice-veg",
    name: "Jollof Rice (Veg Version)",
    continent: "africa",
    country: "West Africa",
    time: "40-60 mins",
    servings: "3-5",
    ingredients: [
      "Rice",
      "Tomato puree",
      "Onion",
      "Bell pepper",
      "Garlic",
      "Spices",
      "Vegetable stock/water",
      "Oil",
      "Salt",
    ],
    taste: ["Smoky", "Spiced", "Savory"],
    rating: 4.4,
    intro:
      "Veg Jollof Rice is a bold one-pot tomato rice dish packed with spices and that signature smoky flavor.",

    recipe: {
      prepTime: "10 mins",
      cookTime: "30-35 mins",
      totalTime: "45 mins",
      difficulty: "Easy",
      steps: [
        "Blend tomatoes + onion + bell pepper into puree.",
        "Cook puree in oil until it thickens and turns deep red.",
        "Add spices and salt, stir for 1 minute.",
        "Add washed rice and mix well.",
        "Add stock/water and cook covered on low flame until rice is done.",
        "Rest 5 minutes and fluff rice before serving.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 149,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for smoky one-pot technique + rice texture closeups.",
    },
  },

  {
    slug: "bunny-chow-veg",
    name: "Bunny Chow (Veg Curry)",
    continent: "africa",
    country: "South Africa",
    time: "35-55 mins",
    servings: "2-3",
    ingredients: [
      "Bread loaf",
      "Potato",
      "Chickpeas",
      "Onion",
      "Tomato",
      "Curry spices",
      "Garlic",
      "Salt",
      "Oil",
    ],
    taste: ["Spicy", "Hearty", "Savory"],
    rating: 4.2,
    intro:
      "Veg Bunny Chow is a street-style curry served inside a hollowed bread loaf—filling, spicy, and fun to eat.",

    recipe: {
      prepTime: "10 mins",
      cookTime: "25-30 mins",
      totalTime: "40 mins",
      difficulty: "Easy",
      steps: [
        "Sauté onion + garlic in oil until golden.",
        "Add tomatoes + curry spices and cook until oil separates.",
        "Add potatoes + chickpeas + water, simmer until potatoes soften.",
        "Cut bread loaf top and hollow the center.",
        "Fill hot curry into bread bowl and serve immediately.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 129,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for bread bowl carving + curry filling pour shots.",
    },
  },

  // =========================
  // 🌎 NORTH AMERICA (VEG)
  // =========================

  {
    slug: "mac-and-cheese",
    name: "Mac & Cheese",
    continent: "north-america",
    country: "USA",
    time: "20-35 mins",
    servings: "2-4",
    ingredients: [
      "Macaroni pasta",
      "Cheddar cheese",
      "Milk",
      "Butter",
      "Flour",
      "Salt",
      "Black pepper",
      "Chili flakes (optional)",
    ],
    taste: ["Cheesy", "Creamy", "Comforting"],
    rating: 4.2,
    intro:
      "Mac & Cheese is creamy pasta loaded with cheese sauce—classic comfort food and super satisfying.",

    recipe: {
      prepTime: "5 mins",
      cookTime: "15-20 mins",
      totalTime: "25 mins",
      difficulty: "Easy",
      steps: [
        "Boil macaroni until al dente and drain.",
        "Make roux: melt butter, add flour, cook 30 seconds.",
        "Add milk slowly and whisk until smooth.",
        "Add cheese and stir until melted.",
        "Mix macaroni into sauce. Season with salt and pepper.",
        "Serve hot (bake optional for crispy top).",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 129,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for cheese-pull + creamy sauce closeup visuals.",
    },
  },

  {
    slug: "burrito-bowl-veg",
    name: "Burrito Bowl (Veg)",
    continent: "north-america",
    country: "Mexico/USA",
    time: "20-30 mins",
    servings: "1-2",
    ingredients: [
      "Rice",
      "Beans",
      "Corn",
      "Salsa",
      "Avocado",
      "Onion",
      "Lettuce",
      "Cheese (optional)",
      "Lime",
      "Salt",
    ],
    taste: ["Fresh", "Savory", "Customizable"],
    rating: 4.4,
    intro:
      "Veg burrito bowl is a fresh customizable meal with rice, beans, salsa, and toppings—healthy and filling.",

    recipe: {
      prepTime: "10 mins",
      cookTime: "10-12 mins",
      totalTime: "22 mins",
      difficulty: "Easy",
      steps: [
        "Cook rice and keep aside.",
        "Warm beans with spices (optional).",
        "Chop lettuce, onion and prepare salsa.",
        "Assemble bowl: rice + beans + corn + salsa + lettuce.",
        "Top with avocado, lime juice, and cheese if using.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 99,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for aesthetic bowl assembly + topping shots.",
    },
  },

  {
    slug: "poutine-veg",
    name: "Poutine (Veg Gravy)",
    continent: "north-america",
    country: "Canada",
    time: "25-45 mins",
    servings: "1-3",
    ingredients: [
      "Fries",
      "Cheese curds (or mozzarella cubes)",
      "Veg gravy (mushroom/onion)",
      "Salt",
      "Black pepper",
    ],
    taste: ["Salty", "Cheesy", "Comforting"],
    rating: 4.1,
    intro:
      "Veg Poutine is Canada’s famous fries topped with cheese curds and hot vegetarian gravy—messy, warm, and addictive.",

    recipe: {
      prepTime: "10 mins",
      cookTime: "15-20 mins",
      totalTime: "30 mins",
      difficulty: "Easy",
      steps: [
        "Cook fries until crispy (air-fry or deep-fry).",
        "Prepare veg gravy: sauté onion/mushrooms, add stock + thicken lightly.",
        "Place fries on plate, add cheese curds/cubes.",
        "Pour hot gravy on top and serve immediately.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 129,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for gravy pour + melty cheese closeups.",
    },
  },

  // =========================
  // 🌎 SOUTH AMERICA (VEG)
  // =========================

  {
    slug: "arepas-veg",
    name: "Arepas (Veg Filling)",
    continent: "south-america",
    country: "Venezuela/Colombia",
    time: "20-35 mins",
    servings: "2-4",
    ingredients: [
      "Cornmeal",
      "Water",
      "Salt",
      "Cheese",
      "Avocado",
      "Beans (optional)",
      "Butter/oil",
    ],
    taste: ["Savory", "Crispy", "Soft inside"],
    rating: 4.5,
    intro:
      "Arepas are cornmeal cakes grilled until crisp, then stuffed with cheese, avocado, or beans for a hearty veg meal.",

    recipe: {
      prepTime: "10 mins",
      cookTime: "12-15 mins",
      totalTime: "25 mins",
      difficulty: "Easy",
      steps: [
        "Mix cornmeal + salt + warm water into a soft dough. Rest 5 minutes.",
        "Shape thick discs and cook on a pan 4–5 minutes per side.",
        "Optional: finish in oven 5 minutes for fluffy interior.",
        "Slice open and fill with cheese, avocado, beans, or veggies.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 129,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for perfect arepa shaping + stuffing shots.",
    },
  },

  {
    slug: "empanadas-veg",
    name: "Empanadas (Veg)",
    continent: "south-america",
    country: "Argentina",
    time: "45-90 mins",
    servings: "4-8",
    ingredients: [
      "Empanada dough",
      "Onion",
      "Capsicum",
      "Corn",
      "Cheese",
      "Garlic",
      "Salt",
      "Black pepper",
      "Chili flakes (optional)",
    ],
    taste: ["Savory", "Flaky", "Comforting"],
    rating: 4.3,
    intro:
      "Veg empanadas are stuffed pastry pockets filled with veggies and cheese, baked until golden and crispy.",

    recipe: {
      prepTime: "20 mins",
      cookTime: "20-25 mins",
      totalTime: "45 mins",
      difficulty: "Medium",
      steps: [
        "Sauté onion + capsicum until soft, add corn, salt and pepper.",
        "Cool mixture and add cheese.",
        "Fill dough circles with mixture and seal edges.",
        "Bake at 200°C for 20–25 minutes until golden.",
        "Serve hot with dip or salsa.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 149,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for empanada sealing technique + crisp bake shots.",
    },
  },

  // =========================
  // 🌊 OCEANIA (DESSERTS / VEG)
  // =========================

  {
    slug: "pavlova",
    name: "Pavlova",
    continent: "oceania",
    country: "Australia/New Zealand",
    time: "60-90 mins",
    servings: "4-8",
    ingredients: [
      "Egg whites",
      "Sugar",
      "Cornstarch",
      "Vinegar",
      "Whipping cream",
      "Fresh fruits",
    ],
    taste: ["Sweet", "Light", "Creamy"],
    rating: 4.6,
    intro:
      "Pavlova is a light dessert with crisp meringue outside and soft center, topped with cream and fresh fruits.",

    recipe: {
      prepTime: "15 mins",
      cookTime: "60 mins",
      totalTime: "75 mins",
      difficulty: "Medium",
      steps: [
        "Whisk egg whites until stiff peaks form.",
        "Gradually add sugar and whisk until glossy.",
        "Fold in cornstarch and vinegar gently.",
        "Bake at 120°C for 60 minutes. Cool in oven with door slightly open.",
        "Top with whipped cream and fruits before serving.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 199,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for glossy meringue peaks + fruit topping aesthetics.",
    },
  },

  {
    slug: "lamingtons",
    name: "Lamingtons",
    continent: "oceania",
    country: "Australia",
    time: "45-70 mins",
    servings: "6-12",
    ingredients: [
      "Sponge cake",
      "Chocolate",
      "Coconut",
      "Butter",
      "Sugar",
      "Milk",
    ],
    taste: ["Sweet", "Chocolatey", "Soft"],
    rating: 4.3,
    intro:
      "Lamingtons are sponge cake squares dipped in chocolate and coated with coconut, a classic Aussie sweet snack.",

    recipe: {
      prepTime: "20 mins",
      cookTime: "25-30 mins",
      totalTime: "55 mins",
      difficulty: "Medium",
      steps: [
        "Bake or use sponge cake and cut into equal squares.",
        "Prepare chocolate coating by melting chocolate with butter and milk.",
        "Dip cake squares in chocolate and coat with coconut immediately.",
        "Set on rack and let them rest 15 minutes before serving.",
      ],
    },

    premiumVideo: {
      isPremium: true,
      price: 149,
      currency: "INR",
      previewText:
        "🔒 Unlock AI video for chocolate dip + coconut coating ASMR shots.",
    },
  },
];
