//Шеф-повар. Определить иерархию овощей.
//Сделать салат. Посчитать калорийность.
//Провести сортировку овощей для салата на основе одного из параметров.
//Найти овощи в салате, соответствующие заданному диапазону параметров.
class Vegetables {
  constructor(name, calories, amount) {
    this.name = name;
    this.calories = calories;
    this.amount = amount;
  }
}
class RootVegetables extends Vegetables {
  constructor(name, calories, amount) {
    super(name, calories, amount);
    this.sort = "rootVegetable";
    this.caloriesTotal = this.calories * this.amount;
  }
}
class FruitVegetables extends Vegetables {
  constructor(name, calories, amount) {
    super(name, calories, amount);
    this.sort = "fruitVegetable";
    this.caloriesTotal = this.calories * this.amount;
  }
}
class LeafyVegetables extends Vegetables {
  constructor(name, calories, amount) {
    super(name, calories, amount);
    this.sort = "leafyVegetables";
    this.caloriesTotal = this.calories * this.amount;
  }
}
class Salad {
  constructor() {
    this.ingredients = [];
  }

  addVegetables(vegetable) {
    this.ingredients.push(vegetable);
  }
  countCalories() {
    return this.ingredients
      .map((obj) => obj.caloriesTotal)
      .reduce((a, b) => a + b);
  }
  sortByCalories() {
    return this.ingredients.sort((a, b) => a.calories - b.calories);
  }
  findVegetables() {
    return this.ingredients.filter((item) => item.sort === "fruitVegetable");
  }
}
let veryStrangeSalad = new Salad();
veryStrangeSalad.addVegetables(new RootVegetables("potatoes", 200, 2));
veryStrangeSalad.addVegetables(new RootVegetables("beetroot", 185, 1));
veryStrangeSalad.addVegetables(new FruitVegetables("apple", 150, 3));
veryStrangeSalad.addVegetables(new LeafyVegetables("spinach", 50, 1));
console.log(veryStrangeSalad.sortByCalories());
console.log(veryStrangeSalad.findVegetables());

