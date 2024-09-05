/**
 * @public
 * # Refactoring Lesson 2
 * ---
 * In this lesson we are going to refactor the `lessonTwo` component to make it more reusable. We will create a new module that contains all the selectors we need to test.
 * ---
 * :pencil2: ## Try this yourself
 * - [ ] Create a new module that contains all the selectors we need to test.
 * - [ ] Import the new module into the test file.
 * - [ ] Update the test file to use the new module.
 * - [ ] Refactor the `lessonTwo` component to make it more reusable.
 * - [ ] Run the tests to ensure the component is working correctly.
 * - [ ] Commit the changes.
 * -- 
 */
import { createElement } from "lwc";
import lessonTwoRefactor from "c/lessonTwoRefactor";

import { screen } from "@testing-library/dom";

// Start a Jest test suite using the `describe` function.
describe("c-lesson-two-refactor", () => {
  let component = null; // null tells us there is nothing defined | undefined tells us we don't know

  // This block of code runs after each test.
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }

    component = null; // reset element
  });

  // This block of code runs before each test.
  beforeEach(() => {
    // create a new 'Hello World' component and attach to the DOM
    component = createElement("c-lesson-two-refactor", {
      is: lessonTwoRefactor
    });

    document.body.appendChild(component);
  });

  /**
   * @public
   * :exclamation: Here we are testing the same thing over and over again. We can begin to author modules that test various functionality
   *
   */
  const selectors = [
    "h1",
    "footer",
    "header",
    'input[type="checkbox"]',
    'input[type="number"]',
    'input[type="radio"]',
    'input[type="text"]',
    "li",
    "ul",
    "p",
    "a",
    "img"
  ];

  selectors.forEach((selector) => {
    it(`selects the ${selector} element`, () => {
      document.body.appendChild(component);
      const element = component.shadowRoot.querySelector(selector);

      /**
       * @public
       * :exclamation: screen.debug() is a function externalized by "@testing-library/dom". We can use it to see a human readable version of the DOM in the node runtime
       *
       */
      screen.debug();

      /**
       * @public
       * :bangbang: Notice that the assertion below has not changed. Meaning we are testing for the same thing for all elements. We can begin to author modules that test various functionality
       *
       */
      expect(element).toBeTruthy(); //* The assertion here has not changed
    });
  });
});
