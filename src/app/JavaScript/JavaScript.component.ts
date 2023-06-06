import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-JavaScript',
  templateUrl: './JavaScript.component.html',
  styleUrls: ['./JavaScript.component.css']
})

export class JavaScriptComponent implements OnInit {

  javascript:any;
  constructor(private viewportScroller: ViewportScroller) {}



  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
}
  ngOnInit() {
this.javascript  = [

  { title: "JavaScript",
    description:`<p>
    Javascript's syntax is havily inspired by C++, Java. Inner working of js is closer to dynamicall-typed,interpreted language.
    JavaScript is a most programing language for web developer to create dynamic page and interactive page for web page.
    JavaScript (JS) is a lightweight, interpreted or compiled programming language. many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.</p>`
  },
  { title: "Hosting",
    description:`<p>Hosting is concept to use variable and function before intilization and without getting errors. All this happen during the memorey creation phase.
<br/>    <b>Hosting</b> is a mechanisum where variable and function are declartion are moved to top of their scope before code execution
    <p class="code">
    // Hoisting
    function codeHoist(){<br/>
        a = 10;<br/>
        let b = 50;<br/>
    }<br/>
    codeHoist();<br/>
 <br/>
    console.log(a); // 10<br/>
    console.log(b); // ReferenceError : b is not defined<br/>
    </p>

    </p>`
  },
  {
    title:"How Javascripr Compiler work",
    description:`
    <img class="img-thumbnail" src="../assets/js-compiler.png"/>
    JS compilter take an file an parse the code and create lexical analysis of  the code and create <b>AST</b> abstract syntax tree.
    Check <a href="https://google.github.io/blockly-samples/examples/interpreter-demo/step-execution.html" target="_blank">AST</a> Tree here
    <br/><br/>
    `
  },
  {
    title:"Javascript Clouser",
    description:`A Clouser is a function that give you access to  use parent scope value inside the local socpe `
  },

  { title: "Lexical Scope / Closure:-",
    description:`
    <img class="img-thumbnail" src="../assets/lexical_scope.png"/><br/>

    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" target="_blank">Clousure</a><br/>
    <a href="https://www.educative.io/answers/lexical-scope-in-javascript" target="_blank">Lexical Scope</a><br/>

    <p>Lexical Scope is the ability for a function to access variable from the parent scope
        <p class="code">
        var first = 2;<br/>
        var addTwoNumber = function() {<br/>
            var second = 1;<br/>
            return first + second;<br/>
        };<br/>
<br/>
          addTwoNumber()    // 3<br/>
        </p><br/>

        In above code we saw <b>addTwoNumber</b> Function add two variable first and second.
        first variable outside the functional scope. This example show the lexical scope.


    </p>`
  },
  {
    title:"Function Currying",
    description:`when a function return another function untill the argument are fully supplied.
        Example:- <br/>
        function curry(f){<br/>
          return function(a){
              return function(b){
                return f(a,b);
              }
          }
        }

        const sum = (a,b)=> a+b;

        var curried  = curry(sum);

        console.log(curried(3)(4));
<a href="https://ui.dev/">Visualize js Code</a>
<a href="https://www.jsv9000.app/">JavaScript Visualizer</a>



    `
  },
  {
    title:"Global Execution Context",
    description:`Global execution context are the first who go inside the stack and
     then function, loops and other execution go inside and after all execution n `
  },
  {
    title:"Call,Apply & BInd",
    description:`
    <b>Call</b> invokes the function and allows you to pass in arguments one by one.<br/>
<b>Apply</b> invokes the function and allows you to pass in arguments as an array.<br/>
<b>Bind</b> returns a new function, allowing you to pass in a this array and any number of arguments.<br/>
<br/>
<b>Apply vs. Call vs. Bind Examples</b><br/>
--------------<br/>
<b>Call</b><br/>
<br/>
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};<br/>
var person2 = {firstName: 'Kelly', lastName: 'King'};<br/>
<br/>
function say(greeting) {<br/>
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);<br/>
}<br/>
<br/>
say.call(person1, 'Hello'); // Hello Jon Kuperman<br/>
say.call(person2, 'Hello'); // Hello Kelly King<br/>
<br/>
--------------<br/>
<b>Apply</b><br/>
<br/>
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};<br/>
var person2 = {firstName: 'Kelly', lastName: 'King'};<br/>
<br/>
function say(greeting) {<br/>
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);<br/>
}<br/>
<br/>
say.apply(person1, ['Hello']); // Hello Jon Kuperman<br/>
say.apply(person2, ['Hello']); // Hello Kelly King<br/>
<br/>
-------------<br/>
<b>Bind</b><br/>
<br/>
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};<br/>
var person2 = {firstName: 'Kelly', lastName: 'King'};<br/>
<br/>
function say() {<br/>
    console.log('Hello ' + this.firstName + ' ' + this.lastName);<br/>
}<br/>
<br/>
var sayHelloJon = say.bind(person1);<br/>
var sayHelloKelly = say.bind(person2);<br/>
<br/>
sayHelloJon(); // Hello Jon Kuperman<br/>
sayHelloKelly(); // Hello Kelly King<br/><br/><br/>
    `
  },
  {
    title:"Pure Function",
    description:`A pure is function that always return the same result if the same argument are passed`,
  },
  {
    title:"CONST,let & Var",
    description:`
    <b>CONST:</b> const is block scoped<br/>
    <b>Var:</b> var is function scoped<br/>
    <b>let:</b> let is block scoped<br/>
    `,
  },
  {
    title:"High order function",
    description:`A High order function is function that takes a function as an argument `
  },
  {
    title:"Cloning object in js (Deep Copy & shallow Copy)",
    description:`A variable assign to another variable in called <b>Shallow Copy</b>. In simple words, a reference variable mainly stores the address of the object it refers to. and then if you change anything in new variable changes will reflacte to pervious variable
    <br/>
let employee = {<br/>
  eid: "E102",<br/>
  ename: "Jack",<br/>
  eaddress: "New York",<br/>
  salary: 50000<br/>
}<br/>
<br/>
console.log("Employee=> ", employee);<br/>
let newEmployee = employee;    // Shallow copy<br/>
console.log("New Employee=> ", newEmployee);<br/>
<br/>
console.log("---------After modification----------");<br/>
newEmployee.ename = "Beck";<br/>
console.log("Employee=> ", employee);<br/>
console.log("New Employee=> ", newEmployee);<br/>
<br/>
<br/>

<b>Deep Copy:</b> <br/>
deep copy makes a copy of all the members of the old object, allocates a separate memory location for the new object, and then assigns the copied members to the new object. In this way, both the objects are independent of each other and in case of any modification to either one, the other is not affected. Also, if one of the objects is deleted the other still remains in the memory.
<br/>
let employee = {<br/>
  eid: "E102",<br/>
  ename: "Jack",<br/>
  eaddress: "New York",<br/>
  salary: 50000<br/>
}<br/>
console.log("=========Deep Copy========");<br/>
let newEmployee = JSON.parse(JSON.stringify(employee));<br/>
console.log("Employee=> ", employee);<br/>
console.log("New Employee=> ", newEmployee);<br/>
console.log("---------After modification---------");<br/>
newEmployee.ename = "Beck";<br/>
newEmployee.salary = 70000;<br/>
console.log("Employee=> ", employee);<br/>
console.log("New Employee=> ", newEmployee);<br/>
<br/><br/><br/>
    `
  },
  {
    title:"Sync / Async function",
    description:`
    <b>Sync:-</b><br/>
    the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.<br/><br/>

    <b>Async:-</b><br/>
    Async function declare with an async keyword  where the await keyword enable async, promise based behavior.
    Asynchronous provide a cleaner style code and avoiding  promise chaning.<br/>
    ways to perform async operation<br/>
    There are many ways we can perform async operation:-<br/>
    1) Call Back<br/>
    2) Promise<br/>
    3) async & await<br/>
    <br/><br/><br/>
    <b>Call back</b><br/>
    Call back is a way to pass function as argument in another function <br/>
    function call_back()<br/>{<br/> console.log("Call Back function")<br/> }<br/>
    function call_back_return(a,b,callback)<br/> {<br/>  return callback(a+b) <br/>}<br/>
    call_back_return(5,4);<br/><br/><br/><br/>
    <br/><br/><br/><br/>
    <b>Promise</b><br/>
    A promise is a special type of js Object. It produse  a value after an asynchronus operation complete sucessfully or error occur if it does not successfully due to some time out.<br/><br/>
    <b>State Of Promise</b><br/>
    1) Pending  <br/>
    2) Resolved <br/>
    3) Rejected <br/>
    <br/><br/>
    <b>Promise Static method</b><br/><br/>
    1) Promise.all()<br/>
    2) Promise.allSettled()<br/>
    3) Promise.any()<br/>
    4) Promise.race()<br/>
    5) Promise.resolved()<br/>
    6) Promise.reject()<br/>
    <br/><br/><br/>

    <b>Promise.all():</b><br/>
    Promise.all() static method and use when we have to perform multiple promise opeation and if one of promise are reject then  <br/>
    var p1 = Promise.resolve(3);<br/>
    var p2 = 1337;<br/>
    var p3 = new Promise((resolve, reject) => {<br/>
      setTimeout(resolve, 100, "foo");<br/>
    }); <br/>
    <br/>
    Promise.all([p1, p2, p3]).then(values => { <br/>
      console.log(values); // [3, 1337, "foo"] <br/>
    });<br/><br/><br/>

    <b>Promise.allSettled():</b><br/>
    The <b>Promise.allSettled()</b> method returns a promise that resolves
    after all of the given promises have either fulfilled or rejected,<br/>
    with an array of objects that each describes the outcome of each promise.<br/><br/>

    const promise1 = Promise.resolve(3);<br/>
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));<br/>
    const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'));<br/>
    const promises = [promise1, promise2,promise3];<br/>
    <br/>
    Promise.allSettled(promises).<br/>
    then((results) => results.forEach((result) => console.log(result)));<br/><br/><br/><br/>

    <b>Promise.any():</b><br/>

    It's staic method that take multiple array of promise as input and return when single promise are resolve fast.
    It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.<br/>
    <br/>
    const promise1 = Promise.reject(0);<br/>
    const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));<br/>
    const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));<br/>
    <br/>
    const promises = [promise1, promise2, promise3];<br/>
    <br/>
    Promise.any(promises).then((value) => console.log(value));<br/>
    <br/><br/>
    <b>Promise.race()</b><br/>
    This method take multiple promise and return only single promise whose complete first<br/>
    function sleep(time, value, state) {<br/>
      return new Promise((resolve, reject) => {<br/>
        setTimeout(() => {<br/>
          if (state === "fulfill") {<br/>
            return resolve(value);<br/>
          } else {<br/>
            return reject(new Error(value));<br/>
          }<br/>
        }, time);<br/>
      });<br/>
    }<br/>
    <br/>
    const p1 = sleep(500, "one", "fulfill");<br/>
    const p2 = sleep(100, "two", "fulfill");<br/>
    <br/>
    Promise.race([p1, p2]).then((value) => {<br/>
      console.log(value); // "two"<br/>
      // Both fulfill, but p2 is faster<br/>
    });<br/>
    <br/><br/>
    `
  }

]

  }

}
