import { createElement } from "lwc";

import LessonOne from "c/lessonOne";

it("renders hello world", () => {
  const element = createElement("c-lesson-one", {
    is: LessonOne 
  });

  document.body.appendChild(element);
  const pElement = element.shadowRoot.querySelector("h1");

  expect(pElement.textContent).toBe("Hello, World!");
});


test("will fail", () => {
  const element = createElement("c-lesson-one", {
    is: LessonOne
  });

  document.body.appendChild(element);
  const pElement = element.shadowRoot.querySelector("h1");

  expect(pElement.textContent).toBe("Hi there!");
});
