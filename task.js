class Product {
    constructor(title, calories) {
        this.title = title;
        this.calories = calories;
    }
}

class Dish {
    constructor(title) {
        this.title = title;
        this.products = [];
        this.calories = 0;
    }

    addProduct(product, weight) {
        this.weight = weight;
        this.product = product;
        this.productObject = {
            product: this.product,
            weight: this.weight
        };
        this.products.push(this.productObject);
    }

    getDishCalories() {
        const dishCaloriesArray = [];
        for (let items of this.products) {
            let productWeight = items.weight;
            for (let item in items) {
                if (item === 'product') {
                    let productCal = items[item].calories;
                    let currentCal = productCal * productWeight / 100;
                    dishCaloriesArray.push(currentCal);
                }
            }
        }
        let dishCalories = 0;
        for (let i = 0; i < dishCaloriesArray.length; i++) {
            dishCalories += dishCaloriesArray[i];
        }
        this.calories += dishCalories;
        return this.calories;
    }
}

class CaloriesCalculator {
    constructor() {
        this.dishes = [];
    }

    addDish(dish) {
        this.dish = dish;
        this.dishes.push(this.dish);
    }

    getTotalCalories() {
        const totalCaloriesArray = [];
        for (let items of this.dishes) {
            let calories = items.calories;
            totalCaloriesArray.push(calories);
        }
        let caloriesSum = 0;
        for (let i = 0; i < totalCaloriesArray.length; i++) {
            caloriesSum += totalCaloriesArray[i];
        }
        return 'Total ' + caloriesSum + ' calories';
    }

    getAllDishesInfo() {
        const dishInfoArray = [];
        for (let items of this.dishes) {
            let dishName = items.title;
            let dishCalories = items.calories;
            let dishInfo = dishName + ' 1 portion, ' + dishCalories + ' ccal' + '\n';
            dishInfoArray.push(dishInfo);
            let products = items.products;
            for (let product of products) {
                let productWeight = product.weight;
                for (let items in product) {
                    if (items === 'product') {
                        let productName = product[items].title;
                        let productInfo = '--' + productName + ',' + productWeight + 'g' + '\n';
                        dishInfoArray.push(productInfo);
                    }
                }
            }
        }
        let totalDishInfo = '';
        for (let item of dishInfoArray) {
            totalDishInfo += item;
        }
        return totalDishInfo;
    }
}

const meat = new Product('Beef', 158);
const rice = new Product('Rice', 130);
const onion = new Product('Onion', 40);
const carrot = new Product('Carrot', 41);
const pepper = new Product('Pepper', 10);
const noodles = new Product('Noodles', 138);

const plov = new Dish('Plov');
plov.addProduct(meat, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);
plov.getDishCalories();

const lagman = new Dish('Lagman');
lagman.addProduct(meat, 120);
lagman.addProduct(onion, 70);
lagman.addProduct(carrot, 30);
lagman.addProduct(pepper, 80);
lagman.addProduct(noodles, 200);
lagman.getDishCalories();

const calculator = new CaloriesCalculator();
calculator.addDish(plov);
calculator.addDish(lagman);

const calories = calculator.getTotalCalories();
console.log(calories);

const totals = calculator.getAllDishesInfo();
console.log(totals);