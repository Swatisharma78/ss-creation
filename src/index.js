import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Store";
// import { ChakraProvider } from "@chakra-ui/react/dist";
import { ChakraProvider } from "@chakra-ui/react";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <ChakraProvider>
      <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);
