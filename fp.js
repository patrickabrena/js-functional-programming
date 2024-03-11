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
UNDERSTAND_THE_HAZARDS_OF_USING_IMPERATIVE_CODE();

const AVOID_MUTATIONS_AND_SIDE_EFFECTS_USING_FUNCTIONAL_PROGRAMMING = () => {
  // The problem with the last challenge was that the original splice call in the tabClose() function cahnges the original array so the second call to is uses a modified array and gave unexpected results
  // That right there was a small example of aa larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.
};
AVOID_MUTATIONS_AND_SIDE_EFFECTS_USING_FUNCTIONAL_PROGRAMMING();
