$(function() {
    var nameInput ;
    var customerId;
    var orderdBurgers=[];
    var orderDetail={}
    var order=[]
    $(document).on("click", ".burgerType", getOrderedBurgers); //listining check box click

    $(".create-form").on("submit",function(event){
        nameInput = $("#ca").val().trim().toUpperCase(); 
        event.preventDefault();
        if(orderdBurgers.length===0){
            $("#err").text("please choose your burger first")
        }
        else if (nameInput==="" ){
            $("#err").text("please enter your name")
           $("#ca").focus()
          }
         else{
            upsertCustomer({
            name: nameInput              
            });  
    console.log(orderdBurgers);  //test purpose 
        }
})
    function upsertCustomer(customerData) {
        $.ajax("/api/customers", {
                type: "POST",
                data: customerData
              }).then(
                function(data) {
                 customerId=data.id;
                 console.log(data.id);
                 setOrderDetail(orderdBurgers)    
                upsertBurger({ order
                        });                            
                }
              );   
        }
    function upsertBurger(customerData) {
         $.ajax("/api/burgers", {
                type: "POST",
                data: customerData
              }).then(
                  function() {
                  console.log("creating new burger");
                  // Reload the page to get the updated list
                  location.reload();
               
                }
              ); 
      }
    
function  getOrderedBurgers(){  //listen the check box click event and save the checked value
        if ($(this).is(":checked")) {//check one of the checkbox  is checked
                orderdBurgers.push($(this).val());
        }
        else {     
            var index = orderdBurgers.indexOf($(this).val());
            orderdBurgers.splice(index, 1);// cut it out if selected then unselect
        }
}     

function setOrderDetail(orderBurger){  
    for(var i=0;i<orderBurger.length;i++){
        orderDetail={"burger_name":orderBurger[i],
                      "CustomerId":customerId
                     }
                     console.log(orderDetail)
                     order.push(orderDetail);                     
    }
}
  });
