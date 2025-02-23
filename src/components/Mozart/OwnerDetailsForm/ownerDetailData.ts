export const ownerDetailsData = {
  id: "",
  firstName: "",
  lastName: "",
  idNumber: "",
  giin: "",
  email: "",
  mobilePhone: "",
  homePhone: "",
  address: {
    street: "",
    apartment: "",
    city: "",
    country: "",
    stateCode: "",
    zip: "",
  },
  dateOfBirth: new Date(), // Ajustar a Date
  position: "",
  citizenship: "",
  ownershipDate: new Date(), // Ajustar a Date
  ownershipPercentage: 0,
  driversLicenceNumber: "",
  driversLicenceCountry: "",
  driversLicenceState: "",
  customField1: "",
  customField2: "",
  customField3: "",
  controlProng: false,
  ownerDetailsDocuments: {
    proofOfId: {
      fileName: "",
      fileBody: "",
    },
    proofOfAddress: {
      fileName: "",
      fileBody: "",
    },
    personalGuarantee: {
      fileName: "",
      fileBody: "",
    },
    customDocument1: {
      fileName: "",
      fileBody: "",
    },
    customDocument2: {
      fileName: "",
      fileBody: "",
    },
    customDocument3: {
      fileName: "",
      fileBody: "",
    },
    driversLicenseFront: {
      fileName: "",
      fileBody: "",
    },
    driversLicenseBack: {
      fileName: "",
      fileBody: "",
    },
  },
};
