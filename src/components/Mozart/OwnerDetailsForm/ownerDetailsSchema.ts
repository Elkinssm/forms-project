import * as yup from "yup";

export const ownerDetailsSchema = yup.object().shape({
  id: yup.string().required("ID is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  idNumber: yup.string().required("ID Number is required"),
  giin: yup.string().required("GIIN is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  mobilePhone: yup.string().required("Mobile Phone is required"),
  homePhone: yup.string().required("Home Phone is required"),
  address: yup.object().shape({
    street: yup.string().required("Street is required"),
    apartment: yup.string().optional(),
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
    stateCode: yup.string().required("State Code is required"),
    zip: yup.string().required("ZIP is required"),
  }),
  dateOfBirth: yup
    .date()
    .typeError("Date of Birth must be a valid date")
    .required("Date of Birth is required"),
  position: yup.string().required("Position is required"),
  citizenship: yup.string().required("Citizenship is required"),
  ownershipDate: yup
    .date()
    .typeError("Ownership Date must be a valid date")
    .required("Ownership Date is required"),
  ownershipPercentage: yup
    .number()
    .typeError("Ownership Percentage must be a number")
    .required("Ownership Percentage is required")
    .min(0, "Ownership Percentage must be at least 0")
    .max(100, "Ownership Percentage cannot exceed 100"),
  driversLicenceNumber: yup
    .string()
    .required("Driver's Licence Number is required"),
  driversLicenceCountry: yup
    .string()
    .required("Driver's Licence Country is required"),
  driversLicenceState: yup
    .string()
    .required("Driver's Licence State is required"),
  customField1: yup.string().optional(),
  customField2: yup.string().optional(),
  customField3: yup.string().optional(),
  controlProng: yup.boolean().required("Control Prong is required"),
  ownerDetailsDocuments: yup.object().shape({
    proofOfId: yup.object().shape({
      fileName: yup.string().required("Proof of ID file name is required"),
      fileBody: yup.string().required("Proof of ID file body is required"),
    }),
    proofOfAddress: yup.object().shape({
      fileName: yup.string().required("Proof of Address file name is required"),
      fileBody: yup.string().required("Proof of Address file body is required"),
    }),
    personalGuarantee: yup.object().shape({
      fileName: yup
        .string()
        .required("Personal Guarantee file name is required"),
      fileBody: yup
        .string()
        .required("Personal Guarantee file body is required"),
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
    driversLicenseFront: yup.object().shape({
      fileName: yup
        .string()
        .required("Driver's License Front file name is required"),
      fileBody: yup
        .string()
        .required("Driver's License Front file body is required"),
    }),
    driversLicenseBack: yup.object().shape({
      fileName: yup
        .string()
        .required("Driver's License Back file name is required"),
      fileBody: yup
        .string()
        .required("Driver's License Back file body is required"),
    }),
  }),
});
