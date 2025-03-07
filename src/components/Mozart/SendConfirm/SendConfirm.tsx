import React from "react";
import {
  Box,
  Divider,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
  Button,
} from "@chakra-ui/react";
import AllDataMozartForm from "../../../utils/AllDataMozartForm";
import { ViewIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface SendConfirmProps {
  title: string;
  description: string;
  onNext?: () => void;
  onBack?: () => void;
  formDataAll?: AllDataMozartForm;
}

const SendConfirm: React.FC<SendConfirmProps> = ({ title, formDataAll }) => {
  const buttonSize = "md";

  const data = formDataAll || ({} as AllDataMozartForm);
  console.table(data);

  return (
    <Box p={5}>
      <Heading as="h2" size="lg" mb={5}>
        {title}
      </Heading>

      {/* Business Information */}
      <Heading as="h3" size="md" mb={3}>
        Business Information
      </Heading>
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500" width="40%">
              Business Name:
            </Th>
            <Td width="60%">{data.businessName || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Legal Name:
            </Th>
            <Td width="60%">{data.businessLegalName || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Registration Number:
            </Th>
            <Td width="60%">{data.businessRegistrationNumber || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Ownership Type:
            </Th>
            <Td width="60%">{data.businessOwnershipType || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Tax ID:
            </Th>
            <Td width="60%">{data.businessTaxId || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              GIIN:
            </Th>
            <Td width="60%">{data.businessGiin || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Incorporation Date:
            </Th>
            <Td width="60%">{data.businessIncorporationDate || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Business Address:
            </Th>
            <Td width="60%">
              {data.businessBusinessAddress?.street || "N/A"},{" "}
              {data.businessBusinessAddress?.city || "N/A"},{" "}
              {data.businessBusinessAddress?.stateCode || "N/A"},{" "}
              {data.businessBusinessAddress?.zip || "N/A"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Corporate Address:
            </Th>
            <Td width="60%">
              {data.businessCorporateAddress?.street || "N/A"},{" "}
              {data.businessCorporateAddress?.city || "N/A"},{" "}
              {data.businessCorporateAddress?.stateCode || "N/A"},{" "}
              {data.businessCorporateAddress?.zip || "N/A"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Company Website URL:
            </Th>
            <Td width="60%">{data.businessCompanyWebsiteUrl || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              DBA Name:
            </Th>
            <Td width="60%">{data.businessDbaName || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              DBA Website URL:
            </Th>
            <Td width="60%">{data.businessDbaWebsiteUrl || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Dynamic Descriptor:
            </Th>
            <Td width="60%">{data.businessDynamicDescriptor || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Description:
            </Th>
            <Td width="60%">{data.businessDescription || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Customer Service Phone:
            </Th>
            <Td width="60%">{data.businessCustomerServicePhone || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Customer Service Email:
            </Th>
            <Td width="60%">{data.businessCustomerServiceEmail || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Fax:
            </Th>
            <Td width="60%">{data.businessFax || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Agreement:
            </Th>
            <Td width="60%">{data.businessAgreement || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Custom Field 1:
            </Th>
            <Td width="60%">{data.businessCustomField1 || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Custom Field 2:
            </Th>
            <Td width="60%">{data.businessCustomField2 || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Custom Field 3:
            </Th>
            <Td width="60%">{data.businessCustomField3 || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Phone Number:
            </Th>
            <Td width="60%">{data.businessPhoneNumber || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Email Address for Notices:
            </Th>
            <Td width="60%">{data.businessEmailAddressForNotices || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Number of Locations:
            </Th>
            <Td width="60%">{data.businessNumberOfLocations || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Number of Outlets:
            </Th>
            <Td width="60%">{data.businessNumberOfOutlets || "N/A"}</Td>
          </Tr>
        </Tbody>
      </Table>

      <Divider my={6} />

      {/* Banking Information */}
      <Heading as="h3" size="md" mb={3}>
        Banking Information
      </Heading>
      {data.bankingDetails && (
        <Table variant="simple" mb={6}>
          <Tbody>
            <Tr>
              <Th color="blue.500" width="40%">
                Bank Account Number:
              </Th>
              <Td width="60%">{data.bankingDetails.accountNumber || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Account Type:
              </Th>
              <Td width="60%">{data.bankingDetails.accountType || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Account Holder Name:
              </Th>
              <Td width="60%">
                {data.bankingDetails.accountHolderName || "N/A"}
              </Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Entity Type:
              </Th>
              <Td width="60%">{data.bankingDetails.entityType || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Routing Number:
              </Th>
              <Td width="60%">{data.bankingDetails.routingNumber || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Bank Name:
              </Th>
              <Td width="60%">{data.bankingDetails.bankName || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Plaid Access Token:
              </Th>
              <Td width="60%">
                {data.bankingDetails.plaidAccessToken || "N/A"}
              </Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Billing Address:
              </Th>
              <Td width="60%">
                {data.bankingDetails.billingAddress?.street || "N/A"},{" "}
                {data.bankingDetails.billingAddress?.city || "N/A"},{" "}
                {data.bankingDetails.billingAddress?.stateCode || "N/A"},{" "}
                {data.bankingDetails.billingAddress?.zip || "N/A"}
              </Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Void Check Document:
              </Th>
              <Td width="60%">
                {data.bankingDetails.documentsVoidCheck || "N/A"}
              </Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Custom Document 1:
              </Th>
              <Td width="60%">
                {data.bankingDetails.documentsCustomDocument1 || "N/A"}
              </Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Custom Document 2:
              </Th>
              <Td width="60%">
                {data.bankingDetails.documentsCustomDocument2 || "N/A"}
              </Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Custom Document 3:
              </Th>
              <Td width="60%">
                {data.bankingDetails.documentsCustomDocument3 || "N/A"}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      )}

      <Divider my={6} />

      {/* Contact Information */}
      <Heading as="h3" size="md" mb={3}>
        Contact Information
      </Heading>
      {data.contactDetails?.map((contact, index) => (
        <Table variant="simple" mb={6} key={index}>
          <Tbody>
            <Tr>
              <Th color="blue.500" width="40%" colSpan={2} textAlign="center">
                Contact:
              </Th>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                First Name:
              </Th>
              <Td width="60%">{contact.firstName || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Last Name:
              </Th>
              <Td width="60%">{contact.lastName || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Email:
              </Th>
              <Td width="60%">{contact.email || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Mobile Phone:
              </Th>
              <Td width="60%">{contact.mobilePhone || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Home Phone:
              </Th>
              <Td width="60%">{contact.homePhone || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Address:
              </Th>
              <Td width="60%">
                {contact.address?.street || "N/A"},{" "}
                {contact.address?.city || "N/A"},{" "}
                {contact.address?.stateCode || "N/A"},{" "}
                {contact.address?.zip || "N/A"}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      ))}

      <Divider my={6} />

      {/* Owner Details */}
      <Heading as="h3" size="md" mb={3}>
        Owner Details
      </Heading>
      {data.ownerDetails?.map((owner, index) => (
        <Table variant="simple" mb={6} key={index}>
          <Tbody>
            <Tr>
              <Th color="blue.500" width="40%" colSpan={2} textAlign="center">
                Owner:
              </Th>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                First Name:
              </Th>
              <Td width="60%">{owner.firstName || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Middle Name:
              </Th>
              <Td width="60%">{owner.middleName || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Last Name:
              </Th>
              <Td width="60%">{owner.lastName || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                State ID:
              </Th>
              <Td width="60%">{owner.stateID || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                SSN:
              </Th>
              <Td width="60%">{owner.ssn || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Percent Ownership:
              </Th>
              <Td width="60%">{owner.percentOwnership || "N/A"}%</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Title:
              </Th>
              <Td width="60%">{owner.title || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Birthday:
              </Th>
              <Td width="60%">{owner.birthday || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Email:
              </Th>
              <Td width="60%">{owner.email || "N/A"}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Address:
              </Th>
              <Td width="60%">
                {owner.address?.street || "N/A"}, {owner.address?.city || "N/A"}
                , {owner.address?.stateCode || "N/A"},{" "}
                {owner.address?.zip || "N/A"}
              </Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Phone:
              </Th>
              <Td width="60%">{owner.phone || "N/A"}</Td>
            </Tr>
          </Tbody>
        </Table>
      ))}

      <Divider my={6} />

      {/* Business Financials */}
      <Heading as="h3" size="md" mb={3}>
        Business Financials
      </Heading>
      {data.businessFinancials && (
        <Table variant="simple" mb={6}>
          <Tbody>
            <Tr>
              <Th color="blue.500" width="40%">
                Average Ticket Price Projection:
              </Th>
              <Td width="60%">
                {data.businessFinancials.avgTicketPriceProjection || "N/A"}
              </Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Highest Ticket Price Projection:
              </Th>
              <Td width="60%">
                {data.businessFinancials.highestTicketPriceProjection || "N/A"}
              </Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">
                Is Annual Amex Volume Exceed Million Dollars:
              </Th>
              <Td width="60%">
                {data.businessFinancials.isAnnualAmexVolumeExceedMillionDollars
                  ? "Yes"
                  : "No"}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      )}

      <Divider my={6} />

      {/* Confirmation and Validation */}
      <Box display="flex" justifyContent="space-between" p={4} gap={4}>
        <Button
          type="button"
          colorScheme="blue"
          leftIcon={<ViewIcon />}
          width={"45%"}
          size={buttonSize}
        >
          Biometric validation
        </Button>

        <Button
          type="button"
          colorScheme="blue"
          rightIcon={<ChevronRightIcon />}
          width={"45%"}
          size={buttonSize}
          isDisabled={true}
        >
          Send Application
        </Button>
      </Box>
    </Box>
  );
};

export default SendConfirm;
