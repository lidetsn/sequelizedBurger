module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING
    });
  
    Customer.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Customer.hasMany(models.burgers, {
        onDelete: "cascade",
       
      });
    };
    
  
    return Customer;
  };
  