import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

describe("COUNTER TESING IN ALL CASE", function () {
  it("should add count 5", function () {
    render(<Counter></Counter>);
    let h3 = screen.getByText("Counter : 0");
    expect(h3).toBeInTheDocument();

    let AddButton = screen.getByText("ADD COUNT");
    fireEvent.click(AddButton);
    expect(h3).toHaveTextContent("Counter : 5");

    let ReduceButton = screen.getByText("REDUCE COUNT");
    fireEvent.click(ReduceButton);
    expect(h3).toHaveTextContent("Counter : 0");
  });

  it("Should be Reduce by -5", function () {
    render(<Counter></Counter>);
    let h3 = screen.getByText("Counter : 0");
    expect(h3).toBeInTheDocument();

    const mockfn = jest.fn();
    render(<button onClick={mockfn}>lick me</button>);
    let AddButton = screen.getByText("ADD COUNT");
    let ReduceButton = screen.getByText("REDUCE COUNT");
    fireEvent.click(AddButton);
    fireEvent.click(AddButton);
    fireEvent.click(AddButton);
    fireEvent.click(AddButton);
    fireEvent.click(ReduceButton);
    fireEvent.click(ReduceButton);
    fireEvent.click(ReduceButton);
    expect(h3).toHaveTextContent("Counter : 5");
  });
});
