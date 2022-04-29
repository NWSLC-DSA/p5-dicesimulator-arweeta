# :wave: The Basics of P5 

## 🤓 Course overview and learning outcomes 💻

Following on from the varaibles and parameters second exercise. You should have a project resembling something similar to the sketch.js file found within this repository. We should be able to control the location and size of the dice we are drawing on the screen. If you were to run the sketch within this repository, you should see something similar to this;
![image](https://user-images.githubusercontent.com/67816866/150931163-b0f7981d-cc91-4187-b5f6-5606b306a107.png)

Pay close attention to the functions we are calling. All of the function signatures follow the same pattern. 
  
  ```js 
    function exampleDice(size, xPoint, yPoint) {
      .
      .
      .
    }
   ```
This may be different to the implementation within your project and doesn't really matter if you are using the example you have created.

When we roll a dice a random outcome is provided by the result on the face of the dice. This assignment will focus adding this functionality to our dice. Before continuing on, take a few minutes to plan out how this will be done in your code. 

* Think about the tools you have learnt over the past couple of assignments. What do you need to know or remember in order to produce a random dice face? 


## If Statements
[Mozilla If...Else Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) This link will take you to the Mozilla documentation regarding if...else statements. 

If statements are executed if the condition returns a true value. This is known as a truthy value. (Documentation on truthy and falsy values can be found here [Mozilla truthy and falsy Documentation](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).

The syntax for an if...else statement is shown below.

```js
  if (condition) {
     statement1
  } else {
     statement2
  }
```
The relational operators documentation can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators). These are some of the most common operators used in conjunction with the If statements.



## Task - Add an If...Else statement to the Draw() Function in your sketch.
Before we add an If...Else statement to the Draw() function we need to think about what we want to check is resulting as true.

* What do we want to check is true?

Think in terms of the dice, we have several different faces. How are we going to determine what face we want to display on the screen? 


*Think about the previous section where you wrote down what you may need to simulate rolling a dice.*



<details>
  <summary> Adding the if statement </summary>
  My process can pe found below. If you don't want to see my process, continue on. You can always come back and see how my process compares to yours. 
  <details>
    <summary> My intent </summary>
    
     * I will create a global variable to remember the value that needs to be drawn on screen
    
     * I will need to add an If statement to the Draw() Function in order to draw the correct dice face
    
     * I will need some mechanism to generate a random number that the dice face on the screen will reflect
    
  </details>
  
  For my implementation I am going to use a Global variable to remember the value that has been rolled. This is what I will use within my If statement to evaluate my true clauses. This may seem strange but because of the Draw() function being called constantly, the drawing is constantly refreshed in the background. If I was to call the function just once, I wouldn't see the dice after the first refresh.

  The following screenshot show the global variable implementation
![image](https://user-images.githubusercontent.com/67816866/150936407-5a8da22d-443a-4ad3-8cd8-2955d42e8a51.png)

  This variable has been created outside of any function and using the var keyword.

  Now that I have a location to store my dice roll, I can start to think about the if statement. 

  In the example I have 6 dice functions defined. These represent each face on a 6 sided dice.

  * Why has this variable been created where it has?

  * Why haven't I used the const keyword to describe this variable? 


  ## My first attempt at an If statement to draw the dice face.
  The following screenshot show the first implementation of my If statement. This implementation is designed to draw the face of the dice representing 'one' when dice value is equal to one. 
  ![image](https://user-images.githubusercontent.com/67816866/150938825-03bc521e-8b0d-49c4-ab1a-ca8cc7058f6a.png)

  🧐 'Hmm... This doesn't seem to be outputting anything on the screen...' Why does the example in the above screenshot not seem to be outputting anyting? Write down some suggestions to make the dice output to the screen.
  
  
  ## Task - Make the dice appear on the screen
  Add screenshots of the changes you have made to make the dice appear on the screen.
  
  
  
  ## Task - Expand the If statement
  Add more conditions to the If statment. Are you catering for all possible dice face?
  Add a screenshot of your changes. 
  
  
  How did you test these changes?
  
  
  ## Extension Task - Can you add a button to change the value of the dice? 
  [p5.js Button Documentation](https://p5js.org/reference/#/p5/createButton) Using this documentation, can you add a button to change the value of the dice being displayed? 

  Take a minute and think about this, what needs to change? 

  *Write down the process you want the user to do in order to 'roll the dice'.* What does this include? 
  
  
</details>
  
## 📚  Resources / References
* [Mozilla If...Else Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
* [Mozilla truthy and falsy Documentation](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
* [Mozilla Boolean documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
* [p5.js Point Function Reference](https://p5js.org/reference/#/p5/point) 
* [p5.js Square Function Reference](https://p5js.org/reference/#/p5/square)
* [p5.js Stroke Width Function Reference](https://p5js.org/reference/#/p5/strokeWeight)
