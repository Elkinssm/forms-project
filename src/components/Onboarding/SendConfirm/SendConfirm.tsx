import React from "react";
import { Box, Divider, Heading, Table, Tbody, Td, Text, Th, Tr, VStack, Image, Center, Button } from "@chakra-ui/react";
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
  // debugger
  console.log(formDataAll);

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
            <Th color="blue.500">Federal Tax ID (EIN):</Th>
            <Td>{data.corpLegalFedTaxId}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Years in Business:</Th>
            <Td>{data.yearsInBusiness}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Legal Name:</Th>
            <Td>{data.corpLegalName}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Legal Phone:</Th>
            <Td>{data.corpLegalPhone}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Legal Email:</Th>
            <Td>{data.corpLegalEmail}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Legal Address:</Th>
            <Td>{data.corpLegalAddress}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Legal City:</Th>
            <Td>{data.corpLegalCity}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Legal State:</Th>
            <Td>{data.corpLegalState}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Legal Zip Code:</Th>
            <Td>{data.corpLegalZip}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Number of Locations:</Th>
            <Td>{data.aditionalDetailsLocations}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Website address:</Th>
            <Td>{data.aditionalDetailsWebsite}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Mailing:</Th>
            <Td>{data.aditionalDetailsMailing}</Td>
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
            <Th color="blue.500">Same Information as Legal:</Th>
            <Td>{data.controllerOfficerIsOwner}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">DBA Name / Location Name:</Th>
            <Td>{data.merchDBAName}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Location Phone:</Th>
            <Td>{data.merchPhone}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Location Address:</Th>
            <Td>{data.merchAddress}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Location City:</Th>
            <Td>{data.merchCity}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Location State:</Th>
            <Td>{data.merchState}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Location Zip Code:</Th>
            <Td>{data.merchZip}</Td>
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
            <Th color="blue.500">Ownership Type:</Th>
            <Td>{data.businessProfileOwnershipType}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Type of Business:</Th>
            <Td>{data.businessProfileBusinessType}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Goods & Services:</Th>
            <Td>{data.businessProfileGoodsServices}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Bank Name:</Th>
            <Td>{data.businessProfileBankName}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Business Check Routing:</Th>
            <Td>{data.businessProfileBusinessCheckRouting}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Business Checking Account:</Th>
            <Td>{data.businessProfileBusinessCheckingAccount}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Driver License Image:</Th>
            <Td>
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
            <Th color="blue.500">Voided Check Image:</Th>
            <Td>
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
              <Th color="blue.500" colSpan={2} textAlign="center" >Owner:</Th>
            </Tr>
            <Tr>
              <Th color="blue.500">First Name:</Th>
              <Td>{owner.ownerFirstName}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500">Middle Name:</Th>
              <Td>{owner.ownerMiddleName}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500">Last Name:</Th>
              <Td>{owner.ownerLastName}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500">Driver Licence / State ID / Passport Number:</Th>
              <Td>{owner.ownerStateID}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500">SSN:</Th>
              <Td>{owner.ownerSSN}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500">Ownership %:</Th>
              <Td>{owner.ownerPercentOwnership}%</Td>
            </Tr>
            <Tr>
              <Th color="blue.500">Job Title:</Th>
              <Td>{owner.ownerTitle}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500">Birthday:</Th>
              <Td>{owner.ownerBirthday}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500">Email:</Th>
              <Td>{owner.ownerEmail}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500">Legal Address:</Th>
              <Td>{owner.ownerAddress}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500">City:</Th>
              <Td>{owner.ownerCity}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500">Owner ZIP Code:</Th>
              <Td>{owner.ownerZip}</Td>
            </Tr>
            <Tr>
              <Th color="blue.500">Phone:</Th>
              <Td>{owner.ownerPhone}</Td>
            </Tr>
          </Tbody>
        </Table>
      ))}

      <Divider my={6} />

      {/* Controller and Officer Information */}
      <Heading as="h2" size="lg" mb={5}>
        Controller and Officer Information
      </Heading>
      <Table variant="simple" mb={6}>
        <Tbody>
          <Tr>
            <Th color="blue.500">Officer is Controller:</Th>
            <Td>{data.controllerOfficerOfficerIsOwner}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">First Name:</Th>
            <Td>{data.controllerOfficerFirstName}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Middle Name:</Th>
            <Td>{data.controllerOfficerMiddleName}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Last Name:</Th>
            <Td>{data.controllerOfficerLastName}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Date of Birth:</Th>
            <Td>{data.controllerOfficerDob}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Job Title:</Th>
            <Td>{data.controllerOfficerTitle}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Email:</Th>
            <Td>{data.controllerOfficerEmail}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Address:</Th>
            <Td>{data.controllerOfficerAddress}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Legal ZIP Code:</Th>
            <Td>{data.controllerOfficerZip}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Home phone:</Th>
            <Td>{data.controllerOfficerHomePhone}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Driver License Number:</Th>
            <Td>{data.controllerOfficerLicenseNumber}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Expiration Date:</Th>
            <Td>{data.controllerOfficerLicenseNumberExpires}</Td>
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
            <Th color="blue.500">Current Processor:</Th>
            <Td>{data.salesProfileCurrentProcessor}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Retail Chip Swipe %:</Th>
            <Td>{data.salesProfileRetailChipSwipe}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Mail Phone %:</Th>
            <Td>{data.salesProfileMailPhone}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Internet %:</Th>
            <Td>{data.salesProfileInternetPerc}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Avg Ticket:</Th>
            <Td>{data.salesProfileAvgTicket}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Max Ticket:</Th>
            <Td>{data.salesProfileMaxTicket}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">Monthly Volume:</Th>
            <Td>{data.salesProfileMonthlyVolume}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">B2B %:</Th>
            <Td>{data.salesProfileB2BPerc}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">B2C %:</Th>
            <Td>{data.salesProfileB2CPerc}</Td>
          </Tr>
          <Tr>
            <Th color="blue.500">B2G %:</Th>
            <Td>{data.salesProfileB2GPerc}</Td>
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
            width={ "45%"}
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