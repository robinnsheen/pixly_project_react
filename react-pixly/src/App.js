import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import PixlyApi from "./api";

function App() {
  const [pictures, setPictures] = useState({
    data: null,
    infoLoaded: false
  });

  console.debug(
    "App",
    "pictures=",
    pictures,
  );

  useEffect(
    function loadPictures() {
      console.debug("App useEffect loadPictures");

      async function getPictures() {
        if (pictures.data === null) {
          try {
            let pictures = await PixlyApi.getPictures();

            setPictures({
              infoLoaded: true,
              data: pictures
            });
          } catch (err) {
            console.error("App loadPictures: problem loading", err);
            setPictures({
              infoLoaded: true,
              data: null
            });
          }
        } else {
          setPictures({
            infoLoaded: true,
            data: null
          });
        }
      }
      getPictures();
    }, []);

  function add(name, selectedFile) {
    const data = new FormData();
    data.append("name", name);
    data.append("file", selectedFile);

    PixlyApi.addPicture(data);
  }

  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <RoutesList pictures={pictures.data} add={add} />
      </BrowserRouter>

    </div>
  );
}

export default App;
