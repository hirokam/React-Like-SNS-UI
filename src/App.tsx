import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
import { MainRouter } from "./routes/MainRouter";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
