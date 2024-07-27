import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Comp1 = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal
    const apicall = async () => {
      var first = await fetch("https://jsonplaceholder.typicode.com/todos/1",{signal});
      var data =  await first.json()
      console.log(data);
    };
    apicall();

    return () => {
      controller.abort()
      console.log("Called");
    };
  }, []);

  const navigate = useNavigate();
  const handle = () => {
    navigate("/Comp2");
  };
  return (
    <div>
      <p>I am Comp1</p>
      <button onClick={handle}>Click for 2 comp</button>
    </div>
  );
};

export default Comp1;
