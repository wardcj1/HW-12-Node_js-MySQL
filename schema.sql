USE bamazon;

CREATE TABLE products (
	item_id INT(250) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(45)  NOT NULL,
	department_name VARCHAR(45)  NOT NULL,
	price INT(30)  NOT NULL,
	stock_quantity INT(250)  NOT NULL,
	PRIMARY KEY (item_id)
);

SELECT * FROM products;
