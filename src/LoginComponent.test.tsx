import { render, screen } from "@testing-library/react";
import LoginComponent from "./LoginComponent";

describe("Login component tests", () => {
  const loginServicesMock = {
    login: jest.fn(),
  };

  const setTokenMock = jest.fn();

  it("Sould render correctly the login component", () => {
    const container = render(
      <LoginComponent
        loginService={loginServicesMock}
        setToken={setTokenMock}
      />
    ).container;

    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
    
  });
});
