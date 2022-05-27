import React,{useState} from 'react'
import axios from "axios"
const CounterApi = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h3 style={{ color: "red" }}>Colour</h3>
      <button
        className="counterbtn"
        onClick={() => {
          setCount(count + 1);
          axios.post("http://localhost:8080/counter", { value: count });
        }}
      >
        Count is {count}
      </button>
    </div>
  );
};

export default CounterApi;