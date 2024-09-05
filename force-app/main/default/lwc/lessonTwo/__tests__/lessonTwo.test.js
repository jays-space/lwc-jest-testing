import { createElement } from "lwc";
import LessonTwo from "c/lessonTwo";

import { screen } from "@testing-library/dom"; 

describe("c-lesson-two", () => {
  // let component = null; 

  // afterEach(() => {
  //   while (document.body.firstChild) {
  //     document.body.removeChild(document.body.firstChild);
  //   }

  //   component = null;
  // });

  // beforeEach(() => {
  //   component = createElement("c-hello-world", {
  //     is: LessonTwo
  //   });
    
  //   document.body.appendChild(component);
  // });


  it("selects the heading element", () => {
    const component = createElement("c-hello-world", {
      is: LessonTwo
    });

    document.body.appendChild(component);
    const element = component.shadowRoot.querySelector("h1");
    screen.debug();
    expect(element).toBeTruthy();
  });

  it("selects the footer element", () => {
    const component = createElement("c-hello-world", {
      is: LessonTwo
    });

    document.body.appendChild(component);
    const element = component.shadowRoot.querySelector("footer");
    screen.debug();
    expect(element).toBeTruthy();
  });

  it("selects the header element", () => {
    const component = createElement("c-hello-world", {
      is: LessonTwo
    });

    document.body.appendChild(component);
    const element = component.shadowRoot.querySelector("header");
    screen.debug();
    expect(element).toBeTruthy();
  });

  it("selects the checkbox element", () => {
    const component = createElement("c-hello-world", {
      is: LessonTwo
    });

    document.body.appendChild(component);
    const element = component.shadowRoot.querySelector(
      'input[type="checkbox"]'
    );
    screen.debug();
    expect(element).toBeTruthy();
  });

  it("selects the number element", () => {
    const component = createElement("c-hello-world", {
      is: LessonTwo
    });

    document.body.appendChild(component);
    const element = component.shadowRoot.querySelector('input[type="number"]');
    screen.debug();
    expect(element).toBeTruthy();
  });

  it("selects the radio element", () => {
    const component = createElement("c-hello-world", {
      is: LessonTwo
    });

    document.body.appendChild(component);
    const element = component.shadowRoot.querySelector('input[type="radio"]');
    screen.debug();
    expect(element).toBeTruthy();
  });

  it("selects the text element", () => {
    const component = createElement("c-hello-world", {
      is: LessonTwo
    });

    document.body.appendChild(component);
    const element = component.shadowRoot.querySelector('input[type="text"]');
    screen.debug();
    expect(element).toBeTruthy();
  });

  it("selects the list-item element", () => {
    const component = createElement("c-hello-world", {
      is: LessonTwo
    });

    document.body.appendChild(component);
    const element = component.shadowRoot.querySelector("li");
    screen.debug();
    expect(element).toBeTruthy();
  });

  it("selects the list-group element", () => {
    const component = createElement("c-hello-world", {
      is: LessonTwo
    });

    document.body.appendChild(component);
    const element = component.shadowRoot.querySelector("ul");
    screen.debug();
    expect(element).toBeTruthy();
  });

  it("selects the paragraph element", () => {
    const component = createElement("c-hello-world", {
      is: LessonTwo
    });

    document.body.appendChild(component);
    const element = component.shadowRoot.querySelector("p");
    screen.debug();
    expect(element).toBeTruthy();
  });

  it("selects the anchor element", () => {
    const component = createElement("c-hello-world", {
      is: LessonTwo
    });

    document.body.appendChild(component);
    const element = component.shadowRoot.querySelector("a");
    screen.debug();
    expect(element).toBeTruthy();
  });

  it("selects the image element", () => {
    const component = createElement("c-hello-world", {
      is: LessonTwo
    });

    document.body.appendChild(component);
    const element = component.shadowRoot.querySelector("img");
    screen.debug();
    expect(element).toBeTruthy();
  });
});
