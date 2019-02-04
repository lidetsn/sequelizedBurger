# sequelizedBurger

# Eat-Da-Burger! 
  
  # The Sequelize version of Eat-Da-Burger!
   Eat-Da-Burger is a mobile responsive restaurant app that lets users input the names of burgers they'd like to eat.

 * It include Customer association which has Customer model  connecting  with the Burger model in one to many relation ship (a customer can order many burgers)

* The app has a menu for the list of burgers available to order, When a user put the check mark next to the burger of his choise and put his/her name in the text box and submits , the app will display all the selected burgers on the left side of the page -- waiting to be devoured besides the app insert the burgers and the cutomer detail in the database.

* Each burger in the waiting area also has a `Devour it!` and `Delete!` button. When the user clicks `Devour it!`, the burger will move to the right side of the page. When the user clicks `Delete!`, the burger will be deleted (just in case when you want to change your mind :). )

* To see a site that logs the name of which Customer ate which Burger just click the link 'see detail' on the right top corner of the devored burgers. This link is provided just to show customer and their burger relationship demo (however that should be only for authorized person only)

* The app store every burger in a database, whether devoured or not unless it is deleted.

## Technology used
 * MySQL,
 * sequelize 
 * Node, 
 * Express, 
 * Handlebars 
 * css
 * bootstrap
 
 ## installation guide
    to run the app locally
   * you will need to have mysql, Node.js and NPM installed locally,
     or you will need access to an environment that already has them installed. 
     you will also be using the Command Prompt (Windows)  Terminal (Mac) to install the required packages,
     and to start/stop the Node server.
   * run schema.sql  to create your DataBase 
   * set your connection to match your Database in config.json
   * run npm install using the Command Prompt (Windows) / Terminal (Mac) to install the required packages

  It follows the MVC design pattern; and  use Node and Sequelize queries and route data , and Handlebars to generate the HTML.

i attached  the link to the video below that show how the app works 

Heroku Link:  https://safe-cove-34799.herokuapp.com

 video:  https://drive.google.com/file/d/18cgTXsdB2zj94-7BDCopaB8t1_3_0-jW/view
enjoy 

author Lidetu s N
