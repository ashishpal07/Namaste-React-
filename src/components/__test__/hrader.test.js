import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";

it("shoul login button render on header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByText("LOGIN");
  expect(loginButton).toBeInTheDocument();
});

it("should be chnage in logout after click on login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "LOGIN" });

  fireEvent.click(loginButton);

  const logOutButton = screen.getByRole("button", { name: "LOGOUT" });

  expect(logOutButton).toBeInTheDocument();
});
