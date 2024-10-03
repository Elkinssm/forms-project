import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "./App.css";
import CompanyInformationForm from "./components/YourBusiness/CompanyInformationForm/CompanyInformationForm";
import CorporateAddressForm from "./components/YourBusiness/CorporateAddressForm/CorporateAddressForm";
import ContactInformationForm from "./components/YourBusiness/ContactInformationForm/ContactInformationForm";
import AdditionalDetailsForm from "./components/YourBusiness/AdditionalDetailsForm/AdditionalDetailsForm";
import OwnerInformationForm from "./components/OwnerInformation/OwnerInformationForm";
import BusinessProfileForm from "./components/BusinessProfile/BusinessProfile";
import Sidebar from "./components/Sidebar/SidebarAlter";
import ControllingOfficerForm from "./components/ControllingOfficer/ControllingOfficer";
import SalesProfileForm from "./components/SalesProfile/SalesProfile";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW={"1200px"} mx="auto" overflow={"auto"}>
        {/* Pasamos los formularios como children del Sidebar */}
        <Sidebar>
          <CorporateAddressForm
            title="Corporate Information"
            description="Enter the Information where your company is legally registered."
          />
           <CompanyInformationForm
            title="DBA Information"
            description="Provide details about your company information."
          /> 
          <ContactInformationForm
            title="Primary Contact"
            description="Provide contact information for your business."
          />
          <AdditionalDetailsForm
            title="Additional Details"
            description="Add any additional information that is relevant to your business."
          />
          <OwnerInformationForm
            title="Owner Information"
            description="The following information for each individual, if any, who, directly or indirectly, through any contract, arrangement, understanding, relationship or otherwise, owns 25% or more of the equity
interests of the legal entity listed above"
          />
          <BusinessProfileForm
            title="Business Profile"
            description="Define your business profile and key activities."
          />
          <ControllingOfficerForm
            title="Controlling Officer"
            description="Complete the following information for one individual with significant responsibility for managing the legal entity listed above, such as: An executive officer or senior manager (e.g., Chief Executive Officer, Chief
Financial Officer, Chief Operating Officer, Managing Member, General Partner, President, Vice President, Treasurer); or Any other individual who regularly performs similar functions. If appropriate, an individual listed
under section (a) above may also be listed in this section (b)"
          />
          <SalesProfileForm
            title="Sales Profile"
            description="Provide information about your sales operations."
          />
        </Sidebar>
      </Box>
    </ChakraProvider>
  );
}

export default App;
