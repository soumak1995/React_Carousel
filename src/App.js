import React, { useState, useEffect } from "react";
import Carousel from "./Components/Carousel/Carousel";
import Form from "./Components/Form/Form";
import { useStateValue } from "./StateProvider";
import { FETCHED_DATA } from "./constant/constants";
import "./App.css";
function App() {
  const [{ images }, dispatch] = useStateValue();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://demo5110359.mockable.io/images");
      const data = await response.json();
      dispatch({ type: FETCHED_DATA, payload: data.images });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Form />
      {images.length > 0 ? <Carousel /> : "Something went wrong..."}
    </div>
  );
}

export default App;
