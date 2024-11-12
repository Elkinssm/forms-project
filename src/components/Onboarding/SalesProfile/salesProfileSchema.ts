import { z } from "zod";

export const salesProfileSchema = z.object({
  
  salesProfileCurrentProcessor: z
  .string()
  .optional(),

  salesProfileRetailChipSwipe: z
    .string()
    .min(1, "The Retail Chip Swipe must be at least 1 chars"),
  salesProfileMailPhone: z
    .string()
    .min(1, "The Mail Phone must be at least 1 chars"),
  salesProfileInternetPerc: z
    .string()
    .min(1, "The Internet % must be at least 1 chars"),

  salesProfileAvgTicket: z
    .string()
    .min(1, "The Avg Ticket must be at least 1 chars"),
  salesProfileMaxTicket: z
    .string()
    .min(1, "The Max Ticket must be at least 1 chars"),
  salesProfileMonthlyVolume: z
    .string()
    .min(1, "The Monthly Volume must be at least 1 chars"),
 
  salesProfileB2BPerc: z.string().min(1, "The B2B % must be at least 1 chars"),
  salesProfileB2CPerc: z.string().min(1, "The B2C % must be at least 1 chars"),
  salesProfileB2GPerc: z.string().min(1, "The B2G % must be at least 1 chars"),

  salesProfileCurrentlyMCVISA: z.enum(["yes", "no"]).default("no"),
})
// Validación para la suma de B2B %, B2C %, y B2G % igual a 100
.refine((data) => {
  const b2b = parseFloat(data.salesProfileB2BPerc);
  const b2c = parseFloat(data.salesProfileB2CPerc);
  const b2g = parseFloat(data.salesProfileB2GPerc);

  return b2b + b2c + b2g === 100;
}, {
  message: "The sum of B2B %, B2C %, and B2G % must equal 100",
  path: ["salesProfileB2BPerc"],
})
.refine((data) => {
  const b2b = parseFloat(data.salesProfileB2BPerc);
  const b2c = parseFloat(data.salesProfileB2CPerc);
  const b2g = parseFloat(data.salesProfileB2GPerc);

  return b2b + b2c + b2g === 100;
}, {
  message: "The sum of B2B %, B2C %, and B2G % must equal 100",
  path: ["salesProfileB2CPerc"],
});
// .refine((data) => {
//   const b2b = parseFloat(data.salesProfileB2BPerc);
//   const b2c = parseFloat(data.salesProfileB2CPerc);
//   const b2g = parseFloat(data.salesProfileB2GPerc);

//   return b2b + b2c + b2g === 100;
// }, {
//   message: "The sum of B2B %, B2C %, and B2G % must equal 100",
//   path: ["salesProfileB2GPerc"],
// })
// // Validación para la suma de Retail Chip Swipe, Mail Phone, e Internet % igual a 100
// .refine((data) => {
//   const retailChipSwipe = parseFloat(data.salesProfileRetailChipSwipe);
//   const mailPhone = parseFloat(data.salesProfileMailPhone);
//   const internetPerc = parseFloat(data.salesProfileInternetPerc);

//   return retailChipSwipe + mailPhone + internetPerc === 100;
// }, {
//   message: "The sum of Retail Chip Swipe %, Mail Phone %, and Internet % must equal 100",
//   path: ["salesProfileRetailChipSwipe"],
// })
// .refine((data) => {
//   const retailChipSwipe = parseFloat(data.salesProfileRetailChipSwipe);
//   const mailPhone = parseFloat(data.salesProfileMailPhone);
//   const internetPerc = parseFloat(data.salesProfileInternetPerc);

//   return retailChipSwipe + mailPhone + internetPerc === 100;
// }, {
//   message: "The sum of Retail Chip Swipe %, Mail Phone %, and Internet % must equal 100",
//   path: ["salesProfileMailPhone"],
// })
// .refine((data) => {
//   const retailChipSwipe = parseFloat(data.salesProfileRetailChipSwipe);
//   const mailPhone = parseFloat(data.salesProfileMailPhone);
//   const internetPerc = parseFloat(data.salesProfileInternetPerc);

//   return retailChipSwipe + mailPhone + internetPerc === 100;
// }, {
//   message: "The sum of Retail Chip Swipe %, Mail Phone %, and Internet % must equal 100",
//   path: ["salesProfileInternetPerc"],
// });
