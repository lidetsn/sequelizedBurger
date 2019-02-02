$(function() {
 
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    var  newDevouredState = {
                   devoured:  newDevoured
    };

    // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data:  newDevouredState
        }).then(
          function() {
            console.log("changed  to",  newDevoured);
            // Reload the page to get the updated list
            location.reload();
          }
        );
  });
//
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");
    // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
  });

  
  $("#showmenu").on("click",function(){
    var x = document.getElementById("menu"); 
          if ( $("#menu").css("display") === "none") {
            x.style.display = "block";
            $("#showmenu").text("CLOSE MENU")
          } else {
            x.style.display = "none";
            $("#showmenu").text("OPEN MENU")
          }
  })
  
});

