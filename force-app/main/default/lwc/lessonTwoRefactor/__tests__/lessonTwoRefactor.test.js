
import { createElement } from "lwc";
import lessonTwoRefactor from "c/lessonTwoRefactor";

import { screen } from "@testing-library/dom"; 

describe("c-lesson-two-refactor", () => {
  let component = null;

    afterEach(() => {
      while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
      }

      component = null;
    });

  beforeEach(() => {
    component = createElement("c-lesson-two-refactor", {
      is: lessonTwoRefactor
    });

    document.body.appendChild(component);
  });

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
      screen.debug();
      expect(element).toBeTruthy(); //* The assertion here has not changed
    });
  });
});
