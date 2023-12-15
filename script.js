// Пример функции для расчета времени приготовления рецепта
function calculateCookingTime(recipe, ingredients) {
    let totalTime = 0;
  
    for (let i = 0; i < recipe.steps.length; i++) {
      totalTime += recipe.steps[i].time;
    }
  
    for (let i = 0; i < ingredients.length; i++) {
      if (!recipe.ingredients.includes(ingredients[i])) {
        console.log(`Рецепт не содержит ингредиент: ${ingredients[i]}`);
      }
    }
  
    return totalTime;
  }
  
  // Пример использования функции
  const recipe = {
    name: "Шоколадный торт",
    ingredients: ["шоколад", "мука", "яйца", "сахар", "сливочное масло"],
    steps: [
      { step: "Растопить шоколад и масло", time: 10 },
      { step: "Смешать муку, яйца и сахар", time: 5 },
      { step: "Добавить растопленный шоколад и масло", time: 5 },
      { step: "Выпекать в предварительно разогретой духовке", time: 30 }
    ]
  };
  
  const ingredients = ["мука", "яйца", "сахар", "сливочное масло", "ванильный экстракт"];
  
  const totalTime = calculateCookingTime(recipe, ingredients);
  console.log(`Общее время приготовления: ${totalTime} минут`);
  