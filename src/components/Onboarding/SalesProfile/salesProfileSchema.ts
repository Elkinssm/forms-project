import { z } from "zod";

export const salesProfileSchema = z.object({
  salesProfileCurrentlyMCVISA: z.enum(["yes", "no"]).default("no"),
  salesProfileRetailChipSwipe: z
    .string()
    .min(1, "The Retail Chip Swipe must be at least 1 chars"),
  salesProfileCurrentProcessor: z
    .string()
    .min(1, "The Current Processorp must be at least 1 chars"),
  salesProfileImprintCard: z
    .string()
    .min(1, "The Imprint Card must be at least 1 chars"),
  salesProfileAvgTicket: z
    .string()
    .min(1, "The Avg Ticket must be at least 1 chars"),
  salesProfileMaxTicket: z
    .string()
    .min(1, "The Max Ticket must be at least 1 chars"),
  salesProfileMonthlyVolume: z
    .string()
    .min(1, "The Monthly Volume must be at least 1 chars"),
  salesProfileMailPhone: z
    .string()
    .min(1, "The Mail Phone must be at least 1 chars"),
  salesProfileNextDayFunding: z.enum(["yes", "no"]).default("no"),
  salesProfileInternetPerc: z
    .string()
    .min(1, "The Internet % must be at least 1 chars"),
  salesProfileB2BPerc: z.string().min(1, "The B2B % must be at least 1 chars"),
  salesProfileB2CPerc: z.string().min(1, "The B2C % must be at least 1 chars"),
  salesProfileB2GPerc: z.string().min(1, "The B2G % must be at least 1 chars"),
});
