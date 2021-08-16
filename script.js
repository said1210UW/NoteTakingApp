"use strict";

(function() {
  window.addEventListener('load', innit);

  function innit() {
    //do any dom stuff here
    let enterButton = document.getElementById("enter");

    /*enterButton.addEventListener('click', function() {
      let text = returnText();
      alert(text);
    });*/

    enterButton.addEventListener('click',createCard);


    let clearButton = document.getElementById("clear");

    clearButton.addEventListener('click', clearText);
  }

  function returnText() {
    let enteredText = document.getElementById("textbox").value;
    return enteredText;
  }

  function createCard() {
    let card = document.createElement("article");
    let cardContainer = document.getElementById('noteContainer');
    cardContainer.appendChild(card);
    card.classList.add("card");
    console.log(card);
  }

  function clearText() {
    let textBox = document.getElementById('textbox');
    textBox.value = ""
  }
})();