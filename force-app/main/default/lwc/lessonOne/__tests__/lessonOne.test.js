// Import the `createElement` function from the LWC library to create an instance of our component.
import { createElement } from "lwc";

// Import the Component you want to test as well
import LessonOne from "c/lessonOne";

/**
 * @public
 * :pushpin: # This test checks if the component renders the correct greeting message.
 *
 * ## Test writing process
 * - create the ```it()/test()``` block to test one specific functionality
 * - create element with: ```createElement()```
 * - add the element into the DOM with: ```appendChild()```
 * - Select the element/component you want to test: ```element.shadowRoot.querySelector()```
 * - Make assertions on what the text should expect to happen on execution: ```expect()```
 */

/**
 * @public
 * :exclamation: # it()
 * Start a test case using the `it` function. ```it()``` is a function provided by Jest.
 * ---
 * The it() function
 * Every Jest test begins with the it() function, which accepts two required arguments and one optional argument:
 * - A string describing the functionality being tested
 * - A callback function containing the testing logic to execute
 * - An optional timeout value in milliseconds. The Jest test must wait for this timeout to complete before completing the test
 * 
 * Each it() function call will produce a separate line in the testing report. In order for a given test to pass, the test callback must run without throwing errors or failed expect() assertions.
 * The it() function is an alias for test().
 */
it("renders hello world", () => {
  /**
 * @public
 * :exclamation: The createElement() method creates an element node.
 */
  const element = createElement("c-lesson-one", {
    is: LessonOne // Pass the `LessonOne` component to the `is` property.
  });

  // Append the component to the document body.
  document.body.appendChild(element);
  
  // Find the heading element within the shadow DOM of the component.
  const pElement = element.shadowRoot.querySelector("h1");

  // Expect that the text content of the heading element is 'Hello, World!'.
  expect(pElement.textContent).toBe("Hello, World!");
});

// /**
//  * @public
//  * :paperclip: What the passing test results look like
//  * TODO: Passing test image here
//  */

/**
 * @public
 * :pushpin: Don't panic!
 * This test is used to demonstrate what a failing test will look like in the CLI tool.
 */
test("will fail", () => {
  const element = createElement("c-lesson-one", {
    is: LessonOne
  });

  document.body.appendChild(element);
  const pElement = element.shadowRoot.querySelector("h1");

  // The assertion here will fail because the text content of the paragraph element is 'Hello, World!'
  expect(pElement.textContent).toBe("Hi there!");
});

/**
 * @public
 * :paperclip: What the failing test results look like
 * TODO: Failing test image here
 */
