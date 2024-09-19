import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "./App.css";

// Importar los formularios
import CompanyInformationForm from "./components/CompanyInformationForm/CompanyInformationForm";
import CorporateAddressForm from "./components/CorporateAddressForm/CorporateAddressForm";
import ContactInformationForm from "./components/ContactInformationForm/ContactInformationForm";
import AdditionalDetailsForm from "./components/AdditionalDetailsForm/AdditionalDetailsForm";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* Pasamos los formularios como children del Sidebar */}
      <Sidebar>
        <CompanyInformationForm title="Company Information" tu />
        <CorporateAddressForm title="Corporate Address" />
        <ContactInformationForm title="Contact Information" />
        <AdditionalDetailsForm title="Additional Details" />
      </Sidebar>
    </ChakraProvider>
  );
}

export default App;
