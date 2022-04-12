# zetz-shop-mern-auth

eCommerce platform built with the MERN stack & Redux. Custom Bootstrap with Bootswatch. Backend: Node.js, Mongo DB, mongoose, Express, bcrypt, json web token, multer, nodemon, concurrently. Frontend: React, React-bootstrap, React-redux, React-router-dom, Redux-thunk, google-login.

# 🚀 Javascript full-stack 🚀

## MERN Stack

### React / Express / MongoDB / Redux

https://github.com/coding-to-music/zetz-shop-mern-auth

https://zetz-shop-mern-auth.herokuapp.com

by Ori Baram https://github.com/obrm

https://obrm-zetz-shop.herokuapp.com/

https://github.com/obrm/zetz-shop

# Zetz-Shop eCommerce Platform

> eCommerce platform built with the MERN stack & Redux.

## Website

https://obrm-zetz-shop.herokuapp.com/

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, placing order, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

### ES Modules in Node

We use ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = your own string
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

## Table of Contents

- [Description](#description)
- [Instructions](#instructions)
- [Technologies Utilized](#technologies-utilized)
- [Contributions](#contributions)
- [Questions](#questions)
- [Future Features](#future-features)
- [Collaboration Requests](#collaboration-requests)

## Description

Still Good is a product tracking tool, designed to remedy your wasteful habits or curate your existing flow of perishable items. The idea is to support budget-conscious or waste-conscious people in their missions to move products from store to consumed by the expiration dates.

**Project Requirements:**

- Use React for the front end.

- Use GraphQL with a Node.js and Express.js server.

- Use MongoDB and the Mongoose ODM for the database.

- Use queries and mutations for retrieving, adding, updating, and deleting data.

- Be deployed using Heroku (with data).

- Have a polished UI.

- Be responsive.

- Be interactive (i.e., accept and respond to user input).

- Include authentication (JWT).

- Protect sensitive API key information on the server.

- Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, high-quality comments, etc.).

- Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Technologies Utilized

- MongoDB
- Express.js
- React.js
- Node.js
- MaterialUI
- GraphQL
- JavaScript
- Mongoose
- Apollo Server Express
- JSON Web Token
- Bcrypt
- Day.js
- React Router Dom
- HTML
- CSS

To test out our project and come up with ideas to propose, follow the instructions, below:

**Fork repository:**

```
Click "Fork"
```

**Clone forked repository:**

```
git clone <repository link>
```

**Add npm dependencies:**

```
npm install
```

**Seed database:**

```
npm run seed
```

**Start servers:**

```
npm run develop
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/zetz-shop-mern-auth.git
git push -u origin main
```

## Heroku

```java
heroku create zetz-shop-mern-auth
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/zetz-shop-mern-auth?retryWrites=true&w=majority"
heroku config:set JWT_SECRET="something-secret"
heroku config:set PAYPAL_CLIENT_ID="another-something-secret"


# probably not needed
heroku config:set PUBLIC_URL="https://zetz-shop-mern-auth.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```

### Heroku Buildpack

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

```java
heroku buildpacks
```

Output:

```java
=== zetz-shop-mern-auth Buildpack URL
heroku/nodejs
```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

heroku buildpacks:add mars/create-react-app
```

Output:

```java
Buildpack added. Next release on zetz-shop-mern-auth will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

```java
heroku buildpacks
```

Output:

```java
=== zetz-shop-mern-auth Buildpack URL
heroku/nodejs
```

### Push to Heroku

```
git push heroku
```

## Error:

```java
2022-04-09T03:12:56.076028+00:00 app[web.1]: ls: cannot access '/app/build/static/js/*.js': No such file or directory
2022-04-09T03:12:56.076252+00:00 app[web.1]: Error injecting runtime env: bundle not found '/app/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location
2022-04-09T03:12:56.253505+00:00 app[web.1]: Starting log redirection...
2022-04-09T03:12:56.253698+00:00 app[web.1]: Starting nginx...
```

Attempted this:

```java
heroku config:set JS_RUNTIME_TARGET_BUNDLE=./client/build/static/js/*.js

heroku config:set JS_RUNTIME_TARGET_BUNDLE=/build/static/js/*.js

# and to remote it:

heroku config:unset JS_RUNTIME_TARGET_BUNDLE

```

## update npm packages

```java
npm install -g npm-check-updates
```

Output:

```java
removed 3 packages, changed 263 packages, and audited 264 packages in 10s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```java
ncu -u
```

Output:

```java
Upgrading /mnt/volume_nyc1_01/zetz-shop-mern-auth/package.json
[====================] 15/15 100%

 axios                ^0.21.0  →  ^0.26.1
 bcrypt                ^5.0.0  →   ^5.0.1
 body-parser          ^1.19.0  →  ^1.20.0
 cookie-parser         ^1.4.5  →   ^1.4.6
 dotenv                ^8.2.0  →  ^16.0.0
 express              ^4.17.1  →  ^4.17.3
 express-fileupload    ^1.2.0  →   ^1.3.1
 js-cookie             ^2.2.1  →   ^3.0.1
 mongoose            ^5.10.13  →  ^6.2.10
 nodemon               ^2.0.6  →  ^2.0.15
 reactjs-popup         ^2.0.4  →   ^2.0.5
 validator           ^13.1.17  →  ^13.7.0

Run npm install to install new versions.
```

```java
npm install
```

Output:

```java
added 58 packages, removed 42 packages, changed 89 packages, and audited 299 packages in 7s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Client directory

```java
cd client

ncu -u
```

```java
Upgrading /mnt/volume_nyc1_01/zetz-shop-mern-auth/client/package.json
[====================] 18/18 100%

 @testing-library/jest-dom     ^5.11.4  →  ^5.16.4
 @testing-library/react        ^11.1.0  →  ^13.0.0
 @testing-library/user-event  ^12.1.10  →  ^14.0.4
 axios                         ^0.21.0  →  ^0.26.1
 dotenv                         ^8.2.0  →  ^16.0.0
 js-cookie                      ^2.2.1  →   ^3.0.1
 node-sass                     ^4.14.1  →   ^7.0.1
 react                         ^17.0.1  →  ^18.0.0
 react-dom                     ^17.0.1  →  ^18.0.0
 react-redux                    ^7.2.2  →   ^7.2.8
 react-router-dom               ^5.2.0  →   ^6.3.0
 react-scripts                   4.0.0  →    5.0.0
 reactjs-popup                  ^2.0.4  →   ^2.0.5
 redux                          ^4.0.5  →   ^4.1.2
 redux-thunk                    ^2.3.0  →   ^2.4.1
 web-vitals                     ^0.2.4  →   ^2.1.4

Run npm install to install new versions.
```
