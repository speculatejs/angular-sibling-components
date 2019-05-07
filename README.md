# angular-sibling-components

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-sibling-components)

Many examples exist which demonstrate data-sharing between child and parent components. This practice set introduces one way to pass data between components that share a parent (component siblings). The technique used here makes use of the @ViewChild decorator. (Other solutions to this problem make use of Angular services.)

Along the way, you will also:
  * Bind properties to DOM events and pass data to the bound function
  * Use the @Output decorator to pass information out of the component to its parent

Detailed instructions:

The example displays a menu of city names. When a name is clicked, details about the city are rendered in the content pane. A completed version can be viewed here:
[Angular Sibling Components Solution](https://angular-sibling-components-solution.stackblitz.io/) but don't look at the solution yet! That is available here:
[Solution Source](https://stackblitz.com/edit/angular-sibling-components-solution)

The exercise includes four "TODO" items:
  * Two are required in the HTML files
    * In the menu component, you must bind the DOM event     to a function in the menu component
    * In the app component you must bind the custom event
      which signals that the selected city has changed
  * Two are required in app.component.ts file
    * Implement the @ViewChild property in app component
      so app component can communicate with the content pane
    * Implement the handler for the custom selected city     event
  
  Once the todos are completed correctly, this example will have the functionality seen in the solution above. Good luck!


