import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";
import Main from "./components/MainLayout/Main";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Main />
      </Router>
    </ChakraProvider>
  );
};

export default App;
