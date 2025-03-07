type Address = {
  street: string;
  apartment: string;
  city: string;
  country: string;
  stateCode: string;
  zip: string;
};

type Owner = {
  firstName: string;
  middleName: string;
  lastName: string;
  stateID: string;
  ssn: string;
  percentOwnership: number;
  title: string;
  birthday: string;
  email: string;
  address: Address;
  city: string;
  zip: string;
  phone: string;
};

type ContactDetails = {
  contactType: string;
  firstName: string;
  lastName: string;
  legalName: string;
  email: string;
  mobilePhone: string;
  homePhone: string;
  address: Address;
};

type BankingDetails = {
  accountNumber: string;
  accountType: string;
  accountHolderName: string;
  entityType: string;
  routingNumber: string;
  bankName: string;
  plaidAccessToken: string;
  billingAddress: Address;
  documentsVoidCheck: string;
  documentsCustomDocument1: string;
  documentsCustomDocument2: string;
  documentsCustomDocument3: string;
};

type BusinessFinancials = {
  avgTicketPriceProjection: string;
  highestTicketPriceProjection: string;
  isAnnualAmexVolumeExceedMillionDollars: boolean;
};

type AllDataMozartForm = {
  businessName: string;
  businessLegalName: string;
  businessRegistrationNumber: string;
  businessOwnershipType: string;
  businessTaxId: string;
  businessGiin: string;
  businessIncorporationDate: string;
  businessBusinessAddress: Address;
  businessCorporateAddress: Address;
  businessCompanyWebsiteUrl: string;
  businessDbaName: string;
  businessDbaWebsiteUrl: string;
  businessDynamicDescriptor: string;
  businessDescription: string;
  businessCustomerServicePhone: string;
  businessCustomerServiceEmail: string;
  businessFax: string;
  businessAgreement: string;
  businessCustomField1: string;
  businessCustomField2: string;
  businessCustomField3: string;
  businessPhoneNumber: string;
  businessEmailAddressForNotices: string;
  businessNumberOfLocations: number;
  businessNumberOfOutlets: number;
  corpLegalFedTaxId: string;
  corpLegalName: string;
  corpLegalAddress: string;
  corpLegalCity: string;
  corpLegalState: string;
  corpLegalZip: string;
  corpLegalPhone: string;
  corpLegalEmail: string;
  yearsInBusiness: number;
  aditionalDetailsLocations: number;
  aditionalDetailsWebsite: string;
  aditionalDetailsMailing: string;
  businessFinancials: BusinessFinancials;
  contactDetails: ContactDetails[];
  bankingDetails: BankingDetails;
  ownerDetails: Owner[];
};

export default AllDataMozartForm;
