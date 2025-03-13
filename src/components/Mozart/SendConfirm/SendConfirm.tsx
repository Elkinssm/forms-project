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
import { transformNestedData } from "../../../utils/transformNestedData";

interface SendConfirmProps {
  title: string;
  description: string;
  onNext?: () => void;
  onBack?: () => void;
  formDataAll?: AllDataMozartForm;
}

const SendConfirm: React.FC<SendConfirmProps> = ({ title, formDataAll }) => {
  const buttonSize = "md";
  const data = transformNestedData<AllDataMozartForm>(formDataAll || {});
  const contacts = Object.values(data.contacts || {});
  const ownersObject = data.owners || {};
  const owners = Object.values(ownersObject);

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
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500" width="40%">
              Bank Account Number:
            </Th>
            <Td width="60%">
              {data?.bankingBankAccountAccountNumber || "N/A"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Account Type:
            </Th>
            <Td width="60%">{data?.bankingBankAccountAccountType || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Account Holder Name:
            </Th>
            <Td width="60%">
              {data?.bankingBankAccountAccountHolderName || "N/A"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Entity Type:
            </Th>
            <Td width="60%">{data?.bankingBankAccountEntityType || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Routing Number:
            </Th>
            <Td width="60%">
              {data?.bankingBankAccountRoutingNumber || "N/A"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Bank Name:
            </Th>
            <Td width="60%">{data?.bankingBankAccountBankName || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Plaid Access Token:
            </Th>
            <Td width="60%">{data?.bankingPlaidAccessToken || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Billing Address:
            </Th>
            <Td width="60%">
              {data?.bankingBillingAddressStreet || "N/A"},
              {/* {data?.billingAddress || "N/A"}, {data?.billingAddress || "N/A"},
              {data?.bankingDetails || "N/A"} */}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Void Check Document:
            </Th>
            <Td width="60%">{data?.documentsVoidCheck || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Custom Document 1:
            </Th>
            <Td width="60%">{data?.documentsCustomDocument1 || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Custom Document 2:
            </Th>
            <Td width="60%">{data?.documentsCustomDocument2 || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Custom Document 3:
            </Th>
            <Td width="60%">{data?.documentsCustomDocument3 || "N/A"}</Td>
          </Tr>
        </Tbody>
      </Table>

      <Divider my={6} />

      {/* Contact Information */}
      <Heading as="h3" size="md" mb={3}>
        Contact Information
      </Heading>
      {contacts.length > 0 ? (
        contacts.map((contact, index) => (
          <Table variant="simple" mb={6} key={index}>
            <Tbody>
              <Tr>
                <Th color="blue.500" width="40%" colSpan={2} textAlign="center">
                  Contact {index + 1}
                </Th>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  First Name:
                </Th>
                <Td width="60%">{contact?.contactDetailsFirstName ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Last Name:
                </Th>
                <Td width="60%">{contact?.contactDetailsLastName ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Legal Name:
                </Th>
                <Td width="60%">{contact?.contactDetailsLegalName ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Email:
                </Th>
                <Td width="60%">{contact?.contactDetailsEmail ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Mobile Phone:
                </Th>
                <Td width="60%">
                  {contact?.contactDetailsMobilePhone ?? "N/A"}
                </Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Home Phone:
                </Th>
                <Td width="60%">{contact?.contactDetailsHomePhone ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Address:
                </Th>
                <Td width="60%">
                  {contact?.contactDetailsAddress?.street ?? "N/A"}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        ))
      ) : (
        <Table variant="simple" mb={6}>
          <Tbody>
            <Tr>
              <Th color="blue.500" width="40%" colSpan={2} textAlign="center">
                No Contacts Found
              </Th>
            </Tr>
          </Tbody>
        </Table>
      )}

      <Divider my={6} />

      <Heading as="h3" size="md" mb={3}>
        Owner Details
      </Heading>

      {owners.length > 0 ? (
        owners.map((owner, index) => (
          <Table variant="simple" mb={6} key={index}>
            <Tbody>
              <Tr>
                <Th color="blue.500" width="40%" colSpan={2} textAlign="center">
                  Owner {index + 1}
                </Th>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  First Name:
                </Th>
                <Td width="60%">{owner.firstName ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Last Name:
                </Th>
                <Td width="60%">{owner.lastName ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Email:
                </Th>
                <Td width="60%">{owner.email ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Citizenship:
                </Th>
                <Td width="60%">{owner.citizenship ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  GIIN:
                </Th>
                <Td width="60%">{owner.giin ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Date of Birth:
                </Th>
                <Td width="60%">{owner.dateOfBirth ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Ownership Date:
                </Th>
                <Td width="60%">{owner.ownershipDate ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Ownership Percentage:
                </Th>
                <Td width="60%">{owner.ownershipPercentage ?? "N/A"}%</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Position:
                </Th>
                <Td width="60%">{owner.position ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Control Prong:
                </Th>
                <Td width="60%">{owner.controlProng ? "Yes" : "No"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Driver's Licence Number:
                </Th>
                <Td width="60%">{owner.driversLicenceNumber ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Driver's Licence State:
                </Th>
                <Td width="60%">{owner.driversLicenceState ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Driver's Licence Country:
                </Th>
                <Td width="60%">{owner.driversLicenceCountry ?? "N/A"}</Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Address:
                </Th>
                <Td width="60%">
                  {owner.address?.street ?? "N/A"},{" "}
                  {owner.address?.apartment ?? "N/A"},{" "}
                  {owner.address?.city ?? "N/A"},{" "}
                  {owner.address?.stateCode ?? "N/A"},{" "}
                  {owner.address?.zip ?? "N/A"}
                </Td>
              </Tr>
              <Tr>
                <Th color="blue.500" width="40%">
                  Phone:
                </Th>
                <Td width="60%">
                  {owner.mobilePhone ?? owner.homePhone ?? "N/A"}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        ))
      ) : (
        <Table variant="simple" mb={6}>
          <Tbody>
            <Tr>
              <Th color="blue.500" width="40%" colSpan={2} textAlign="center">
                No Owners Found
              </Th>
            </Tr>
          </Tbody>
        </Table>
      )}

      <Divider my={6} />

      {/* Business Profile */}
      <Heading as="h3" size="md" mb={3}>
        Business Profile
      </Heading>
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500" width="40%">
              Category:
            </Th>
            <Td width="60%">{data?.category || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Description of Goods:
            </Th>
            <Td width="60%">{data?.descriptionOfGoods || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Industry:
            </Th>
            <Td width="60%">{data?.industry || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              MCC Code:
            </Th>
            <Td width="60%">{data?.mccCode || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Merchant Billing Type:
            </Th>
            <Td width="60%">{data?.merchantBillingType || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Merchant Pricing Model:
            </Th>
            <Td width="60%">{data?.merchantPricingModel || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              GST Number:
            </Th>
            <Td width="60%">{data?.gstNumber || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Privacy Policy URL:
            </Th>
            <Td width="60%">{data?.privacyPolicyUrl || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Returns Policy URL:
            </Th>
            <Td width="60%">{data?.returnsPolicyUrl || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Terms & Conditions URL:
            </Th>
            <Td width="60%">{data?.tcPolicyUrl || "N/A"}</Td>
          </Tr>
        </Tbody>
      </Table>

      {/* PCI Compliance */}
      <Heading as="h3" size="md" mb={3}>
        PCI Compliance
      </Heading>
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500" width="40%">
              Data Compromised:
            </Th>
            <Td width="60%">
              {data.pciCompliance?.dataCompromised ? "Yes" : "No"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              PCI Level:
            </Th>
            <Td width="60%">{data.pciCompliance?.pciLevel || "N/A"}</Td>
          </Tr>
          {/* <Tr>
            <Th color="blue.500" width="40%">
              Stores Sensitive Data:
            </Th>
            <Td width="60%">
              {data.pciCompliance?.storesSensitiveData ? "Yes" : "No"}
            </Td>
          </Tr> */}
        </Tbody>
      </Table>

      {/* Shipping */}
      <Heading as="h3" size="md" mb={3}>
        Shipping
      </Heading>
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500" width="40%">
              Shipping Required:
            </Th>
            <Td width="60%">
              {data.shipping?.shippingRequired === "on" ? "Yes" : "No"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Inventory Available:
            </Th>
            <Td width="60%">
              {data.shipping?.inventory === "on" ? "Yes" : "No"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Delivery Time (1-7 days):
            </Th>
            <Td width="60%">
              {data.shipping?.deliveryTimePercentage.oneToSevenDays || "N/A"}%
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Delivery Time (30 days):
            </Th>
            <Td width="60%">
              {data.shipping?.deliveryTimePercentage?.eightToFourteenDays ||
                "N/A"}
              %
            </Td>
          </Tr>
        </Tbody>
      </Table>

      {/* Processing Methods */}
      <Heading as="h3" size="md" mb={3}>
        Processing Methods
      </Heading>
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500" width="40%">
              Device Terminal:
            </Th>
            <Td width="60%">
              {data.processingMethods?.deviceTerminal || "N/A"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              MOTO:
            </Th>
            <Td width="60%">{data.processingMethods?.moTo || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Online:
            </Th>
            <Td width="60%">{data.processingMethods?.online || "N/A"}</Td>
          </Tr>
        </Tbody>
      </Table>

      <Divider my={6} />

      {/* Business Financials */}
      <Heading as="h3" size="md" mb={3}>
        Business Financials
      </Heading>
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500" width="40%">
              Custom Field 1:
            </Th>
            <Td width="60%">{data?.customField1 || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Custom Field 2:
            </Th>
            <Td width="60%">{data?.customField2 || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Custom Field 3:
            </Th>
            <Td width="60%">{data?.customField3 || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Highest Ticket Price Projection:
            </Th>
            <Td width="60%">{data?.highestTicketPriceProjection || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Annual Amex Volume $1M:
            </Th>
            <Td width="60%">
              {data?.isAnnualAmexVolumeExceedMillionDollars ? "Yes" : "No"}
            </Td>
          </Tr>
        </Tbody>
      </Table>

      {/* Monthly Volume Projection */}
      <Heading as="h4" size="sm" mb={2}>
        Monthly Volume Projection
      </Heading>
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500" width="40%">
              American Express:
            </Th>
            <Td width="60%">
              {data.monthlyVolumeProjection?.americanExpress || "N/A"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Discover:
            </Th>
            <Td width="60%">
              {data.monthlyVolumeProjection?.discover || "N/A"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Local Debit Card:
            </Th>
            <Td width="60%">
              {data.monthlyVolumeProjection?.localDebitCard || "N/A"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              MasterCard:
            </Th>
            <Td width="60%">
              {data.monthlyVolumeProjection?.mastercard || "N/A"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Visa:
            </Th>
            <Td width="60%">{data.monthlyVolumeProjection?.visa || "N/A"}</Td>
          </Tr>
        </Tbody>
      </Table>

      {/* Volume Projection */}
      <Heading as="h4" size="sm" mb={2}>
        Volume Projection
      </Heading>
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500" width="40%">
              American Express:
            </Th>
            <Td width="60%">
              {data.volumeProjection?.americanExpress || "N/A"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Discover:
            </Th>
            <Td width="60%">{data.volumeProjection?.discover || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Local Debit Card:
            </Th>
            <Td width="60%">
              {data.volumeProjection?.localDebitCard || "N/A"}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              MasterCard:
            </Th>
            <Td width="60%">{data.volumeProjection?.mastercard || "N/A"}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">
              Visa:
            </Th>
            <Td width="60%">{data.volumeProjection?.visa || "N/A"}</Td>
          </Tr>
        </Tbody>
      </Table>
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
