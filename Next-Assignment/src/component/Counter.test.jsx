import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component", () => {
  it("Counter is rendering properly", () => {
    render(<Counter />);
    expect(screen.getByText(/Counting: 0/i)).toBeInTheDocument();
  });

  it("Increments the counter when + button is clicked", async () => {
    render(<Counter />);
    const incrementButton = screen.getByText("+");
    await userEvent.click(incrementButton);
    expect(screen.getByText(/Counting: 1/i)).toBeInTheDocument();
  });

  it("Decrements the counter when - button is clicked (only if > 0)", async () => {
    render(<Counter />);
    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");

    await userEvent.click(incrementButton); 
    await userEvent.click(decrementButton); 

    expect(screen.getByText(/Counting: 0/i)).toBeInTheDocument();
  });

  it("Does not decrement below 0", async () => {
    render(<Counter />);
    const decrementButton = screen.getByText("-");
    await userEvent.click(decrementButton); 
    expect(screen.getByText(/Counting: 0/i)).toBeInTheDocument();
  });
});
