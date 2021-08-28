/**
* Said Sheck
* Aug 11th 2021
* Note Taking App
* The following application allows users to enter in notes and delete them as they wish
*/

"use strict";
(function() {
  window.addEventListener('load', innit);

  function innit() { //do any dom stuff here
    let enterButton = document.getElementById("enter");
    let entryAmount = document.getElementsByClassName("card");//gets all 'card' labeled items

    //Enter EventListner
    enterButton.addEventListener('click',function(){
      if (entryAmount.length < 5) { //Limit Cards to Avoid OverFilling
        createCard(returnText(), entryAmount.length + 1);
        deleteStructure();
      }
    });

    let clearButton = document.getElementById("clear");
    clearButton.addEventListener('click', clearText);

  }

  /**
   * The following function allows for the saving of inserted text
   * @returns enteredText - The string of the inserted text box value
   */
  function returnText() {
    let enteredText = document.getElementById("textbox").value;
    return enteredText;
  }

  /**
   * The following function allows for the creation of blank card with its title
   * and given deleted button
   * @param {*} enteredText - The string recived from the textbox
   * @param {*} counter - The interger assocaited with the order the card was created (1st, 2nd, etc)
   */
  function createCard(enteredText, counter) {
    let card = document.createElement("article");
    let cardContainer = document.getElementById('noteContainer');
    cardContainer.appendChild(card);
    card.classList.add("card");
    createStructure(card, enteredText, counter);

  }

  /**
   * The following method creates the structure for a blank card:
   * The Title, Content, and Delete Button
   * @param {*} card - The Unstructed blank card
   * @param {*} enteredText - The note which would like to be recorded
   * @param {*} counter - The heading or order the card is associated with
   */
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

  /**
   * The following method allows for the removal of a specific entry
   * The Structure of the code belongs to "StackOverFlow" user "brk"
   */
  function deleteStructure(){
    // add common class to all the buttons
    let deleteBtn = document.getElementsByClassName("card");

    // converting html collection to array, to use array methods
    Array.prototype.slice.call(deleteBtn).forEach(function(item) {
    // iterate and add the event handler to it
      item.addEventListener("click", function(e) {
        e.target.parentNode.remove()
      });

    });
  }

  /**
   * The following method allows for the clearing of the textbox
   */
  function clearText() {
    let textBox = document.getElementById('textbox');
    textBox.value = ""
  }
})();