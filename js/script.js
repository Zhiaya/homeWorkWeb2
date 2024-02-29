"use strict";
// products
import { cardProduct } from "../components/cardProduct.js";
import { getData } from "../store/fetchApi.js";
//Users
import { cardUser } from "../components/cardUser.js";

const renderArea = document.querySelector("#render-area");

//products
const products = await getData("products");
products.map((product) => {
  renderArea.innerHTML += cardProduct(product);
});

//users
const users = await getData("users");
users.map((user) => {
  renderArea.innerHTML += cardUser(user);
});

// Sample JSON data
const data = [
  { title: "Card 1", image: "image1.jpg" },
  { title: "Card 2", image: "image2.jpg" },
  // Add more cards as needed
];
