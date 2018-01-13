/* =================================
  Global variables
  ================================== */
var message;
var person;
var response;


/* =================================
  Functions
==================================== */

/* Get your print function */
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

/*  Create the html message*/
function createMessage(person) {
  message += "<h2>Name: " + person.name + "</h2>";
  message += "<p>Birthday: " + person.birthday + "</p>";
  message += "<p>Located: " + person.city + ", " + person.state + "</p>";
  message += "<br>";
}

/*  List the family.  */
function listFamily() {
  // Sort the family
  family.sort(compare);

  /* Loop to print all family on the screen */
  for (var i = 0; i < family.length; i++) {
    person = family[i];
    createMessage(person);
  }

  /*  Print the list  */
  print(message);
}

/*  Find the person  */
function findPerson() {
  /*  Cycle through family*/
  for (var i = 0; i < family.length; i++) {
    person = family[i];

    if ( person.name.toLowerCase() === response.toLowerCase() ) {
      createMessage(person);
      break;
    }
  }

  /*  Print the person info  */
  print(message);
}

/*  Compare strings  */
function compare(a, b) {
  if ( a.name < b.name ) {
    return -1;
  } else  if ( a.name > b.name ) {
    return 1;
  }
  return 0;
}

/*  Find duplicate family */
function dupFamily() {
  // Sort the family
  family.sort(compare);

  /*  Cycle through duplicates, only for 2 not 3  */
  for (var i = 0; i < family.length-1; i++) {
    if ( family[i].name.toLowerCase() === family[i+1].name.toLowerCase() ) {
      createMessage(family[i]);
      createMessage(family[i+1]);
    }
  }

  /*  Print the person info  */
  print(message);
}


/* =================================
  Prompt loop
  ================================== */

/*  Prompt the user to select a user, list the users, or quit  */
while (true) {
  response = prompt("Enter a person's name:\n\nType 'list' to list the family, 'dup' do list duplicates, or quit' to exit.\n\n");

  /*  Initialize message  */
  message = "";

  /* Evaluate whether the user pressed the "Cancel" button first, i.e., null response  */
  if ( response === null ) {
    break;
  } else if ( response.toLowerCase() === 'quit' ) {
    break;
  } else if ( response.toLowerCase() === 'list' ) {
    listFamily();
  } else if ( response.toLowerCase() === 'dup' ) {
    dupFamily();
  } else {
    findPerson();
  }
}
