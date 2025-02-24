import * as yup from "yup";

export const businessProfileSchema = yup.object().shape({
  industry: yup.string().required("Industry is required"),
  category: yup.string().required("Category is required"),
  privacyPolicyUrl: yup
    .string()
    .url("Must be a valid URL")
    .required("Privacy Policy URL is required"),
  returnsPolicyUrl: yup
    .string()
    .url("Must be a valid URL")
    .required("Returns Policy URL is required"),
  tcPolicyUrl: yup
    .string()
    .url("Must be a valid URL")
    .required("Terms and Conditions Policy URL is required"),
  gstExempt: yup.boolean().required("GST Exempt is required"),
  gstNumber: yup.string().required("GST Number is required"),
  descriptionOfGoods: yup.string().required("Description of Goods is required"),
  saleChannels: yup.array().of(
    yup.object().shape({
      channelType: yup.string().required("Channel Type is required"),
      percentageOfSales: yup
        .number()
        .typeError("Percentage of Sales must be a number")
        .required("Percentage of Sales is required"),
    })
  ),
  shipping: yup.object().shape({
    shippingRequired: yup.boolean().required("Shipping Required is required"),
    inventory: yup.boolean().required("Inventory is required"),
    deliveryTimePercentage: yup.object().shape({
      oneToSevenDays: yup
        .number()
        .typeError("One to Seven Days must be a number")
        .required("One to Seven Days is required"),
      eightToFourteenDays: yup
        .number()
        .typeError("Eight to Fourteen Days must be a number")
        .required("Eight to Fourteen Days is required"),
      fifteenToThirtyDays: yup
        .number()
        .typeError("Fifteen to Thirty Days must be a number")
        .required("Fifteen to Thirty Days is required"),
      moreThanThirtyDays: yup
        .number()
        .typeError("More than Thirty Days must be a number")
        .required("More than Thirty Days is required"),
    }),
  }),
  pciCompliance: yup.object().shape({
    isEnabled: yup.boolean().required("PCI Compliance Enabled is required"),
    pciLevel: yup.string().required("PCI Level is required"),
    storesSensitiveData: yup
      .boolean()
      .required("Stores Sensitive Data is required"),
    dataCompromised: yup.boolean().required("Data Compromised is required"),
  }),
  customField1: yup.string().optional(),
  customField2: yup.string().optional(),
  customField3: yup.string().optional(),
  mccCode: yup.string().required("MCC Code is required"),
  seasonalBusiness: yup.boolean().required("Seasonal Business is required"),
  seasonalBusinessMonths: yup
    .array()
    .of(yup.string().required("Seasonal Business Month is required")),
  processingMethods: yup.object().shape({
    deviceTerminal: yup
      .number()
      .typeError("Device Terminal must be a number")
      .required("Device Terminal is required"),
    moTo: yup
      .number()
      .typeError("MO/TO must be a number")
      .required("MO/TO is required"),
    online: yup
      .number()
      .typeError("Online must be a number")
      .required("Online is required"),
  }),
  merchantBillingType: yup
    .string()
    .required("Merchant Billing Type is required"),
  merchantPricingModel: yup
    .string()
    .required("Merchant Pricing Model is required"),
  businessProfileDocuments: yup.object().shape({
    pciCertificate: yup.object().shape({
      fileName: yup.string().required("PCI Certificate File Name is required"),
      fileBody: yup.string().required("PCI Certificate File Body is required"),
    }),
    customDocument1: yup.object().shape({
      fileName: yup.string().optional(),
      fileBody: yup.string().optional(),
    }),
    customDocument2: yup.object().shape({
      fileName: yup.string().optional(),
      fileBody: yup.string().optional(),
    }),
    customDocument3: yup.object().shape({
      fileName: yup.string().optional(),
      fileBody: yup.string().optional(),
    }),
  }),
});
