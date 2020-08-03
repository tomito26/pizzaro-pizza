
$(document).ready(function(){
    $("form#pizza").submit(function(){
        event.preventDefault();
        let pizzasize = $("input:radio[name=pizzasize]:checked").val();
        alert(pizzasize)
        let pizzaCrust = $('#crust').val();
        alert(pizzaCrust)
        let pizzaTopping = $("input:radio[name=topping]:checked").val();
        alert(pizzaTopping)
        
    
        
      

        

    });


});
