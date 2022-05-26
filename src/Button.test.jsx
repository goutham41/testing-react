import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Button from "./components/Button";
import App from "./App";
//intgration system
describe("ButtonTests", function () {
  it("should have button in dom", function () {
    render(<Button>Click me</Button>);
    let button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    //    screen.debug()
  });

  it("should render based on testid", function () {
    render(<Button>Click me</Button>);
    let button = screen.getByTestId("cbtn");
    expect(button).toBeInTheDocument();
  });

  it("should render empty button", function () {
    render(<Button></Button>);
    let button = screen.getByTestId("cbtn");
    expect(button).toBeEmptyDOMElement();
  });

  it("should change theme", function () {
    render(<App></App>);
    let h3 = screen.getByText("Theme is light");
    expect(h3).toBeInTheDocument();
    expect(h3).toHaveTextContent("light");

    let themeButton = screen.getByText("change Theme");
    //  userEvent.click(themeButton);userEvent or you can fireEvent
    fireEvent.click(themeButton);
    expect(h3).toHaveTextContent("dark");
  });

  it("should call given function", function () {
    const mockfn = jest.fn();
    render(<Button onClick={mockfn}>lick me</Button>);
    const btn = screen.getByTestId("cbtn");
    fireEvent.click(btn);
    fireEvent.click(btn);
    expect(mockfn).toBeCalledTimes(2);
  });

  //Snapshot
  it("Should match snapshot", function () {
    const tree = renderer
      .create(
        <Button colorScheme={"green"} variant="ghost">
          ADD counter
        </Button>,
      )
      .toTree();
    expect(tree).toMatchSnapshot();
  });
});
