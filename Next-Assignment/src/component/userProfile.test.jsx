import { render, screen } from "@testing-library/react";
import UserProfile from "./userProfile";

describe("UserProfile Component", () => {
  const mockData = {
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
  };

  it("renders user name, email, and phone correctly", () => {
    render(
      <UserProfile
        name={mockData.name}
        email={mockData.email}
        phone={mockData.phone}
      />
    );

    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/123-456-7890/i)).toBeInTheDocument();
  });

  it("has the user profile container", () => {
    render(
      <UserProfile
        name={mockData.name}
        email={mockData.email}
        phone={mockData.phone}
      />
    );

    expect(screen.getByTestId("user-profile")).toBeInTheDocument();
  });
});
