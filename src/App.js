import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Container from "@mui/material/Container";
import Definitions from "./components/Definitions/Definitions";
function App() {
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");
  const [meanings, setMeanings] = useState([]);
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  ;
  useEffect(
    () => {
      dictionaryApi();
    },
    [word, category]
  );
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#212c34", color: "white" }}
    >
      <Container
        maxWwidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && (<Definitions word = {word} meanings = {meanings} category = {category}/>)}
      </Container>
    </div>
  );
}

export default App;
