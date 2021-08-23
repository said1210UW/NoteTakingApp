//I am Subbers

"use strict";
(function() {
  window.addEventListener('load', innit);

  function innit() {
    //do any dom stuff here
    let enterButton = document.getElementById("enter");
    let entryAmount = document.getElementsByClassName("card");
    enterButton.addEventListener('click',function(){
      if (entryAmount.length < 5) {
        createCard(returnText());
      }
    });

    let clearButton = document.getElementById("clear");
    clearButton.addEventListener('click', clearText);

  }

  function returnText() {
    let enteredText = document.getElementById("textbox").value;
    return enteredText;
  }

  function createCard(enteredText) {
    let card = document.createElement("article");
    let cardContainer = document.getElementById('noteContainer');
    cardContainer.appendChild(card);
    card.classList.add("card");
    card.innerHTML = enteredText;
  }

  function clearText() {
    let textBox = document.getElementById('textbox');
    textBox.value = ""
  }
})();