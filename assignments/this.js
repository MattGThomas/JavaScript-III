/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is the default behavior for the "this" keyword in javascript
* 2. Implicit binding happens when, dot notation is used to invoke a function, the left of the dot becomes the context for 
'this'
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowExample(example) {
    console.log(this);
    return `I am an ${example} of window binding in js.`
}

// Principle 2
 
//code example for Implicit Binding
const dog = {
    name: 'fido',
    age: 3,
    speek: function() {
        return `woof woof`
    }
}
console.log(dog.speek())


// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding