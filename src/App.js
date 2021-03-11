import React from "react";
import MainPage from "./components/Pages/MainPage";
import styled, {createGlobalStyle} from 'styled-components'

export default function App() {

  return (
    <div>
      <Global />
      <MainPage />
    </div>
  );
}

const Global = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    text-decoration: none;
    list-style: none;
  }
`