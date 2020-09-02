function beginCipher() {
  selectCipher(); // Calls another function.
  startTimer(); // Calls another function.
  msgArray=[]; // Empties msgArray.
  dynamicArray=[]; // Empties dynamicArray.
  
  for(var symbol in cipher.message) { // For everything in cipher.message, do...
    msgArray[msgArray.length]=cipher.message[symbol]; // adds that to msgArray.
  }
  
  for(var character in cipher.encryption) { // For each character in cipher.encryption, do...
    if(!invalidCharacters.includes(cipher.encryption[character])) { // if that character isn't included in the invalid characters...
      dynamicArray[dynamicArray.length]="_"; // add an underscore to the dynamicArray.
    } else { // Otherwise...
      dynamicArray[dynamicArray.length]=cipher.encryption[character]; // add that character to the dynamic array.
    }
  }
  
  update(); // Calls another function.
  
  for(var letter of letters) { // For every letter...
    document.getElementById(letter).disabled=false; // enable that letter.
    document.getElementById(letter).value=""; // empty that letter.
  }

  document.getElementById("cipherSelection").disabled=true; // Disable the start button.
  document.getElementById("checkSolution").disabled=false; // Enable the submit button.
}

function selectCipher() {
  var selection=Math.floor(10*Math.random()); // Choose a number which is a valid selection index for the cryptogram.
  cipher=aristocrats[selection]; // Select that cryptogram.
  document.getElementById("title").innerHTML=cipher.title; // Set the title to be the title of the cryptogram.
  document.getElementById("msgLength").innerHTML=cipher.msgLength; // Set the length to be the length of the cryptogram.
  document.getElementById("authorNommeDePlumme").innerHTML=cipher.author; // Set the author to be the author of the cryptogram.
  document.getElementById("msg").innerHTML=cipher.encryption; // Set the displayed message to be the ecrypted message of the cryptogram.
  document.getElementById("keySolution").style.display='block'; // Unhide the keySolution.
  document.getElementById("timer").style.display='block'; // Unhide the timer.
}

function checkSolution() {
  clearInterval(countdown); // Stop the timer.
  lockInput(); // Call another function.
  points=points+(600*currentTenMin); // Award points.
  points=points+(60*currentMin); // Award points.
  points=points+(10*currentTenSec); // Award points.
  points=points+(1*currentSec); // Award points.
  
  document.getElementById("checkSolution").disabled=true; // Disable the submit button.
  document.getElementById("cipherSelection").disabled=false; // Enable the start button.
  
  for(var index in dynamicArray) { // For every character in the user's final solution.
    if(dynamicArray[index].toLowerCase()==msgArray[index]) { // If that character is correct...
      points=points+10; // award points.
    } else { // Otherwise...
      points=points-25; // Removes points.
    }
  }
}

function startTimer() {
  clearInterval(countdown); // Stop the timer.
  
  currentTenMin=1; // Reset the current time.
  currentMin=5; // Reset the current time.
  currentTenSec=0; // Reset the current time.
  currentSec=0; // Reset the current time.
  countdown=setInterval(changeTime, 1000); // Set the frequency of the recurring function.
  
  document.getElementById("tenMin").innerHTML=currentTenMin; // Update the time displayed on the timer.
  document.getElementById("min").innerHTML=currentMin; // Update the time displayed on the timer.
  document.getElementById("tenSec").innerHTML=currentTenSec; // Update the time displayed on the timer.
  document.getElementById("sec").innerHTML=currentSec; // Update the time displayed on the timer.
}

function changeTime() {
  if(currentSec!==0) { // If there are single seconds left...
    currentSec=currentSec-1; // remove one second.
  }
  else if(currentTenSec!==0) { // if not, and there are tens of seconds remaining...
    currentTenSec=currentTenSec-1; // remove one ten second.
    currentSec=9; // set the seconds to nine.
  }
  else if(currentMin!==0) { // if not, and there are minutes left...
    currentMin=currentMin-1; // remove one minute.
    currentTenSec=5; // sets the number of ten seconds to five.
    currentSec=9; // sets the number of seconds to nine.
  }
  else if(currentTenMin!==0) { // if not, and there are tens of minutes remaining...
    currentTenMin=currentTenMin-1; // remove one ten minute.
    currentMin=9; // sets the number of minutes to nine.
    currentTenSec=5; // sets the number of ten seconds to five.
    currentSec=9; // sets the number of seconds to nine.
  }
  else { // otherwise...
    alert("Your time is up."); // alert the user that their time is up.
    checkSolution(); // Calls another function.
  }
  
  document.getElementById("tenMin").innerHTML=currentTenMin; // Sets the current number of ten minutes.
  document.getElementById("min").innerHTML=currentMin; // Sets the current number of minutes.
  document.getElementById("tenSec").innerHTML=currentTenSec; // Sets the current number of ten seconds.
  document.getElementById("sec").innerHTML=currentSec; // Sets the current number of seconds.
}

function letterChange(cipherTextLetter) {
  var check=true; // Set check to be true.
  var plainTextLetter=document.getElementById(cipherTextLetter).value; // Sets a variable for ease of calling later on.
  var cryptogram=cipher.encryption; // Sets a variable for ease of calling later on.
  if(plainTextLetter.toLowerCase()==cipherTextLetter.toLowerCase()) { // If the plain text letter the user entered was the same as the cipher text letter they entered (not case sensitive)...
    document.getElementById(cipherTextLetter).value=""; // Empty the user's input.
    alert("A letter cannot represent itself."); // Tell the user what they did wrong.
  }
  else { // Otherwise...
    for(var letter of letters) { // for each letter...
      if(check===true) { // if check is still true...
        if((document.getElementById(letter).value.toLowerCase()==plainTextLetter.toLowerCase())&&(document.getElementById(letter)!==document.getElementById(cipherTextLetter))) { //  If that plain text letter is already being represented by a cipher text letter (also checks to make sure that that letter isn't going to be representing itself.)
          document.getElementById(cipherTextLetter).value=""; // Empty the user's input.
          check=false; // Set check to be false.
          if(document.getElementById(letter).value!=="") {
            alert("That letter is already being represented."); // Tell the user what they did wrong.
          }
        }
      }
    }
    
    if(check===true) { // If check is still true... (Completely outside of the previous if statement for greater clarity instead of having a second identical if statement within the previous one. Functionality remains the same.)
      for(var item in cryptogram) { // for every item within the previously defined cryptogram...
        if(cryptogram[item].toLowerCase()==cipherTextLetter.toLowerCase()) { // if that item in the cryptogram is the same letter as the cipher text letter that was assigned to a plain text letter.
          dynamicArray[item]=plainTextLetter.toLowerCase(); // change the item in the dynamic array to be the plain text letter that which the user decided that cipher text letter was.
        }
      }
      update(); // Calls another function.
    }
    if(check===false) { // If check is false (no need for an else since check can't be both true and false.)...
      if(plainTextLetter==="") { // if the user undid one of their previous thoughts for the plain text letter of a cipher text letter...
        for(var item2 in cryptogram) { // for every item withing the previously defined cryptogram...
          if(cryptogram[item2].toLowerCase()==cipherTextLetter.toLowerCase()) { // if that item in the cryptogram is the same latter as that which the user decided to revert back to nothing...
            dynamicArray[item2]="_"; // make that item an uncderscore again.
          }
        }
      }
      update();
    }
  }
}

function lockInput() {
  for(var letter of letters) { // For every letter...
    document.getElementById(letter).disabled=true; // Disable that letter.
  }
}

function update() {
  dmsg.innerHTML=""; // Clear the dynamicMessage.
  for(var index in dynamicArray) { // For everything in dynamicArray...
    if(dynamicArray[index]!==" ") { // If it isn't a space....
      dmsg.innerHTML=dmsg.innerHTML+dynamicArray[index]+" "; // add that character, followed by a space.
    }
    else { // Otherwise...
      dmsg.innerHTML=dmsg.innerHTML+dynamicArray[index]+"&nbsp; &nbsp;"; // add three spaces.
    }
  }
}

function viewPoints() {
  document.getElementById("pointsData").innerHTML="You have "+points+" points."; // Updates the number of points the user has.
  document.getElementById("pointsData").style.display='block'; // Reveals the span.
}

function hidePoints() {
  document.getElementById("pointsData").style.display='none'; // Hides the span.
}