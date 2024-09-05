/**
 * @public
 * #Lesson Three
 * ##Unit Testing
 * ---
 * In this lesson we introduce unit testing in earnest. We write a self contained module to test a component. We also delve deeper into writing assertions.
 */

import { createElement } from "lwc";
import LessonThree from "c/lessonThree";
import { screen } from "@testing-library/dom";

describe("c-lesson-three", () => {
  let component = null;
  const nameProp = "Jay"; // Mocking the @api name property


  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  beforeEach(() => {
    component = createElement("c-lesson-three", {
      is: LessonThree
    });

    document.body.appendChild(component);
  });

  it("should render the heading", () => {
    const heading = component.shadowRoot.querySelector("h1");
    expect(heading).not.toBeNull();
  });

  test("the name prop should be undefined", () => {
    // do not populate the @api name property

    expect(component.name).toBe(undefined); // assert
  });

  it("should render the greeting without a name", () => {
    // do not populate the @api name property

    const greeting = component.shadowRoot.querySelector("h1"); // select
    expect(greeting.textContent).not.toBe(`Hello, ${nameProp}!`); // assert
    expect(greeting.textContent).toBe(`Hello, !`); // assert
  });

  it("should render the greeting with a name", () => {
    document.body.removeChild(document.body.firstChild); // remove the child appended at the before each phase
    component.name = nameProp; // populate the @api name property
    document.body.appendChild(component); // now append the component with the name property added

    const greeting = component.shadowRoot.querySelector("h1"); // select
    screen.debug()
    expect(greeting.textContent).toBe(`Hello, ${nameProp}!`); // assert
  });
});


