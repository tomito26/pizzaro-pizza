// business logic
class Pizza{
    constructor(size,crust,topping){
        this.size = size;
        this.crust = crust;
        this.topping = topping
    }
   
}
class Price{
    constructor(pizzaSizePrice,pizzaCrustPrice,pizzaToppingPrice){
        this.pizzaSizePrice = pizzaSizePrice;
        this.pizzaCrustPrice = pizzaCrustPrice;
        this.pizzaToppingPrice = pizzaToppingPrice;
    }
    get totalPrice(){
        return this.pizzaSizePrice + this.pizzaCrustPrice + this.pizzaToppingPrice
    }
}
const pizzaSize = ["small","medium","large"]
const pizzaCrust = ["crispy","stuffed","glutten free"]
const pizzaTopping = ["peperroni","mushrooms","onions","sausage","bacon","extra-cheese","green-pepper"]
const sizePice = [600, 800, 1000];
const crustPrice = [250, 300, 200];
const toppingPrice = [50, 50, 50, 100, 150, 100, 50];
let form = document.getElementById("pizza");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const sizePizza = document.getElementById("size").value;
    const crustPizza = document.getElementById("crust").value;
    const toppingPizza = document.getElementById("topping").value;
    console.log(toppingPizza);

    let sizePizzaOrder = pizzaSize[sizePizza - 1];
    let pizzaCrustOrder = pizzaCrust[crustPizza - 1];
    let pizzaToppingOrder = pizzaTopping[toppingPizza - 1];
    console.log(sizePizzaOrder, pizzaCrustOrder, pizzaToppingOrder);
    let customerOrder = new Pizza(
        sizePizzaOrder,
        pizzaCrustOrder,
        pizzaToppingOrder
    );
    console.log(customerOrder);

    const pizzaSizeOrderCost = sizePice[sizePizza -1]
    const pizzaCrustOrderCost = crustPrice[crustPizza - 1]
    const pizzaToppingOrderCost = toppingPrice[toppingPizza -1]
    console.log(pizzaSizeOrderCost,pizzaCrustOrderCost,pizzaToppingOrderCost,)

    let customerOrderCost = new Price(pizzaSizeOrderCost,pizzaCrustOrderCost,pizzaToppingOrderCost)
    console.log(customerOrderCost,customerOrderCost.totalPrice)
});

