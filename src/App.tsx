import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "./App.css";
// import Form from "./components/Form/Form";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <div>
          {/* <Form /> */}
          <Home />
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
