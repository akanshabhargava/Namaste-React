import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("Should load  Header Component with a login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByRole("button");
  // const loginButton=screen.getByText("Login"); // Not preferred Way
  const loginButton = screen.getByRole("button", { name: "Login" }); /// If multiple buttons annd want to fetch specific login button
  expect(loginButton).toBeInTheDocument();
});

it("Should load  Header Component with cart items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByRole("button");
  // const loginButton=screen.getByText("Login"); // Not preferred Way
  const loginButton = screen.getByRole("button", { name: "Login" }); /// If multiple buttons annd want to fetch specific login button
  expect(loginButton).toBeInTheDocument();
});
//it does not matterwhether the item is 0,1,,2etc.it should have cart item
it("Should load  Header Component with cart item ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText(/Cart/);
  expect(loginButton).toBeInTheDocument();
});

it("Should change login button to logout on click ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
