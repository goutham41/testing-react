import React from 'react'

const Counter = () => {
    const[count,setCount] = React.useState(0)
  return (
    <div>
      <h3>Counter : {count}</h3>
      <button
        data-testid="AddBtn+5"
        onClick={() => {
          setCount(count + 5);
        }}
      >
        ADD COUNT
      </button>
      <button
        data-testid="ReduceBtn-"
        onClick={() => {
          if (count > 0) {
            setCount(count - 5);
          } else {
            alert("Count Should not be lessThan Zero");
          }
        }}
      >
        REDUCE COUNT
      </button>
    </div>
  );
}

export default Counter