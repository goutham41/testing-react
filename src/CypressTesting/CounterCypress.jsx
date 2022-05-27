import React from 'react'

const CounterCypress = () => {
    const[count,setCount] = React.useState(0)
  return (
    <div>
      <h1 style={{color:"red",backgroundColor:"#fff"}}>Counter : {count}</h1>
      <button
        style={{
          height: "40px",
          widht: "200px",
          backgroundColor: "#fff",
          marginTop: "100px",
          fontSize: "20px",
          border: "0px",
        }}
        data-testid="AddBtn+5"
        className="cbtn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter increment : {count}
      </button>
      <button
        style={{
          height: "40px",
          widht: "200px",
          backgroundColor: "#fff",
          marginTop: "100px",
          fontSize: "20px",
          border: "0px",
          marginLeft: "20px",
        }}
        className="dbtn"
        data-testid="ReduceBtn-"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            alert("Count Should not be lessThan Zero");
          }
        }}
      >
        Counter decrement : {count}
      </button>
    </div>
  );
}

export default CounterCypress;