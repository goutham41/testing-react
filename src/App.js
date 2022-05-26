import React,{useState} from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./Day3testingReact/Counter";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <h3>Theme is {theme}</h3>
      <Button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        colorScheme="green"
      >
        change Theme
      </Button>
      <br />
      <Counter/>
    </div>
  );
}

export default App;
