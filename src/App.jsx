import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme"

function App() {
  const [tab, setTab] = useState([]);

  function AddTab(title, note) {
    const value = {
      Title: title,
      Note: note
    };
    setTab((prevValue) => {
      return [...prevValue, value];
    });
  }

  function deleteTab(id) {
    setTab((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CreateArea AddTab={AddTab} />
      {tab.map((Noteread, index) => {
        return (
          <Note
            key={index}
            index={index}
            title={Noteread.Title}
            content={Noteread.Note}
            deleteTab={deleteTab}
          />
        );
      })}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
