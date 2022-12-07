// __tests__/Nav.test.js with hard coded categories
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe("Contact component", () => {
  it("renders", () => {
    render(<Contact />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Contact />);

    expect(asFragment()).toMatchSnapshot();
  });
});

// describe("emoji is visible", () => {
//   it("inserts emoji into the h2", () => {
//     const { getByLabelText } = render(<Contact />);

//     expect(getByLabelText("camera")).toHaveTextContent("📸");
//   });
// });

describe("links are visible", () => {
  it("inserts text into the links", () => {
    const { getByTestId } = render(<Contact />);

    expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
    expect(getByTestId("buttontag")).toHaveTextContent("Submit");
  });
});
