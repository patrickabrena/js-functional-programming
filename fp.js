//start of javascript functional programming
const LEARN_ABOUT_FUNCTIONAL_PROGRAMMING = () => {
  // Functional programming is a style of programming where solutions are simple, isolated functions without any side effects of outside of the function's scope
  // INPUT -> PROCESS -> OUTPUT
  // Functional programming is about:
  // 1. Isolated functions - there eis no dependence on the state of the program, which includes global variables that are subject to change
  // 2. Pure functions - the sam einput always givves the same output
  // 3. Functions with limiteed side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled.
  // THe members of freeCodeCamp happen to lovve tea.
  // In the code editor, the prepareTea and getTea functions are already defined for you. Call the getTea function to get 7 cuups of tea for the team, and store them in th tea4TeamFCC variable
  // Function that returns a string representing a cup of green tea
  const prepareTea = () => "greenTea";

  /*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
  const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
  };

  // Only change code below this line
  const tea4TeamFCC = getTea(7);
  console.log(tea4TeamFCC);

  // Only change code above this line
};
// LEARN_ABOUT_FUNCTIONAL_PROGRAMMING();

const UNDERSTAND_FUNCTIONAL_PROGRAMMING_TERMMINOLOGY = () => {
  // The FCC team changed their mind and now wwants two types of tea: green teea and black tea.
  // GENERAL FACT: Client will change their mind a lot.. *hint hint* for real world projects
  // With that information, we'll need to revisit the "getTea" function from the last challenege to handle various tea requests.
  // We can modify getTea to accept a function as a parameter to be able to change the type of tea it prepares. This makes getTea more felxible, and gives the programmer more control when client requests change
  //
  // First, let's covver some functional terminology
  //
  // Callbacks are the functions that are slipped or passed into ANOTHER function to decide the invocation of that function.  You may have seen them passed to other methods,
  // Eg. in "filter", the callbakc function tells JavaScript the criteria for how to filter an array.
  //
  // Functions that can be assigned to a variable, passed into another, or returned from another function just like any other normal value, are called FIRST CLASS functions
  //
  // Functions that take a functions as an argument, or return a function as a return value, are called HIGHER ORDER FUNCTIONS
  //
  // When functions are passed into or returned from another function, then those functinos which were passed in or returned can be called a LAMBDA
  //
  /******/
  //
  // Prepare 27 cups of green teea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. Note that the getTea function has been modified so it now takes a function as the first argument
  //
  // Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons
  //
  // Function that returns a string representing a cup of green tea
  const prepareGreenTea = () => "greenTea";

  // Function that returns a string representing a cup of black tea
  const prepareBlackTea = () => "blackTea";

  /*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
  const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
  };

  // Only change code below this line
  const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
  const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
  // Only change code above this line

  console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
};
// UNDERSTAND_FUNCTIONAL_PROGRAMMING_TERMMINOLOGY();

const UNDERSTAND_THE_HAZARDS_OF_USING_IMPERATIVE_CODE = () => {
  // Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. But before we get there, let's look at an IMPERATIVE APPROACH to programming to highlight where you may have issues
  //
  // In English, the imperative tense is used to give commands. Similarly, an IMPERATIVE PROGAMMING STYLE is one that give the computer a set of statements to perform a task
  //
  // Often the statemetns change the state of the program, like updating globaal variables. A classic example is writing a forLoop that gives exact directions to iterate over the indices of an array
  //
  // In contrast, FUNCTIONAL PROGRAMMING is a form ofo declaritive programming. You tell the computer what you want done by calling a method or function.
  //
  // JavaScript offers many predefined methods that handle common tasks so you don't need to writee out how the computer should perform them.
  // Eg. instead of using forLoop, you could use the "map" method which handles the details of iterating oer an array. This helps avoid errors
  //
  // COnsider the scenario: you are browsing the web in your browswer, and want to track the tabs you have opened. Let's try to modeel this using some simple object-oriented code.
  //
  // A Window object is made up of tabs, and most likely have more than one window open. The titles of each open site in each Widnow object is held in an array. After working in the browser, you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs(for simplicity) get added to the end of it.
  //
  // The code editor shows an implentation of this functionality with functions for tabOpen(), tabClose(), and join(). The array tabs is part of the Window object that stores the name of the open pages.
  //
  // Examine the code in the editor. It''s using a method that has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is slightly different
  //
  // Change Window.prototype.tabClose so that it removes the correct tab
  //
  /***ACTUAL EXAMPLE BELOW***/
  //
  // tabs is an array of titles of each site open within the window
  const Window = function (tabs) {
    // const Window = function(tabs) : this line declares a constructor function named "Window" that takes a "tabs" param which in this case would be an array

    this.tabs = tabs; // We keep a record of the array inside the object
    // this.tabs = tabs : inside the defined constructor function, "Window", "this.tabs" is used to assign the provided "tabs" array to the "tabs" property of the newly creaated window object.
    // THat line essentially stores the array of open tabs within the window object.
    // So when I create a new window uusing the "Window" constructor, it will have a PROPEERTY "tabs" that holds the array of titles of each site open within that window
    /*
    const myWindow = new Window(['Site1', 'Site2', 'Site3']);
console.log(myWindow.tabs); // Output: ['Site1', 'Site2', 'Site3']

    */
  };

  // When you join two windows into one window
  Window.prototype.join = function (otherWindow) {
    // Window.prototype.join = function(othereWindow) : this line adds a method named "join" to the PROTOTYPE of the "Window" constructor.
    // This means that ALL INSTANCES of the Window object will have access to this method
    this.tabs = this.tabs.concat(otherWindow.tabs);
    // this.tabs = this.tabs.concat(otherWindow.tabs) : Inside the "join" method (remember a method is a property value that is a function), it concatenates the "tabs" array of the current window which is "this.tabs" with the tabs array of another window "otherWindow.tabs"
    // The result is a new array containing the combined tabs
    return this;
    // After combining the tabs, it returns the current window object "this".
    // this allows for chaining, where yo ucan perform multiple operations on a window objecet in a single chain
    //
    // When you call the "join" method on a window object, passing another window as an arugment, the tabs of theh two windows are combined and the modified window object is returned.
    // EXAMPLE OF THIS BELOW
    /*
    const window1 = new Window(['Tab1', 'Tab2']);
const window2 = new Window(['Tab3', 'Tab4']);

const combinedWindow = window1.join(window2);
console.log(combinedWindow.tabs); // Output: ['Tab1', 'Tab2', 'Tab3', 'Tab4']

    */
  };

  // When you open a new tab at the end
  Window.prototype.tabOpen = function (tab) {
    // Window.prototype.tabOpen = function(tab) : This lines adds a method named "tabOpen" to the prototype of the "Window" constructor. Like the previous "join" method, this means that ALL INSTANCES of "Window" objet will have access to this method
    this.tabs.push("new tab"); // this is what displays in the array when neew tab is opened
    // this.tabs.push("new tab") : Inside the "tabOpen" method, it uses the "push" method to add a new element (in this case "new tab") to the end of the "tabs" array of the current window "this.tabs"
    return this;
    //return this; : After opening a new tab, it returns the curreent window object "this". The code here allows for chaining, where you can perform multiple operations on a window object in a single chain
    //
    // SO, when I call the "tabOpen" method on a window object, it adds a new tab to the end of the tabs array, and the modified window objecet is returned.
    // Example below
    /*
    const myWindow = new Window(['Tab1', 'Tab2']);
myWindow.tabOpen();
console.log(myWindow.tabs); // Output: ['Tab1', 'Tab2', 'new tab']

    */
  };

  // When you close a tab
  Window.prototype.tabClose = function (index) {
    // the param "index" is the index that we want to close
    // Only change code below this line
    //
    /*** REMEMBER THE DIFFERENCE BETWEEN SLICE AND SPLICE***/
    /*
    1. "slice" method
      - "slice(start, end)" 
      - returns a shallow copy of a portion of the array from "start" to "end", where start is inclusive and "end" is exclusive
    2. "splice" method
      - "splice(start, numberOfIndexesToDelete, elementsToAddIfAnyStartingAtInsertion)
      const CONTAINED_EXAMPLE = () => {
      const numbers = [10, 11, 12, 12, 15];
      const startIndex = 3;
      const amountToDelete = 1;

      numbers.splice(startIndex, amountToDelete, 13, 14);
      //will remove that second 12 and add 13, and 14 to the array
      console.log(numbers);
      - modifies the original array by removing or replacing existing elements and/or adding new elements stasrting from the specified "start" index
  };
      
    */
    //
    /* THE REASON WHY SLICE AND NOT SPLICE */
    /*
    In the contexxt of my codee, for closing a tab, using "slice" is appropriate because I want to create a new array that represents the tabs before and after the specified index without modifying the original array.

    I want to extract the tabs before and after the specified index without altering "this.tabs."
    "slice" is used here to achieve this without modifiying the original array

    If I were to use splice in this context, it would modify the original array, which might lead to unexpected behaviour and could potentially impact other parts of your application that reely on the state of the original array

    In summary, "slice" is appropriate when you want to createe a new array without modifying the original 
    */
    // const tabsBeforeIndex = this.tabs.splice(0, index); //
    const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
    // const tabsAfterIndex = this.tabs.splice(index + 1); //
    const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

    // Only change code above this line

    return this;
  };

  // Let's create three browser windows
  const workWindow = new Window([
    "GMail",
    "Inbox",
    "Work mail",
    "Docs",
    "freeCodeCamp",
  ]); // Your mailbox, drive, and other work sites
  const socialWindow = new Window([
    "FB",
    "Gitter",
    "Reddit",
    "Twitter",
    "Medium",
  ]); // Social sites
  const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); // Entertainment sites

  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);
};
// UNDERSTAND_THE_HAZARDS_OF_USING_IMPERATIVE_CODE();

const AVOID_MUTATIONS_AND_SIDE_EFFECTS_USING_FUNCTIONAL_PROGRAMMING = () => {
  // The problem with the last challenge was that the original splice call in the tabClose() function cahnges the original array so the second call to is uses a modified array and gave unexpected results
  // That right there was a small example of aa larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.
  // Oonne of thee core principles of functional programming is to NOT change things. Changes lead to bugs. It's easier to prevent bugs knowing tha tyour functions don't change anything, including the function arguments or any global variable.
  // The previous example didin't havee any complicateed operations but the splice method changed the original array, and resulted in a bug.
  // Recall that in funnctional prgramming, changing or altering things is called MUTATION, and the outcome is called a SIDE EFFECT.
  // A function, ideally, should be a pure function, meaning that it does not cause any side effects.
  // Let's try to master this discipline and NOT alter any variable or object in our code.
  /*****/
  // Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one

  // The global variable
  /*let fixedValue = 4;

  function incrementer() {
    // Only change code below this line
    // Only change code above this line
  }
  */
  // The global variable
  let fixedValue = 4;

  function incrementer() {
    // Only change code below this line
    let test = fixedValue + 1;

    return test;

    // Only change code above this line
  }
  // console.log(incrementer());
};
// AVOID_MUTATIONS_AND_SIDE_EFFECTS_USING_FUNCTIONAL_PROGRAMMING();

const PASS_ARUGMENTS_TO_AVOID_EXTERNAL_DEPENDENCE_IN_A_FUNCTION = () => {
  // The last challenege was a step closer to functional programming principles, but there is still something missing.
  // We didn't alteer the global variable value, but the function incrementer would not work without the global vaariable fixedValue being there.
  // Another pricincple of functional programming is to delcare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
  // There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program
  // This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot changee and you can see where the potential traps are.
  // Finally, the function would always produce the same outp[ut fro the same set of inputs, no matter what part of the code executes it.
  /*****/
  // Let's update the incrementer function to clearly deeclare its dependencies
  // Write the increementeer function so it takes an argument, aand then returns a result after increasing the vaalue by one
  /*
  // The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer() {


  // Only change code above this line
}
  */
  // The global variable
  let fixedValue = 4;

  // Only change code below this line
  function incrementer(someVal) {
    let answer = someVal + 1;
    console.log(answer);
    return answer;
    // Only change code above this line
  }
  console.log(incrementer(fixedValue));
};
// PASS_ARUGMENTS_TO_AVOID_EXTERNAL_DEPENDENCE_IN_A_FUNCTION();

const REFACTOR_GLOBAL_VARIABLEES_OUT_OF_FUNCTIONS = () => {
  // So far, we have seen two distinct pricinciples for functional programming
  // 1. DON"T ALTER A VARIABLE OR OBJECT - creaate new variables and objects and return them if need be from a function. HINT: using something like const newArr = arrVar where arrVar is an array will simple create a refeereence to the existing variable and NOT A COPY. so changing thee value in newArr WILL CHANGE the value in arrVar
  // 2. Declare function parameters - any computation insde a function depends only on the arguments passeed to the function, and not on any global object or variable
  /*****/
  // Rewrite theh code so the global array bookList is not changed insde, either function. The add function should add the giveen bookName to the end of the array passed to it and return a new array (list). The remove function should removve the given boookName from the array passed to it.
  // Note: Borth functino should return an array, and any new paramters should be added before the bookName parameter
  /*
  // The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}
  */
  // The global variable
  const bookList = [
    "The Hound of the Baskervilles",
    "On The Electrodynamics of Moving Bodies",
    "Philosophiæ Naturalis Principia Mathematica",
    "Disquisitiones Arithmeticae",
  ];

  // Change code below this line
  // create param to take in bookList as an argument
  function add(someList, bookName) {
    // create a copyy of the bookList using slice since it returns a shallow copy of the array and doeesn't modify the original
    // first need to init a new bookList
    // create a var lastIndex to use as a param for the slice method on bookList NOTE: have to use .length and not .length - 1 because second param in slice is NOT inclusive
    let lastIndex = someList[someList.length];
    console.log(lastIndex); // will console undefined because bookList[4] doesn't exist
    let addToBookList = someList.slice(0, lastIndex);
    // console.log(addToBookList);
    /* above will console
    [
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae'
]

Above is a perfect copy of the original bookList arr
    */
    addToBookList.push(bookName);
    return addToBookList;

    // Change code above this line
  }
  console.log(add(bookList, "Harry Potter"));
  // Change code below this line
  // create param to take in bookList as an argument
  function remove(someList, bookName) {
    // init variablee to make another copy of BookList and call it removeFromBookList and also copy lastIndex var into this function scope
    let lastIndex = someList[someList.length];
    let removeFromBookList = someList.slice(0, lastIndex);
    const book_index = removeFromBookList.indexOf(bookName); // indeexOf will reeturn -1 if the name of the book doesn't exist in the array
    console.log(removeFromBookList.indexOf("The Hound of the Baskervilles")); // returns 0 because that's the index of that book title that was called with the indexOf method
    if (book_index >= 0) {
      removeFromBookList.splice(book_index, 1);
      //above uses the splice method to delete the title of the book from the removeFromBookList array
      return removeFromBookList;

      // Change code above this line
    }
  }
  console.log(remove(bookList, "Disquisitiones Arithmeticae"));
};
// REFACTOR_GLOBAL_VARIABLEES_OUT_OF_FUNCTIONS();

const USE_THE_MAP_METHOD_TO_EXTRACT_DATA_FROM_AN_ARRAY = () => {
  // So far we have learned to use pure function to avoide side effects in a program. Also, we have seen the value in having a function only depend on its input arguments
  //
  // This is only the beginning!
  //
  // It would make sense to be able to pass them as arguments to other functions, and return a function from another function. Functions are considered FIRST CLASS OBJECTS in Javascript, which means they can be used like any other object. They can be saved in variables, stored in an objet, or passed as function arguments.
  //
  // Let's start with some simple array functions, which are methods on the array object prototype. In this exercise we are looking at Array.prototype.map() or more simply, map
  //
  // The map method iterates over each item in an array and returns a new array containing the results of calling thee callback functioni on each element. It does this without mutating the original array
  //
  // When the callback is used, it is passed three arguments. The first argument is the current element being processed. The scond is the index of that elemnt and the thrid is the array upong which the map method wass called
  //
  // See below for an exxammple using the map method on the users array to return a new arary containing only the names of the uses aas elements. For simplicity, the ehexample only uses the first arguemnte of the callback

  const EX = () => {
    //
    const users = [
      { name: "John", age: 34 },
      { name: "Amy", age: 20 },
      { name: "camperCat", age: 10 },
    ];
    // code below uses the map meethod on the "users" array. The map method creeatees a new array by callinga  provided function on each element of the original array
    //
    // In thiis casee, the provided function is an arrow function "user => user.name". This function takes each objects from the "users" aarray and reeturns only thee "name" property of that object. So, "names" will be an array containing only thee names of the users from the "users" array
    const names = users.map((user) => user.name);
    // console.log(names);
    //above will log [ 'John', 'Amy', 'camperCat' ]
  };
  EX();
  /******/
  //
  // The watchList array holds objets with information on several movies. Use map on watchList to assign a new array of objects to the ratings variable. EEach movie in the new array should have only a title key with the name of the film
  //
  // The global variable
  const watchList = [
    {
      Title: "Inception",
      Year: "2010",
      Rated: "PG-13",
      Released: "16 Jul 2010",
      Runtime: "148 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer: "Christopher Nolan",
      Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      Language: "English, Japanese, French",
      Country: "USA, UK",
      Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
      Poster:
        "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.8",
      imdbVotes: "1,446,708",
      imdbID: "tt1375666",
      Type: "movie",
      Response: "True",
    },
    {
      Title: "Interstellar",
      Year: "2014",
      Rated: "PG-13",
      Released: "07 Nov 2014",
      Runtime: "169 min",
      Genre: "Adventure, Drama, Sci-Fi",
      Director: "Christopher Nolan",
      Writer: "Jonathan Nolan, Christopher Nolan",
      Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Language: "English",
      Country: "USA, UK",
      Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
      Poster:
        "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.6",
      imdbVotes: "910,366",
      imdbID: "tt0816692",
      Type: "movie",
      Response: "True",
    },
    {
      Title: "The Dark Knight",
      Year: "2008",
      Rated: "PG-13",
      Released: "18 Jul 2008",
      Runtime: "152 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer:
        "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      Language: "English, Mandarin",
      Country: "USA, UK",
      Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
      Poster:
        "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      Metascore: "82",
      imdbRating: "9.0",
      imdbVotes: "1,652,832",
      imdbID: "tt0468569",
      Type: "movie",
      Response: "True",
    },
    {
      Title: "Batman Begins",
      Year: "2005",
      Rated: "PG-13",
      Released: "15 Jun 2005",
      Runtime: "140 min",
      Genre: "Action, Adventure",
      Director: "Christopher Nolan",
      Writer:
        "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      Language: "English, Urdu, Mandarin",
      Country: "USA, UK",
      Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      Poster:
        "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      Metascore: "70",
      imdbRating: "8.3",
      imdbVotes: "972,584",
      imdbID: "tt0372784",
      Type: "movie",
      Response: "True",
    },
    {
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Language: "English, Spanish",
      Country: "USA, UK",
      Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
      Poster:
        "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      Metascore: "83",
      imdbRating: "7.9",
      imdbVotes: "876,575",
      imdbID: "tt0499549",
      Type: "movie",
      Response: "True",
    },
  ];

  // Only change code below this line

  // const ratings = [];
  // for (let i = 0; i < watchList.length; i++) {
  //   ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
  // }

  const ratings = watchList.map((item) => ({
    // item param is each object in the array and the values to the keys "title", and "rating" are accessed using bracket notation to get that property of each object(item)
    title: item["Title"],
    rating: item["imdbRating"],
  }));
  // Only change code above this line

  console.log(JSON.stringify(ratings));
};
// USE_THE_MAP_METHOD_TO_EXTRACT_DATA_FROM_AN_ARRAY();
