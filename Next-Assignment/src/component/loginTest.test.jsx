import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from './loginTest';

describe("LoginForm Component", () => {
  it("renders username and password input fields", () => {
    render(<LoginForm />);
    expect(screen.getByText(/username/i)).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
  });

  it("accepts input in username and password fields", async () => {
    render(<LoginForm />);
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await userEvent.type(usernameInput, "testuser");
    await userEvent.type(passwordInput, "mypassword");

    expect(usernameInput).toHaveValue("testuser");
    expect(passwordInput).toHaveValue("mypassword");
  });

  it("calls onSubmit with form data on submit event", async () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const form = screen.getByTestId("login-form");

    await userEvent.type(usernameInput, "admin");
    await userEvent.type(passwordInput, "123456");

    fireEvent.submit(form);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      username: "admin",
      password: "123456",
    });
  });
});
