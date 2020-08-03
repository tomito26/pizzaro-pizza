// user interface
$(document).ready(function(){
    $("form#pizza").submit(function(){
        event.preventDefault();
        let pizzasize = parseInt($("input:radio[name=pizzasize]:checked").val());
        // alert(pizzasize)
        let pizzaCrust = parseInt($('#crust').val());
        //  alert(pizzaCrust)
        let pizzaTopping = parseInt($("input:radio[name=topping]:checked").val());
        // alert(pizzaTopping)
        // alert(totalPrice.add())
        let quantity = $("input#quantity").val()
        // alert(quantity)
        let 
    
        
    //   business logic
        function Price(pizzasize,pizzaCrust,pizzaTopping){
            this.pizzasize = pizzasize
            this.pizzaCrust = pizzaCrust
            this.pizzaTopping = pizzaTopping
        }
        let totalPrice = new Price(pizzasize,pizzaCrust,pizzaTopping);
        Price.prototype.add = function(){
            return this.pizzaTopping + this.pizzasize + this.pizzaCrust
        }
        if(quantity > 0){
         alert("Your total price is "  + quantity*(totalPrice.add()))
        }
        else {
            alert("Ensure you enter the quantity before submission")
        }
        
        }); 
    


});
