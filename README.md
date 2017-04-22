# HW-12-Node_js-MySQL
Node_js-MySQL bAmazon App

## Overview

* bAmazon is an Amazon-like storefront. The app will take in orders from customers and deplete stock from the store's inventory. Requires MySQL and Prompt npm packages.

### The Customer View 

* MySQL Database called bamazon.
* Table inside of that database called products.
* The products table has each of the following columns:
    * item_id (unique id for each product)
    * product_name (Name of product)
    * department_name
    * price (cost to customer)
    * stock_quantity (how much of the product is available in stores)
* Node application called bamazonCustomer.js. 
    * Running this application will first display all of the items available for sale. 
    * The app then prompts users with two messages:
        * The first asks them the ID of the product they would like to buy.
        * The second message asks how many units of the product they would like to buy.
* Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.
    * If not, the app logs the phrase Insufficient quantity!, and then prevents the order from going through.
    * If the store does have enough of the product, the app fulfills the customer's order.
* Once the update goes through, shows the customer the total cost of their purchase.

#### Sample Code
```javascript


```