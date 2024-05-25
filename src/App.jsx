import { useState } from "react";
import "./App.css";
import Rate from "./components/rate/rate";
import Result from "./components/result/result";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState(null);
  return (
    <>
      {submit ? (
        <Result Rate={rate} />
      ) : (
        <Rate setSubmit={setSubmit} rate={rate} setRate={setRate} />
      )}
    </>
  );
}

export default App;
