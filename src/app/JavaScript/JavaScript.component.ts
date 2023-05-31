import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-JavaScript',
  templateUrl: './JavaScript.component.html',
  styleUrls: ['./JavaScript.component.css']
})

export class JavaScriptComponent implements OnInit {

   javascript  = [
    { title: "JavaScript",
      description:`<p>
      JavaScript is a most programing language for web developer to create dynamic page and interactive page for web page.
      JavaScript (JS) is a lightweight, interpreted or compiled programming language. many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.</p>`
    },
    { title: "Hosting",
      description:`<p>Hosting is concept to use variable and function before intilization and without getting errors. All this happen during the memorey creation phase

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
    { title: "Lexical Scope",
      description:`<p>Lexical Scope is the ability for a function to access variable from the parent scope
          <p class="code">
          var first = 2;<br/>
          var addTwoNumber = function() {<br/>
              var second = 1;<br/>
              return first + second;<br/>
          };<br/>
<br/>
            addTwoNumber()    // 3<br/>
          </p><br/>

          In above code we saw <b>addTwoNumber</b> Function add two variable first and second. first variable outside the functional scope. This example show the lexical scope.


      </p>`
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
