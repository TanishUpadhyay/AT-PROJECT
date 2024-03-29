# MERN PROJECT E-COMMERCE

# STEPS

1. Install VS Code,Git,Node
2. Create React App
3. Create Git Repositary
4. List Products
   1. create products array
   2. add products images
   3. render products
   4. style products
5. Add Routing
   1. npm i react-router-dom
   2. create route for home screen
   3. create route for product screen
6. Create Node.js Server
   1. run npm init in root folder
   2. Update package.json set type:module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready
   9. move product.js from frontend to backend
   10. create route for/api/products
   11. return products
   12. run npm start
7. Fetch Products From Backend
   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
8. Manage State by Reducer Hook
   1. define reducer
   2. update fetch data
   3. get state from Reducer
9. Add bootstrap UI framework
   1. npm install react-bootstrap bootstrap
   2. update app.js
10. Create Product and Rating Component.

    1. create Product Component
    2. create Rating Component
    3. Use rating in product

11. Create Product Details Screen

    1. fetch product from backend
    2. create 3 column for image,info and action

12. Create Loading and Message Component

    1. create Loading Component
    2. use spinner component
    3. create message component
    4. create utils.js to define geterror function

13. Implement add to cart

    1. Create react context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler

14. Complete Add To Cart

    1. check exist item in the cart
    2. check count in stock in backend

15. Create Cart Screen
    1. create 2 columns
    2. display items list
    3. create action column
16. Complete Cart Screen
    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout
17. Create Signin Screen
    1. create sign in form
    2. add email and password
    3. add signin button
18. Connect To MongoDB Database
    1. create atlas monogodb database
    2. install local mongodb database
    3. npm install mongoose
    4. connect to mongodb database
19. Seed Sample Products
    1. create Product model
    2. create seed route
    3. use route in server.js
    4. seed sample product
20. Seed Sample Users
    1. create user model
    2. seed sample users
21. Create Signin Backend API
    1. create signin api
    2. npm install jsonwebtoken
    3. define generateToken
22. Complete Signin Screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header
23. Create Shipping Screen
    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar
24. Create Sign Up Screen
    1. create input forms
    2. handle submit
    3. create backend api
25. Implement Select Payment Method Screen
    1. create input forms
    2. handle submit
26. Create Place Order Screen
    1. show cart items, payment and address
    2. calculate order summary
27. Implement Place Order Action
    1. handle place order action
    2. create order create api
28. Create Order Screen
    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 cloumns
29. Pay Order By PayPal
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend
30. Display Order History
    1. create order screen
    2. create order history api
    3. use api in the frontend
31. Create Profile Screen
    1. get user info from context
    2. show user information
    3. create user update api
    4. update user info
32. Publish To Heroku
    1. create and config node project
    2. serve build folder in frontend folder
    3. Create heroku account
    4. connect it to github
    5. Create mongodb atlas database
    6. Set database connection in heroku env variables
    7. Commit and push
33. Add Sidebar and Search Box
    1. add sidebar
    2. add search box
35. Create Search Screen
    1. show filters
    2. create api for searching products
    3. display results
