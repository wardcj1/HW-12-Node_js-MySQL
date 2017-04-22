var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "mysql11",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  runSearch();
});

var runSearch = function() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: ["Enter the ID of the product to buy", "Select the number of units to buy"]
  }).then(function(answer) {

    switch (answer.action) {
      case "Enter the ID of the product to buy":
        productSearch();
        break;

      case "Select the number of units to buy":
        unitSearch();
        break;
    }
  });
};

var productSearch = function() {
  inquirer.prompt({
    name: "product",
    type: "input",
    message: "What product would you like to search for?"
  }).then(function(answer) {
    var query = "SELECT product_name, price FROM bamazon WHERE ?";
    connection.query(query, { product_name: answer.product_name }, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log("Product: " + res[i].product_name + " || Price: " + res[i].price);
      }
      runSearch();
    });
  });
};

var unitSearch = function() {
  var query = "SELECT stock_quantity FROM bamazon GROUP BY product_name HAVING stock_quantity count(*) > 1";
  connection.query(query, function(err, res) {
    if (err) {
      console.log("Insufficient quantity!");
      runSearch();
    }
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].product_name);
    }
    runSearch();
  });
};

// var rangeSearch = function() {
//   inquirer.prompt([{
//     name: "start",
//     type: "input",
//     message: "Enter starting position: ",
//     validate: function(value) {
//       if (isNaN(value) === false) {
//         return true;
//       }
//       return false;
//     }
//   }, {
//     name: "end",
//     type: "input",
//     message: "Enter ending position: ",
//     validate: function(value) {
//       if (isNaN(value) === false) {
//         return true;
//       }
//       return false;
//     }
//   }]).then(function(answer) {
//     var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
//     connection.query(query, [answer.start, answer.end], function(err, res) {
//       for (var i = 0; i < res.length; i++) {
//         console.log("Position: " + res[i].position + " || Song: " + res[i].song
//           + " || Artist: " + res[i].artist + " || Year: " + res[i].year);
//       }
//       runSearch();
//     });
//   });
// };

// var songSearch = function() {
//   inquirer.prompt({
//     name: "song",
//     type: "input",
//     message: "What song would you like to look for?"
//   }).then(function(answer) {
//     console.log(answer.song);
//     connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function(err, res) {
//       console.log("Position: " + res[0].position + " || Song: " + res[0].song
//         + " || Artist: " + res[0].artist + " || Year: " + res[0].year);
//       runSearch();
//     });
//   });
// };
