export const businessProfileData = {
  industry: "",
  category: "",
  privacyPolicyUrl: "",
  returnsPolicyUrl: "",
  tcPolicyUrl: "",
  gstExempt: false,
  gstNumber: "",
  descriptionOfGoods: "",
  saleChannels: [
    {
      channelType: "",
      percentageOfSales: 0,
    },
  ],
  shipping: {
    shippingRequired: false,
    inventory: false,
    deliveryTimePercentage: {
      oneToSevenDays: 0,
      eightToFourteenDays: 0,
      fifteenToThirtyDays: 0,
      moreThanThirtyDays: 0,
    },
  },
  pciCompliance: {
    isEnabled: false,
    pciLevel: "",
    storesSensitiveData: false,
    dataCompromised: false,
  },
  customField1: "",
  customField2: "",
  customField3: "",
  mccCode: "",
  seasonalBusiness: false,
  seasonalBusinessMonths: [""],
  processingMethods: {
    deviceTerminal: 0,
    moTo: 0,
    online: 0,
  },
  merchantBillingType: "",
  merchantPricingModel: "",
  businessProfileDocuments: {
    pciCertificate: {
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
  },
};
