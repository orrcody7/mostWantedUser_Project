"use strict"


//Menu functions.
//Used for the overall flow of the application.
/////////////////////////////////////////////////////////////////
//#region 

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      searchResults = traitSearchRoutine(people); 
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = promptFor("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'", autoValid);

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

//#endregion

//Filter functions.
//Ideally you will have a function for each trait.
/////////////////////////////////////////////////////////////////
//#region 

//nearly finished function used to search through an array of people to find matching first and last name and return a SINGLE person object.
function searchByName(people){
  let firstName = promptFor("What is the person's first name?", autoValid);
  let lastName = promptFor("What is the person's last name?", autoValid);

  let foundPerson = people.filter(function(potentialMatch){
    if(potentialMatch.firstName === firstName && potentialMatch.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })

  // TODO: find the person single person object using the name they entered.
  return foundPerson;
}


// trait functions below.

function searchById(people) { 
  let enterId = promptFor("Please enter person's ID", autoValid); // removed autoValid function, removed promptFor
  let parsedId = parseInt(enterId);
  let foundPersonId = people.filter(function(potentialMatch) {
    if(potentialMatch.id === parsedId) {
      return true;   // return true;
    }
    else {
      return false;  // return false;

    }
  })
  return foundPersonId;
}


function searchByGender(people) {
  let enterGender = promptFor("Please enter person's gender", autoValid);  
  let foundPersonGender = people.filter(function(potentialMatch) {
    if(potentialMatch.gender === enterGender) {
      return true;
    }
    else {
      return false;
    }
  })
return foundPersonGender; 
}


function searchByDob(people) {
  let enterDob = promptFor("Please enter person's dob", autoValid);  
  let foundPersonDob = people.filter(function(potentialMatch) {
    if(potentialMatch.dob === enterDob) {
      return true;
    }
    else {
      return false;
    }
  })
return foundPersonDob; 
}


function searchByHeight(people) { 
  let enterHeight = promptFor("Please enter person's height", autoValid); // removed autoValid function, removed promptFor
  let parsedHeight = parseInt(enterHeight);
  let foundPersonHeight = people.filter(function(potentialMatch) {
    if(potentialMatch.height === parsedHeight) {
      return true;   // return true;
    }
    else {
      return false;  // return false;

    }
  })
  return foundPersonHeight;
}


function searchByWeight(people) { 
  let enterWeight = promptFor("Please enter person's height", autoValid); // removed autoValid function, removed promptFor
  let parsedWeight = parseInt(enterWeight);
  let foundPersonWeight = people.filter(function(potentialMatch) {
    if(potentialMatch.Weight === parsedWeight) {
      return true;   // return true;
    }
    else {
      return false;  // return false;

    }
  })
  return foundPersonWeight;
}


function searchByEyeColor(people){
  let enterColor = promptFor("Please enter person's Eye Color", autoValid); // removed autoValid function, removed promptFor
  //let parsedId = parseInt(enterColor);
  let foundPersonEyeColor = people.filter(function(potentialMatch) {
    if(potentialMatch.eyeColor === enterColor) {
      return true;   // return true;
    }
    else {
      return false;  // return false;

    }
  })
  return foundPersonEyeColor;
}


function searchByOccupation(people) {
  let enterOccupation = promptFor("Please enter person's occupation", autoValid);  
  let foundPersonOccupation = people.filter(function(potentialMatch) {
    if(potentialMatch.occupation === enterOccupation) {
      return true;
    }
    else {
      return false;
    }
  })
return foundPersonOccupation; 
}


function searchByParents(people) { 
  let enterParentsId = promptFor("Please enter parent's ID", autoValid); // removed autoValid function, removed promptFor
  let parsedId = parseInt(enterParentsId);
  let foundParentsId = people.filter(function(potentialMatch) {
    if(potentialMatch.parents === parsedId) {
      return true;   // return true;
    }
    else {
      return false;  // return false;

    }
  })
  return foundParentsId;
}

function searchByCurrentSpouse(people) { 
  let enterCurrentSpouseId = promptFor("Please enter currents spouse's ID", autoValid); // removed autoValid function, removed promptFor
  let parsedId = parseInt(enterCurrentSpouseId);
  let foundCurrentSpouseId = people.filter(function(potentialMatch) {
    if(potentialMatch.currentSpouse[i] === parsedId) {
      return true;   // return true;
    }
    else {
      return false;  // return false;

    }
  })
  return foundCurrentSpouseId;
}


//TODO: add other trait filter functions here.

function traitSearchRoutine(people){
  let newSearchCrit = prompt("what criteria do you want to search for?");
  //searchLoop;
  let foundTrait;

      switch (newSearchCrit) {
        case "id":
            foundTrait = searchById(people);
            personChooser(foundTrait);
              break;
        case "gender": 
            foundTrait = searchByGender(people);
            personChooser(foundTrait);
              break; 
        case "dob":
            foundTrait = searchByDob(people);
            personChooser(foundTrait);    
              break;
        case "height":
            foundTrait = searchByHeight(people);
            personChooser(foundTrait);
              break; 
        case "weight":
            foundTrait = searchByWeight(people);
            personChooser(foundTrait);
              break; 
        case "eye color":
            foundTrait = searchByEyeColor(people);
            personChooser(foundTrait);
              break;
        case "occupation":
            foundTrait = searchByOccupation(people);
            personChooser(foundTrait);
              break;
        case "parents":
            foundTrait = searchByParents(people);
            personChooser(foundTrait);
                break;
        case "current spouse":
            foundTrait = searchByCurrentSpouse(people);
            personChooser(foundTrait);
              break;
      }
    return foundTrait;
}
//#endregion

//Display functions.
//Functions for user interface.
/////////////////////////////////////////////////////////////////
//#region 

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}





//Validation functions.
//Functions to validate user input.
/////////////////////////////////////////////////////////////////
//#region 

//a function that takes in a question to prompt, and a callback function to validate the user input.
//response: Will capture the user input.
//isValid: Will capture the return of the validation function callback. true(the user input is valid)/false(the user input was not valid).
//this function will continue to loop until the user enters something that is not an empty string("") or is considered valid based off the callback function(valid).
function promptFor(question, valid){
  let response;
  let isValid;
  do{
    response = prompt(question).trim();
    isValid = valid(response);
  } while(response === ""  ||  isValid === false)
  return response
}

// helper function/callback to pass into promptFor to validate yes/no answers.
function yesNo(input){
  if(input.toLowerCase() == "yes" || input.toLowerCase() == "no"){
    return true;
  }
  else{
    return false; 
  }
}

// helper function to pass in as default promptFor validation.
//this will always return true for all inputs.
function autoValid(input){
  return true; // default validation only
}

//Unfinished validation function you can use for any of your custom validation callbacks.
//can be used for things like eye color validation for example.
function customValidation(input){
  
}

//#endregion


//*** search thru the data array for the person entered by the user


// function personChooser(people){
//   let filteredPeople = people.map(function(person){ //declared a variable that can be used in the prompt
//     return person.firstName + " " + person.lastName;
//   }).join("\n");
//   let userChoice = prompt ("Please enter a name from the list below: \n" + filteredPeople);
// }

function personChooser(people){
  let filteredPeople = people.map(function(person){ //declared a variable that can be used in the prompt
    return person.firstName + " " + person.lastName;
  }).join("\n");
  let userChoice = prompt ("Please enter a name from the list below: \n" + filteredPeople);
    alert(displayPerson(userChoice));
}

function displayPerson(person){   // displays info of userChoice from above personChooser function.  (logs "undefined", see alert(personInfo) note below))
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "id: " + person.id + "\n";
  personInfo += "gender: " + person.gender + "\n";
  personInfo += "dob: " + person.dob + "\n";
  personInfo += "height: " + person.height + "\n";
  personInfo += "weight: " + person.weight + "\n";
  personInfo += "eye color: " + person.eyeColor + "\n";
  personInfo += "occupation: " + person.occupation + "\n";
  personInfo += "parents: " + person.parents + "\n";
  personInfo += "current spouse: " + person.currentSpouse + "\n";
 
  alert(personInfo);        //  is personInfo actually pulling from the data.js file???
}

// function displayPeople(people){    <---- instructor code.  also displays "undefined"??
//   alert(people.map(function(person){
//     return person.firstName + " " + person.lastName;
//   }).join("\n"));
// }