import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <ChakraProvider>
        <div>
          <Form />
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
