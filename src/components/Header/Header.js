import React from "react";
import "./Header.css";
import { TextField, createMuiTheme, ThemeProvider } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import categories from "../../data/category";
const Header = ({ setCategory, category, setWord, word }) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      type: "dark"
    }
  });
  const handleChange = (language) => {
    setCategory(language);
    setWord("");
    
  };
  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="standard-basic"
            label="Select a word"
            value = {word}
            onChange = {e => setWord(e.target.value)}
          />
          <TextField
            select
            label="language"
            value={category}
            onChange={e => handleChange(e.target.value)}
            className="select"
          >
            {categories.map(option => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
