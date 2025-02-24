import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "./App.css";
import Sidebar from "./components/Sidebar/SidebarAlter";
import BusinessForm from "./components/Mozart/BusinessForm/BusinessForm";
import { businessSchema } from "./components/Mozart/BusinessForm/businessSchema";
import BankingForm from "./components/Mozart/BankingForm/BankingForm";
import { bankingSchema } from "./components/Mozart/BankingForm/bankingShema";
import SendConfirm from "./components/Onboarding/SendConfirm/SendConfirm";
import ContactForm from "./components/Mozart/ContactForm/ContactForm";
import contactSchema from "./components/Mozart/ContactForm/contactSchema";
import OwnerDetailsForm from "./components/Mozart/OwnerDetailsForm/OwnerDetailForm";
import { ownerDetailsSchema } from "./components/Mozart/OwnerDetailsForm/ownerDetailsSchema";
import BusinessProfileForm from "./components/Mozart/BusinessProfileForm/BusinessProfileForm";
import { businessProfileSchema } from "./components/Mozart/BusinessProfileForm/businessProfileSchema";
import BusinessFinancialsForm from "./components/Mozart/BusinessFinancialsForm/BusinessFinancialsForm";
import { businessFinancialsSchema } from "./components/Mozart/BusinessFinancialsForm/businessFinancialsSchema";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW={"1200px"} mx="auto" overflow={"auto"}>
        {/* Pasamos los formularios como children del Sidebar */}
        <Sidebar>
          <BusinessForm
            title="Business Information"
            description="Enter the business information for your company."
            validationSchema={businessSchema}
          />
          <BankingForm
            title="Banking Information"
            description="Enter the Bank Information."
            validationSchema={bankingSchema}
          />

          <ContactForm
            title="Contact Information"
            description="Enter the Contact Information."
            validationSchema={contactSchema}
          />
          <OwnerDetailsForm
            title="Owner Details"
            description="Enter the Owner Details."
            validationSchema={ownerDetailsSchema}
          />
          <BusinessProfileForm
            title="Business Profile"
            description="Enter the Business Profile."
            validationSchema={businessProfileSchema}
          />
          <BusinessFinancialsForm
            title="Business Financials"
            description="Enter the Business Financials."
            validationSchema={businessFinancialsSchema}
          />

          {/* <CorporateInformationForm
            title="Corporate Information"
            description="Enter the Information where your company is legally registered."
            validationSchema={corporateInformationFormSchema}
          />
          <DBAInformationForm
            title="DBA Information"
            description="Provide details about your company information."
            validationSchema={DBAInformationScheme}
          />
          <BusinessProfileForm
            title="Business Profile"
            description="Define your business profile and key activities."
            validationSchema={businessProfileSchema}
          />
          <OwnerInformationForm
            title="Owner Information"
            description="The following information for each individual who owns 25% or more of the equity."
            validationSchema={ownerInformationScheme}
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
          />*/}
          <SendConfirm
            title="Confirmation and Validation"
            description="Confirm your information and validate your identity."
          />
        </Sidebar>
      </Box>
    </ChakraProvider>
  );
}

export default App;
