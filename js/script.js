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
          smallPrice = 600
          console.log('The size costs ' + smallPrice)

        }
        else if (pizzasize === 'medium'){
            mediumPrice = 800
            console.log('The size costs ' + mediumPrice)

        }
        else if(pizzasize === 'large'){
            largePrice = 1000
            console.log('The size costs ' + largePrice)

        }
        else{
            alert ('Ensure you make your full order before submission')
        }
        if (pizzaCrust === 'crispy'){
            crispyPrice = 250
            alert('The crust costs ' + crispyPrice)

        }
        else if(pizzaCrust ==='stuffed'){
            stuffedPrice= 300
            alert('The crust costs ' + stuffedPrice)

        }
        else if(pizzaCrust === 'glutten-free'){
            gluttenPrice = 200
            alert('The crust costs ' + gluttenPrice)

        }
        else{
            alert('Ensure you make your full order before submission')

        }
           
         

    });
});