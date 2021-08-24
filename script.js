//Said Sheck
//Aug 11th 2021
"use strict";
(function() {
  window.addEventListener('load', innit);

  function innit() {
    //do any dom stuff here
    let enterButton = document.getElementById("enter");
    let entryAmount = document.getElementsByClassName("card");
    let cardRemover = document.querySelector("")
    let counter = 0;

    //Enter EventListner
    enterButton.addEventListener('click',function(){
      counter++;
      if (entryAmount.length < 5) { //Limit Cards to Avoid OverFilling
        createCard(returnText(), counter);
      }
    });

    let clearButton = document.getElementById("clear");
    clearButton.addEventListener('click', clearText);

  }

  function returnText() {
    let enteredText = document.getElementById("textbox").value;
    return enteredText;
  }

  function createCard(enteredText, counter) {
    let card = document.createElement("article");
    let cardContainer = document.getElementById('noteContainer');
    cardContainer.appendChild(card);
    card.classList.add("card");
    createStructure(card, enteredText, counter);

  }

  function createStructure(card, enteredText, counter) {
    let header = document.createElement("h2");
    header.innerHTML = "Entry " + counter;

    let textResponse= document.createElement("p");
    textResponse.innerHTML = enteredText;

    let clearBtn = document.createElement("button");
    clearBtn.innerHTML = "Clear";

    card.appendChild(header);
    card.appendChild(textResponse);
    card.appendChild(clearBtn);
  }

  function clearText() {
    let textBox = document.getElementById('textbox');
    textBox.value = ""
  }
})();