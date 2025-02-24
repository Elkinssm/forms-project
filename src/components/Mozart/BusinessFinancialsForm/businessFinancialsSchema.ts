import * as yup from "yup";

export const businessFinancialsSchema = yup.object().shape({
  volumeProjection: yup.object().shape({
    visa: yup.string().required("Visa volume projection is required"),
    mastercard: yup
      .string()
      .required("Mastercard volume projection is required"),
    americanExpress: yup
      .string()
      .required("American Express volume projection is required"),
    localDebitCard: yup
      .string()
      .required("Local Debit Card volume projection is required"),
    discover: yup.string().required("Discover volume projection is required"),
  }),
  avgTicketPriceProjection: yup
    .string()
    .required("Average ticket price projection is required"),
  customField1: yup.string().required("Custom Field 1 is required"),
  customField2: yup.string().required("Custom Field 2 is required"),
  customField3: yup.string().required("Custom Field 3 is required"),
  annualVolumeProjection: yup.object().shape({
    visa: yup.string().required("Visa annual volume projection is required"),
    mastercard: yup
      .string()
      .required("Mastercard annual volume projection is required"),
    americanExpress: yup
      .string()
      .required("American Express annual volume projection is required"),
    localDebitCard: yup
      .string()
      .required("Local Debit Card annual volume projection is required"),
    discover: yup
      .string()
      .required("Discover annual volume projection is required"),
  }),
  monthlyVolumeProjection: yup.object().shape({
    visa: yup.string().required("Visa monthly volume projection is required"),
    mastercard: yup
      .string()
      .required("Mastercard monthly volume projection is required"),
    americanExpress: yup
      .string()
      .required("American Express monthly volume projection is required"),
    localDebitCard: yup
      .string()
      .required("Local Debit Card monthly volume projection is required"),
    discover: yup
      .string()
      .required("Discover monthly volume projection is required"),
  }),
  highestTicketPriceProjection: yup
    .string()
    .required("Highest ticket price projection is required"),
  isAnnualAmexVolumeExceedMillionDollars: yup
    .boolean()
    .required("Please specify if annual Amex volume exceeds a million dollars"),
});
