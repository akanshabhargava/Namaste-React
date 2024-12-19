import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../../pages/RestaurantMenu";
import Header from "../Header";
import MOCK_DATA from "../mocks/MockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../../pages/Cart";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});
it("should render Restraurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("New Thin n Crispy Pizzas(6)");
  fireEvent.click(accordionHeader);
  const renderedFoodItems = screen.getAllByTestId("foodItems");
  expect(renderedFoodItems.length).toBe(6);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart(1 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(7);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(6);
  expect(
    screen.getByText("Cart Is Empty.Add Items to the cart!")
  ).toBeInTheDocument();
});
