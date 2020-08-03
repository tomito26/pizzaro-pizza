// user interface
$(document).ready(function(){
    $("form#pizza").submit(function(){
        event.preventDefault();
        let pizzasize = parseInt($("input:radio[name=pizzasize]:checked").val());
        // alert(pizzasize)
        let pizzaCrust = parseInt($('#crust').val());
        // console.log(pizzaCrust)
        let pizzaTopping = parseInt($("#topping").val());
        //  alert(pizzaTopping)
        // alert(totalPrice.add())
        let quantity = parseInt($("input#quantity").val());
        // alert(quantity)
        let delivery = $("#delivery").val()
        //  alert(delivery)
    
        
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
        
        if(quantity > 0 && delivery =='Yes'){
            prompt("Enter your location for Delivery")
            alert("Your total price is "  + 'Ksh '+ quantity*(totalPrice.add()) + " and additional delivery cost of Ksh 250")
            alert("Your Pizza will be delivered shortly")
        }
        else if (quantity> 0 && delivery == 'no') {
            alert("Your total cost is " + 'Ksh '+ quantity*(totalPrice.add()))
        }
        
        else{
            alert("Ensure you enter the correct submission")
        }
        
        }); 
    


});
