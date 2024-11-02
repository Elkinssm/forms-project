import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "./App.css";
import DBAInformationForm from "./components/Onboarding/DBAInformationForm/DBAInformationForm";
import CorporateInformationForm from "./components/Onboarding/CorporateInformationForm/CorporateInformationForm";
import ContactInformationForm from "./components/Onboarding/ContactInformationForm/ContactInformationForm"; // Importamos el schema
import OwnerInformationForm from "./components/Onboarding/OwnerInformation/OwnerInformationForm";
import BusinessProfileForm from "./components/Onboarding/BusinessProfile/BusinessProfile";
import Sidebar from "./components/Sidebar/SidebarAlter";
import ControllingOfficerForm from "./components/Onboarding/ControllingOfficer/ControllingOfficer";
import SalesProfileForm from "./components/Onboarding/SalesProfile/SalesProfile";
import { contactFormSchema } from "./components/Onboarding/ContactInformationForm/contactFormSchema";
import { corporateInformationFormSchema } from "./components/Onboarding/CorporateInformationForm/corporateInformationFormSchema";
import { DBAInformationScheme } from "./components/Onboarding/DBAInformationForm/DBAInformationSchema";
import { ownerInformationScheme } from "./components/Onboarding/OwnerInformation/ownerInformationScheme";
import { businesProfileSchema } from "./components/Onboarding/BusinessProfile/businessProfileSchema";
import { controllingOfficerSchema } from "./components/Onboarding/ControllingOfficer/controllingOfficerSchema";
import { salesProfileSchema } from "./components/Onboarding/SalesProfile/salesProfileSchema";
import AddressSearch from "./components/Home/AddressSearch";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW={"1200px"} mx="auto" overflow={"auto"}>
        {/* Pasamos los formularios como children del Sidebar */}
        <Sidebar>
          <CorporateInformationForm
            title="Corporate Information"
            description="Enter the Information where your company is legally registered."
            validationSchema={corporateInformationFormSchema}
          />
          <DBAInformationForm
            title="DBA Information"
            description="Provide details about your company information."
            validationSchema={DBAInformationScheme}
          />
          <ContactInformationForm
            title="Primary Contact" // se borra
            description="Provide contact information for your business."
            validationSchema={contactFormSchema}
          />
          <OwnerInformationForm
            title="Owner Information"
            description="The following information for each individual who owns 25% or more of the equity."
            validationSchema={ownerInformationScheme}
          />
          <BusinessProfileForm
            title="Business Profile"
            description="Define your business profile and key activities."
            validationSchema={businesProfileSchema}
          />
          <ControllingOfficerForm
            title="Controlling Officer"
            description="Complete the following information for one individual with significant responsibility."
            validationSchema={controllingOfficerSchema}
          />
          <SalesProfileForm
            title="Sales Profile"
            description="Provide information about your sales operations."
            validationSchema={salesProfileSchema}
          />
        </Sidebar>
        <Box mt={8}>
          <AddressSearch />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
