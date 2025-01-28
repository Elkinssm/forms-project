import React from "react";
import { Box, Divider, Heading, Table, Tbody, Td, Th, Tr, Image, Button } from "@chakra-ui/react";
import AllDataForm from "../../../utils/AllDataForm";
import { ViewIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface SendConfirmProps {
  title: string;
  description: string;
  onNext?: () => void;
  onBack?: () => void;
  formDataAll?: AllDataForm;
}

const SendConfirm: React.FC<SendConfirmProps> = (formDataAll) => {

  const buttonSize = "md";

  const data = formDataAll.formDataAll;
  if (data === undefined) {
    return null;
  }

  return (
    <Box p={5}>
      {/* Corporate Legal Information */}
      <Heading as="h2" size="lg" mb={5}>
        Corporate Information
      </Heading>
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500" width="40%">Federal Tax ID (EIN):</Th>
            <Td width="60%">{data.corpLegalFedTaxId}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Years in Business:</Th>
            <Td width="60%">{data.yearsInBusiness}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Legal Name:</Th>
            <Td width="60%">{data.corpLegalName}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Legal Phone:</Th>
            <Td width="60%">{data.corpLegalPhone}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Legal Email:</Th>
            <Td width="60%">{data.corpLegalEmail}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Legal Address:</Th>
            <Td width="60%">{data.corpLegalAddress}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Legal City:</Th>
            <Td width="60%">{data.corpLegalCity}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Legal State:</Th>
            <Td width="60%">{data.corpLegalState}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Legal Zip Code:</Th>
            <Td width="60%">{data.corpLegalZip}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Number of Locations:</Th>
            <Td width="60%">{data.aditionalDetailsLocations}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Website address:</Th>
            <Td width="60%">{data.aditionalDetailsWebsite}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Mailing:</Th>
            <Td width="60%">{data.aditionalDetailsMailing}</Td>
          </Tr>
        </Tbody>
      </Table>

      <Divider my={6} />



      {/* DBA Information */}
      <Heading as="h2" size="lg" mb={5}>
        DBA Information
      </Heading>
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500" width="40%">Same Information as Legal:</Th>
            <Td width="60%">{data.controllerOfficerIsOwner}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">DBA Name / Location Name:</Th>
            <Td width="60%">{data.merchDBAName}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Location Phone:</Th>
            <Td width="60%">{data.merchPhone}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Location Address:</Th>
            <Td width="60%">{data.merchAddress}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Location City:</Th>
            <Td width="60%">{data.merchCity}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Location State:</Th>
            <Td width="60%">{data.merchState}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Location Zip Code:</Th>
            <Td width="60%">{data.merchZip}</Td>
          </Tr>
        </Tbody>
      </Table>

      <Divider my={6} />

      {/* Business Profile */}
      <Heading as="h2" size="lg" mb={5}>
        Business Profile
      </Heading>
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500" width="40%">Ownership Type:</Th>
            <Td width="60%">{data.businessProfileOwnershipType}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Type of Business:</Th>
            <Td width="60%">{data.businessProfileBusinessType}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Goods & Services:</Th>
            <Td width="60%">{data.businessProfileGoodsServices}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Bank Name:</Th>
            <Td width="60%">{data.businessProfileBankName}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Business Check Routing:</Th>
            <Td width="60%">{data.businessProfileBusinessCheckRouting}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Business Checking Account:</Th>
            <Td width="60%">{data.businessProfileBusinessCheckingAccount}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Driver License Image:</Th>
            <Td width="60%">
              {data.businessProfileDriverLicenseImage && (
                <Image
                  src={data.businessProfileDriverLicenseImage}
                  alt="Driver License"
                  boxSize="100px"
                  objectFit="cover"
                />
              )}
            </Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Voided Check Image:</Th>
            <Td width="60%">
              {data.businessProfileVoidedCheckImage && (
                <Image
                  src={data.businessProfileVoidedCheckImage}
                  alt="Voided Check"
                  boxSize="100px"
                  objectFit="cover"
                />
              )}
            </Td>
          </Tr>
        </Tbody>
      </Table>

      <Divider my={6} />

      {/* Owners Information */}
      <Heading as="h2" size="lg" mb={5}>
        Owners Information
      </Heading>
      {data.owners.map((owner, index) => (
        <Table variant="simple" mb={6} key={index}>
          <Tbody>
            <Tr>
              <Th color="blue.500" width="40%" colSpan={2} textAlign="center" >Owner:</Th>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">First Name:</Th>
              <Td width="60%">{owner.ownerFirstName}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">Middle Name:</Th>
              <Td width="60%">{owner.ownerMiddleName}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">Last Name:</Th>
              <Td width="60%">{owner.ownerLastName}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">Driver Licence / State ID / Passport Number:</Th>
              <Td width="60%">{owner.ownerStateID}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">SSN:</Th>
              <Td width="60%">{owner.ownerSSN}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">Ownership %:</Th>
              <Td width="60%">{owner.ownerPercentOwnership}%</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">Job Title:</Th>
              <Td width="60%">{owner.ownerTitle}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">Birthday:</Th>
              <Td width="60%">{owner.ownerBirthday}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">Email:</Th>
              <Td width="60%">{owner.ownerEmail}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">Legal Address:</Th>
              <Td width="60%">{owner.ownerAddress}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">City:</Th>
              <Td width="60%">{owner.ownerCity}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">Owner ZIP Code:</Th>
              <Td width="60%">{owner.ownerZip}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500" width="40%">Phone:</Th>
              <Td width="60%">{owner.ownerPhone}</Td>
            </Tr>
          </Tbody>
        </Table>
      ))}

      <Divider my={6} />

      {/* Controller and Officer Information */}
      <Heading as="h2" size="lg" mb={5}>
        Controlling Officer
      </Heading>
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500" width="40%">Has the controlling officer already been entered as one of the owners?:</Th>
            <Td width="60%">{data.controllerOfficerOfficerIsOwner}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">First Name:</Th>
            <Td width="60%">{data.controllerOfficerFirstName}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Middle Name:</Th>
            <Td width="60%">{data.controllerOfficerMiddleName}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Last Name:</Th>
            <Td width="60%">{data.controllerOfficerLastName}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Date of Birth:</Th>
            <Td width="60%">{data.controllerOfficerDob}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Job Title:</Th>
            <Td width="60%">{data.controllerOfficerTitle}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Email:</Th>
            <Td width="60%">{data.controllerOfficerEmail}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Address:</Th>
            <Td width="60%">{data.controllerOfficerAddress}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Legal ZIP Code:</Th>
            <Td width="60%">{data.controllerOfficerZip}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Home phone:</Th>
            <Td width="60%">{data.controllerOfficerHomePhone}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Driver License Number:</Th>
            <Td width="60%">{data.controllerOfficerLicenseNumber}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Expiration Date:</Th>
            <Td width="60%">{data.controllerOfficerLicenseNumberExpires}</Td>
          </Tr>
        </Tbody>
      </Table>

      <Divider my={6} />

      {/* Controller and Officer Information */}
      <Heading as="h2" size="lg" mb={5}>
        Sales Profile
      </Heading>
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500" width="40%">Current Processor:</Th>
            <Td width="60%">{data.salesProfileCurrentProcessor}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Retail Chip Swipe %:</Th>
            <Td width="60%">{data.salesProfileRetailChipSwipe}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Mail Phone %:</Th>
            <Td width="60%">{data.salesProfileMailPhone}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Internet %:</Th>
            <Td width="60%">{data.salesProfileInternetPerc}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Avg Ticket:</Th>
            <Td width="60%">{data.salesProfileAvgTicket}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Max Ticket:</Th>
            <Td width="60%">{data.salesProfileMaxTicket}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Monthly Volume:</Th>
            <Td width="60%">{data.salesProfileMonthlyVolume}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">B2B %:</Th>
            <Td width="60%">{data.salesProfileB2BPerc}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">B2C %:</Th>
            <Td width="60%">{data.salesProfileB2CPerc}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">B2G %:</Th>
            <Td width="60%">{data.salesProfileB2GPerc}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500" width="40%">Are you accepting today VISA, MASTERCARD, DISCOVER, AMEX for payments?:</Th>
            <Td width="60%">{data.salesProfileCurrentlyMCVISA}</Td>
          </Tr>
        </Tbody>
      </Table>
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
}


export default SendConfirm;