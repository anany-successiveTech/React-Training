import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalDemo from "./modalDemo.jsx";


describe("Modal Component", () => {
  it("should open and close the modal correctly", async () => {
    render(<ModalDemo />);

    expect(screen.queryByTestId("modal-backdrop")).not.toBeInTheDocument();

    await userEvent.click(screen.getByTestId("open-button"));
    expect(screen.getByTestId("modal-backdrop")).toBeInTheDocument();
    expect(screen.getByText(/this is the modal content/i)).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("close-button"));
    expect(screen.queryByTestId("modal-backdrop")).not.toBeInTheDocument();
  });
});
