// App.tsx
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Sidebar from "./components/Sidebar/Sidebar";
import CompanyInformationForm from "./components/YourBusiness/CompanyInformationForm/CompanyInformationForm";
import CorporateAddressForm from "./components/YourBusiness/CorporateAddressForm/CorporateAddressForm";
import OwnerInformationForm from "./components/OwnerInformation/OwnerInformationForm";
import AdditionalDetailsForm from "./components/YourBusiness/AdditionalDetailsForm/AdditionalDetailsForm";

function App() {
  const sections = [
    {
      title: "Business Information",
      children: [
        <CompanyInformationForm
          key="company-info"
          title="Company Information"
        />,
        <CorporateAddressForm
          key="corporate-address"
          title="Corporate Address"
        />,
      ],
    },
    {
      title: "Owner Information",
      children: [
        <OwnerInformationForm key="owner-info" title="Owner Information" />,
        <AdditionalDetailsForm
          key="additional-details"
          title="Additional Details"
        />,

      ],
    },

  ];

  return (
    <ChakraProvider theme={theme}>
      <Box maxW={"1200px"} mx="auto" overflow={"auto"}>
        <Sidebar sections={sections} />
        {/* Agrega el contenido principal aquí si es necesario */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
