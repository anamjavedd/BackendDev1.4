const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

function getWelcomeMessage() {
  return 'Welcome to our service!';
}

function greetingMessage(username) {
  return 'Hello, ' + username + '!';
}

function checkPassword(password) {
  let result;
  if (password.length < 15) {
    result = 'weak';
  } else {
    result = 'strong';
  }

  return result;
}

function calculateSum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

function subscriptionStatus(isSubscribed) {
  if (isSubscribed) {
    return 'is subscribed';
  } else {
    return 'is not subscribed';
  }
}

app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(greetingMessage(username));
});

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send('The password is ' + checkPassword(password));
});

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send('The sum is ' + calculateSum(num1, num2));
});

app.get('/subscription-status', (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed === true;
  res.send(username + ' is ' + subscriptionStatus(isSubscribed));
});

app.get('/discounted-price', (req, res) => {
  let product_price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculateDiscount(product_price, discount));
});

function calculateDiscount(product_price, discount) {
  let discounted_price = product_price - (discount / 100) * product_price;

  return discounted_price.toString();
}

app.get('/personalised-greeting', (req, res) => {
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(personalisedGreeting(age, gender, name));
});

function personalisedGreeting(age, gender, name) {
  return (
    'Hello, ' + name + '! You are a ' + age.toString() + ' year old ' + gender
  );
}

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(finalPrice(price, discount, tax));
});

function finalPrice(price, discount, tax) {
  let discountedPrice = price - (discount / 100) * price;
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);
  return finalPrice.toString();
}

app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(calculateExerciseTime(running, cycling, swimming));
});

function calculateExerciseTime(running, cycling, swimming) {
  return (running + cycling + swimming).toString();
}
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
