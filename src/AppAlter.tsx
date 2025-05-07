// App.tsx
import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import theme from "./theme";
import "./App.css";
import Login from "./components/Login/Login";
import MainApp from "./components/MainApp/MainApp";
import Init from "./components/FormComponents/Init";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW="1200px" mx="auto" overflow="auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forms/*" element={<MainApp />} />
            <Route path="/components" element={<Init />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
