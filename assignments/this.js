/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is the default behavior for the "this" keyword in javascript
* 2. Implicit binding happens when, dot notation is used to invoke a function, the left of the dot becomes the context for 
'this'
* 3. The 'new' keyword allows you to quickly create a new object using preset constraints
* 4. Explicit binding occurs when you clearly state what 'this' will be referring to , happens when .call() , .bind() , .apply() are used on a function
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

// Principle 3

// code example for New Binding
function Characters(name) {
    this.age = 18;
    this.affiliation = 'archer class';
    this.speak = function() {
        console.log('Hi I am ' + this.age + ' and I belong to the ' + this.affiliation )
    }
}
const emiya = new Characters('Emiya');

// Principle 4

// code example for Explicit Binding
const saber = {
    name: 'Arturia Pendragon',
    weapon: 'Excalibur',
    age: 18,
    master: 'Emiya',
    class: 'Saber Class'
}
const classes = ['archer', 'caster', 'rider']
function greeting(classes1, classes2, classes3) {
    return `I am ${this.name} from the ${this.class} we will need to defeat the servants of the ${classes1}, ${classes2}, and ${classes3} classes to win the war.`
}