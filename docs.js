/*
TABLES:


(products and categories is one to many)

PRODUCTS
id SERIAL PRIMARY KEY 
title VARCHAR(255) UNIQUE NOT NULL
description VARCHAR(255) NOT NULL
price DECIMAL NOT NULL 
quantity INT NOT NULL
category_id INT REFERENCES categories(id)


USERS
Users must have a valid email address
Users email must be unique

(what is the relationship between users and orders)

ORDER
Orders must belong to a user OR guest session (authenticated vs unauthenticated)
Orders must contain line items that capture the price, current product ID and quantity
If a user completes an order, that order should keep the price of the item at the time when they checked out even if the price of the product later changes
orders must have a status of if they are a 'cart' or 'purchased'

What is the relationship between products and orders?

PRODUCTS_ORDERS
is gonna represent cart items or purchased items 
what is the price at time of adding to cart
how many quantity of product did they put in cart

ROUTES
A whole bunch of routes...
More routes

*/
