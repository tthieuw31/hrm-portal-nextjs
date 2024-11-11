import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { expect } from "@jest/globals";
import { test } from "@jest/globals";
// import AboutEcoPage from "@/app/about/eco";
import AboutEcoPage from "@/app/about/aboutEco/page";

test("renders AboutEcoPage", () => {
  render(<AboutEcoPage />);
  const linkElement = screen.getByText(/About Eco/i);
  expect(linkElement).toBeCalled();
});
