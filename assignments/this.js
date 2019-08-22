/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window(undefined) binding
* 2. Implicit binding
* 3. 'new' keyword binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var windowVariable = this;
var boundToWindow = 'duro'
//console.log(windowVariable.boundToWindow);

// Principle 2

// code example for Implicit Binding
var obj = {
    name: 'duro',
    location: 'Lagos',
    dance: toDance,
}
function toDance () {
    return this.name + " don't dance";
}
//console.log(obj.dance());

// Principle 3

// code example for New Binding
function Laptop(make, processor, storage) {
    this.make = make;
    this.processor = processor;
    this.storage = storage;
}

let myWorktool = new Laptop('HP', 'Core i7', 2 + 'TB HDD')
//console.log(myWorktool);

// Principle 4

// code example for Explicit Binding
function tools (type, name) {
    return this.name = name;
}

tools.call('whatIUse', 'Screwdriver', 'Handtool');
tools.apply('whatIUse', ['Screwdriver', 'Handtool']);
var a = tools.bind('whatIUse', 'Screwdriver', 'Handtool');

//console.log(a());