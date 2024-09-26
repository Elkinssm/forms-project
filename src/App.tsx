import React, { useRef } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarTest from "./components/Sidebar/SidebarTest";
import CompanyInformationForm from "./components/YourBusiness/CompanyInformationForm/CompanyInformationForm";
import AdditionalDetailsForm from "./components/YourBusiness/AdditionalDetailsForm/AdditionalDetailsForm";
import ContactInformationForm from "./components/YourBusiness/ContactInformationForm/ContactInformationForm";
import CorporateAddressForm from "./components/YourBusiness/CorporateAddressForm/CorporateAddressForm";
import BusinessProfileForm from "./components/BusinessProfile/BusinessProfile";
import OwnerInformationForm from "./components/OwnerInformation/OwnerInformationForm";
// import NewForm1 from "./components/NewForms/NewForm1"; // Importa tu nuevo formulario
// import NewForm2 from "./components/NewForms/NewForm2"; // Importa otro nuevo formulario
import theme from "./theme";

const App = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box>
          <SidebarTest formRef={formRef}>
            <Routes>
              <Route
                path="/business/form1"
                element={<CompanyInformationForm title="Company Information" />}
              />
              <Route
                path="/business/form2"
                element={<AdditionalDetailsForm title="Additional Details" />}
              />
              <Route
                path="/contact/form1"
                element={<ContactInformationForm title="Contact Information" />}
              />
              <Route
                path="/contact/form2"
                element={<CorporateAddressForm title="Corporate Address" />}
              />
              <Route
                path="/owner/form1"
                element={<OwnerInformationForm title="Owner Information" />}
              />
              <Route
                path="/business-profile/form1"
                element={<BusinessProfileForm title="Business Profile" />}
              />
              {/* Nuevas rutas agregadas */}
              <Route
                path="/contact/form3"
                element={<OwnerInformationForm title="Owner Information" />}
              />
              <Route
                path="/new/form2"
                element={<OwnerInformationForm title="New Form 2" />}
              />
              <Route path="/" element={<div>Home Page</div>} />{" "}
              {/* Página de inicio o redirección */}
            </Routes>
          </SidebarTest>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
