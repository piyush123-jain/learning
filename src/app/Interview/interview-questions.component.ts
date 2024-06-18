import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-questions',
  templateUrl: './interview-questions.component.html',
  styleUrls: ['./interview-questions.component.css']
})
export class InterviewQuestionsComponent implements OnInit {
  constructor() { }
interview :any;
  ngOnInit() {
    this.interview  = [
        {
          title:"Tricky Questions",
          description:`
<br/><b>Questions:-</b><br/>
Execution Context and Scoping<br/>
<br/>
    var x = 10;<br/>
    function foo() {<br/>
      console.log(x);<br/>
      var x = 20;<br/>
    }<br/>
    foo();<br/> 
          
<b>Answer:</b> The output will be undefined.<br/>
<br/>
<b>Explanation:</b><br/>
This behavior is a result of hoisting, where variable declarations are moved to the top of their containing scope during compilation. Inside the foo function, the x variable is hoisted, but its value is assigned later, resulting in undefined being logged.
<br/>
<br/>
<b>Question 2:</b> Asynchronous Operations<br/>
async function asyncFunc() {<br/>
   console.log('A');<br/>
   await new Promise(resolve => setTimeout(resolve, 1000));<br/>
   console.log('B');<br/>
}<br/>
console.log('C');<br/>
asyncFunc();<br/>
console.log('D');<br/>        
<br/>
<b>Answer:</b> The order of output will be C, A, D, B.<br/>
<br/><br/>
<b>Note:</b> To tackle this question, it’s important to know about the “Event Loop” concept beforehand. If you’re not comfortable with this topic yet, I suggest watching the video below to get a better grasp before you continue.
<br/>
<br/>
<br/>
<b>Question 3:</b> Context and “this” Manipulation<br/>
const obj = {<br/>
   value: 42,<br/>
   getValue: function() {<br/>
       return this.value;<br/>
   }<br/>
};<br/>
<br/>
const anotherObj = {<br/>
   value: 99<br/>
};<br/>
<br/>
<br/>
console.log(obj.getValue());<br/>
console.log(obj.getValue.call(anotherObj));        <br/>
<b>Answer:</b> The output will be 42, 99.<br/>
<br/>
<br/>
<b>Explanation:</b> The value of this inside a function is determined by how the function is called. In the first console.log, obj.getValue() is called, so this refers to obj. In the second call, obj.getValue.call(anotherObj) explicitly sets this to anotherObj.
<br/>
<b>Question 4:</b> Mutation and Immutability<br/>
const obj = { prop: 'old' };<br/>
const arr = [obj];<br/>
<br/>
obj.prop = 'new';<br/>
console.log(arr[0].prop);        <br/>
Answer: The output will be 'new'.<br/>
<br/>
<b>Explanation:</b> The const keyword only prevents the variable itself from being reassigned. The object it references can still be mutated. The array arr holds a reference to the same object as obj, so changing the property value is reflected in the array.
`
        },

      {
        title:"Palindrome Number",
        description:``
      },
      {
        title:"Reverse a string",
        description:``
      },
      {
        title:"Fabionic serise",
        description:``
      },
      {
        title:"Armstrong Number",
        description:``
      },
      {
        title:"Second Largest number in an array",
        description:``
      },
      {
        title:"Armstrong Number",
        description:``
      },

    ];
  }

}
