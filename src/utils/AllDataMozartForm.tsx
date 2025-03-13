type Address = {
  street: string;
  apartment: string;
  city: string;
  country: string;
  stateCode: string;
  zip: string;
};

type ContactDetails = {
  contactDetailsContactType: string;
  contactDetailsFirstName: string;
  contactDetailsLastName: string;
  contactDetailsLegalName: string;
  contactDetailsEmail: string;
  contactDetailsMobilePhone: string;
  contactDetailsHomePhone: string;
  contactDetailsAddress: Address;
};

type Owner = {
  firstName: string;
  middleName?: string;
  lastName: string;
  stateID?: string;
  ssn?: string;
  percentOwnership: number;
  title?: string;
  birthday: string;
  email: string;
  address: Address;
  phone?: string;
  citizenship?: string;
  controlProng?: boolean;
  customField1?: string;
  customField2?: string;
  customField3?: string;
  dateOfBirth?: string;
  driversLicenceCountry?: string;
  driversLicenceNumber?: string;
  driversLicenceState?: string;
  giin?: string;
  homePhone?: string;
  id?: string;
  idNumber?: string;
  mobilePhone?: string;
  ownershipDate?: string;
  ownershipPercentage: number;
  position?: string;
};

type BusinessFinancials = {
  customField1: string;
  customField2: string;
  customField3: string;
  highestTicketPriceProjection: string;
  isAnnualAmexVolumeExceedMillionDollars: boolean;
  monthlyVolumeProjection: {
    americanExpress: string;
    discover: string;
    localDebitCard: string;
    mastercard: string;
    visa: string;
  };
  volumeProjection: {
    americanExpress: string;
    discover: string;
    localDebitCard: string;
    mastercard: string;
    visa: string;
  };
  avgTicketPriceProjection: string;
};

// Business Profile**
type BusinessProfile = {
  category: string;
  descriptionOfGoods: string;
  industry: string;
  mccCode: string;
  merchantBillingType: string;
  merchantPricingModel: string;
  gstNumber: string;
  privacyPolicyUrl: string;
  returnsPolicyUrl: string;
  tcPolicyUrl: string;
};

// PCI Compliance
type PCICompliance = {
  dataCompromised: string; // Viene como "on" o vacío
  isEnabled: string; // Viene como "on" o vacío
  pciLevel: string;
};

// Processing Methods
type ProcessingMethods = {
  deviceTerminal: string;
  moTo: string;
  online: string;
};

//Shipping
type Shipping = {
  shippingRequired: string; // "on" o vacío
  inventory?: string; // "on" o vacío
  deliveryTimePercentage: {
    oneToSevenDays: string;
    eightToFourteenDays: string;
    fifteenToThirtyDays: string;
    moreThanThirtyDays: string;
  };
};

type MonthlyVolumeProjection = {
  americanExpress: string;
  discover: string;
  localDebitCard: string;
  mastercard: string;
  visa: string;
};

type VolumeProjection = {
  americanExpress: string;
  discover: string;
  localDebitCard: string;
  mastercard: string;
  visa: string;
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

  // Información Corporativa
  corpLegalFedTaxId: string;
  corpLegalName: string;
  corpLegalAddress: string;
  corpLegalCity: string;
  corpLegalState: string;
  corpLegalZip: string;
  corpLegalPhone: string;
  corpLegalEmail: string;
  yearsInBusiness: number;

  // Detalles Adicionales
  aditionalDetailsLocations: number;
  aditionalDetailsWebsite: string;
  aditionalDetailsMailing: string;

  // Datos Financieros
  businessFinancials: BusinessFinancials;

  // Ahora Business Profile es un objeto
  businessProfile: BusinessProfile;

  // Contactos y Dueños
  contacts: ContactDetails[];
  owners: Owner[];

  // Información Bancaria
  bankingBankAccountAccountNumber: string;
  bankingBankAccountAccountType: string;
  bankingBankAccountAccountHolderName: string;
  bankingBankAccountEntityType: string;
  bankingBankAccountRoutingNumber: string;
  bankingBankAccountBankName: string;
  bankingPlaidAccessToken: string;
  bankingBillingAddressStreet: string;

  // Documentos
  documentsVoidCheck: string;
  documentsCustomDocument1: string;
  documentsCustomDocument2: string;
  documentsCustomDocument3: string;

  category: string;
  descriptionOfGoods: string;
  industry: string;
  mccCode: string;
  merchantBillingType: string;
  merchantPricingModel: string;
  gstNumber: string;
  privacyPolicyUrl: string;
  returnsPolicyUrl: string;
  tcPolicyUrl: string;

  // PCI, Métodos de Procesamiento y Envío
  pciCompliance: PCICompliance;
  processingMethods: ProcessingMethods;
  shipping: Shipping;

  customField1: string;
  customField2: string;
  customField3: string;
  highestTicketPriceProjection: string;
  isAnnualAmexVolumeExceedMillionDollars: string; // 🔄 Llega como "on" o vacío
  monthlyVolumeProjection: MonthlyVolumeProjection;
  volumeProjection: VolumeProjection;
};

export default AllDataMozartForm;
