$(document).ready(function(){
    $("form#pizza").submit(function(){
        event.preventDefault();
        let pizzasize = $("input:radio[name=pizzasize]:checked").val();
        // alert(pizzasize)
        let pizzaCrust = $('#crust').val();
        // alert(pizzaCrust)
        let pizzaTopping = [];
        $.each($("input[name=topping]:checked"),function(){
            pizzaTopping.push($(this).val());
        })
        console.log(pizzaTopping.join(','));
        if (pizzasize === 'small'){
          price = 600
          console.log('The size costs ' + price)

        }
        else if (pizzasize === 'medium'){
            price = 800
            console.log('The size costs ' + price)

        }
        else if(pizzasize === 'large'){
            price = 1000
            console.log('The size costs ' + price)

        }
        else{
            alert ('Ensure you fill your inputs before submission')
        }
        if (pizzaCrust === 'crispy'){
            price = 250
            alert('The size costs ' + price)

        }
        else if(pizzaCrust ==='stuffed'){
            price = 300
            alert('The size costs ' + price)

        }
        else if(pizzaCrust === 'glutten-free'){
            price = 200
            alert('The size costs ' + price)

        }
        else{
            alert('Ensure you fill your inputs before submission')

        }
           
         

    });
});