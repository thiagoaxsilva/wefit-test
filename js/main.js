const listOfRows = document.getElementsByClassName("row");
const header = document.getElementsByClassName("jumbotron")[0];
const menu = document.getElementsByClassName("btn-group-vertical")[0];
const ulList = document.getElementsByClassName("list-group")[0];

// Menu
menu.classList.replace("btn-group-vertical", "btn-group-horizontal");

// Header
header.classList.add("bg-secondary", "text-white", "text-right");
header
  .getElementsByClassName("btn-primary")[0]
  .classList.replace("btn-primary", "btn-success");

// Cards
const listOfCards = listOfRows[2].getElementsByClassName("card");

const animalsCard = listOfCards[0];
const tecnologyCard = listOfCards[1];
const peopleCard = listOfCards[2];
const natureCard = listOfCards[3];

animalsCard.parentElement.classList.add("order-2");
tecnologyCard.parentElement.classList.add("order-4");
peopleCard.parentElement.classList.add("order-3");
natureCard.parentElement.classList.add("order-1");

const AnimalsCardButton = animalsCard.getElementsByClassName("btn-primary")[0];

AnimalsCardButton.classList.replace("btn-primary", "btn-success");

// List

const activeListItem = ulList.getElementsByClassName("active")[0];
activeListItem.classList.remove("active");

const insertLi = (text) => {
  let listItem = document.createElement("li");
  listItem.innerText = text;
  listItem.classList.add("list-group-item");

  if (text === "Quarto Item") {
    listItem.classList.add("active");
  }

  ulList.appendChild(listItem);
};

insertLi("Quarto Item");
insertLi("Quinto Item");
