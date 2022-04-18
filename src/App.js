import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getDataInAPI = async () => {
    const response = await axios.get(
      "https://programming-quotes-api.herokuapp.com/Quotes/random"
    );
    setAuthor(response.data.author);
    setQuote(response.data.en);
    return JSON.stringify(response.data);
  };

  useEffect(() => {
    getDataInAPI();
  }, []);

  console.log("https://github.com/skolakoda/programming-quotes-api");

  return (
    <div className="container">
      <div className="main">
        <h1>Random Qoute</h1>
        <div className="paragraph">{quote}</div>
        <div className="author">- {author}</div>
      </div>
    </div>
  );
}

export default App;
