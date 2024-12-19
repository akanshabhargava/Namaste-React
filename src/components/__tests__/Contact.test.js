import { render, screen } from "@testing-library/react";
import Contact from "../../pages/Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page test Cases", () => {
  beforeAll(() => {
    console.log("Before All");
  });
  beforeEach(() => {
    console.log("Before Each");
  });
  afterAll(() => {
    console.log("After All");
  });
  afterEach(() => {
    console.log("After Each");
  });
  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  // Another way to find button
  test("Should load button inside contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    //console.log("submit button", button);
    expect(button).toBeInTheDocument();
  });
  //testing for fail
  // test("Should load button inside contact us component", () => {
  //   render(<Contact />);
  //   const button = screen.getByText("random");
  //   console.log("random button", button);
  //   //expect(button).toBeInTheDocument();
  // });
  test("Should load input inside contact us component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });
  test("Sould load 2 input boxes on the contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
