$(document).ready(function(){
    $("form#pizza").submit(function(){
        event.preventDefault();
        let pizzasize = $("input:radio[name=pizzasize]:checked").val();
        alert(pizzasize)
        let pizzaCrust = $('#crust').val();
        alert(pizzaCrust)
        let pizzaTopping = [];
        $.each($("input[name=topping]:checked"),function(){
            pizzaTopping.push($(this).val());
        })
        console.log(pizzaTopping.join(','));
        switch(pizzasize){
            case'0':
                price = 0
                break;
            case'small':
               price = 600
               console.log('The price is ' + price)
               break;
            case'medium':
              price = 800
              alert('The price is ' + price)
              break;
            
            case 'large':
                price = 1000
                alert('The price is ' + price)
                break;


        }
       

    });
});