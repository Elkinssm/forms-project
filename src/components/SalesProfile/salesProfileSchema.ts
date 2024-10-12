import { z } from "zod";

export const salesProfileSchema = z.object({
  salesProfileCurrentlyMCVISA: z.number(),
  salesProfileRetailChipSwipe: z
    .string()
    .min(2, "The Retail Chip Swipe must be at least 2 chars"),
  salesProfileCurrentProcessor: z
    .string()
    .min(2, "The Current Processorp must be at least 2 chars"),
  salesProfileImprintCard: z
    .string()
    .min(2, "The Imprint Card must be at least 2 chars"),
  salesProfileAvgTicket: z
    .string()
    .min(2, "The Avg Ticket must be at least 2 chars"),
  salesProfileMaxTicket: z
    .string()
    .min(2, "The Max Ticket must be at least 2 chars"),
  salesProfileMonthlyVolume: z
    .string()
    .min(2, "The Monthly Volume must be at least 2 chars"),
  salesProfileMailPhone: z
    .string()
    .min(2, "The Mail Phone must be at least 2 chars"),
  salesProfileNextDayFunding: z.number(),
  salesProfileInternetPerc: z
    .string()
    .min(1, "The Internet % must be at least 1 chars"),
  salesProfileB2BPerc: z.string().min(1, "The B2B % must be at least 1 chars"),
  salesProfileB2CPerc: z.string().min(1, "The B2C % must be at least 1 chars"),
  salesProfileB2GPerc: z.string().min(1, "The B2G % must be at least 1 chars"),
});
