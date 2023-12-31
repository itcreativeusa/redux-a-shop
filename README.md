# redux-a-shop

## Description

Deployed application link on GitHub
https://github.com/itcreativeusa/redux-a-shop

Deployed application link on Heroku
https://redux-a-shop-68ebcd74fbee.herokuapp.com/

Redux-a-shop is an e-commerce platform that allows users
to browse through a variety of items, add them to their cart, and purchase them using Stripe.
Applicaton is using Redux to manage global state instead of the Context API.

## Table of Contents

- [Installation](#installation)
- [Technologies used](#technologies-used)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)

## Installation

Run in console from the root folder:

1. `npm install`
2. `npm run seed`
3. `npm run develop`

## Technologies Used

**Front-End:**

- React
- Redux

**Back-End:**

- GraphQL
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- Stripe API

**Functionality:**

- Queries and Mutations (for data retrieval, addition, updating, and deletion)
- Authentication (JWT)

**Deployment and Hosting:**

- Heroku
- MongoDB Atlas

**Security:**

- Protection of sensitive API key information on the server

## Usage

**Browsing and Selecting:**

Browse through the available items on the platform.
Filter items by category.
Click on an item to view more details.

**Adding to Cart:**

Add items to your cart by clicking the "Add to Cart" button.

**Managing Cart:**

Access your shopping cart to review the items you've selected.
Adjust quantities or remove items if needed.

**Checkout:**

Once you're satisfied with your selections, proceed to checkout.
You will be prompted to provide your information for the purchase.
Choose the Stripe payment option for secure and easy payment processing.

**Authentication:**

If you're a registered user, you can log in using your credentials.
If not, you'll need to create an account.
Authentication is secured using JWT (JSON Web Tokens).

**Data Retrieval and Modification:**

The application uses GraphQL queries and mutations to retrieve and modify data, replacing the existing RESTful API.

**Deployment and Hosting:**

The application is deployed on Heroku and is connected to a MongoDB database using MongoDB Atlas.

## Screenshots

Screenshot located in `img/` folder
![main page](img/screenshot.png)

## Credits

Some code for this assignment was taken and refactored from Activity 26 of Module 22, provided by Berkeley Bootcamp for studying purposes.

Had conflict with react-router-dom version "react-router-dom": "^6.15.0" had to downgrade to "react-router-dom": "^5.1.2",
and use Switch instead of Routes in App.js
here links to the articles that helped me to solve the issue:

[React Router - What's the difference between Router and Switch](https://stackoverflow.com/questions/66313344/react-router-whats-the-difference-between-router-and-switch)

[Difference between Route exact path and Route path](https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path)

[React-Redux 6 doesn't trigger state/changes](https://github.com/reduxjs/react-redux/issues/1145)

## License

Please refer to the LICENSE in the repo.
