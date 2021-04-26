/*First I created a script to tell the browser to add the entire website
in the DOM before running JS*/
$(document).ready(function () {
    $("#tabs a").on("click", showTab);
//This next line is to run the order function on the button click
    $("button").on("click", orderPizza);
    $("form").on("submit", summary);

});

function summary(event){
    event.preventDefault();
}

function showTab(event){
    event.preventDefault();
    $(this).tab("show");
}

function orderPizza()
{
    //These variables were created to count the selections
    let numPizzaSize = $("input[name=sizeOfPizza]:checked");
    let numMeatToppings = $("input[name=meatType]:checked");
    let numVegToppings = $("input[name=vegetableType]:checked");

    let total = 0;

    //This will keep track of the check boxes and add to the total.
    numPizzaSize.each(function(){
        total += $(this).data("price");
    });
    numMeatToppings.each(function(){
        total += $(this).data("price");
    });
    numVegToppings.each(function(){
        total += $(this).data("price");
    });

    //Output the subtotal
    $("p#subtotal").text(`Your subtotal is $${total.toFixed(2)}`);

    let pizzaOrder = "";
    //Created variable for output of the customer order

    numPizzaSize.each(function(){
        pizzaOrder += $(this).data("display");
        pizzaOrder += " ";
    });
    numMeatToppings.each(function(){
        pizzaOrder += $(this).data("display");
        pizzaOrder += " ";
    });
    numVegToppings.each(function(){
        pizzaOrder += $(this).data("display");
        pizzaOrder += " ";
    });

    $("p#order").text(`Order: ${pizzaOrder}`);


    //Created variables for output on last tab.
    let nameForm = $("#fname").val();
    let streetForm = $("#street").val();
    let cityForm = $("#city").val();
    let phoneForm = $("#phone").val();
    let totalCost = (total * 1.051) + 2;


    $("#finalInfo").text(`Thank you ${nameForm}! Your pizza will be delivered 
    to ${streetForm}, ${cityForm}. We will text you at ${phoneForm} when we are on our way.`)

    $("#finalOrder").text(`Order: ${pizzaOrder} pizza`)

    $("#finalCost").text(`Total Cost: $${totalCost.toFixed(2)}`)

}

