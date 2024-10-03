import { Box, Checkbox, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
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
type SalesProfileDataForm = z.infer<typeof schema>;

interface SalesProfileFormProps {
  title: string;
  description: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: SalesProfileDataForm) => void;
  formData?: SalesProfileDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
}

const SalesProfileForm: React.FC<SalesProfileFormProps> = ({
  onNext,
  onDataChange,
  formData = {
    salesProfileCurrentlyMCVISA: 0,
    salesProfileRetailChipSwipe: "",
    salesProfileCurrentProcessor: "",
    salesProfileImprintCard: "",
    salesProfileAvgTicket: "",
    salesProfileMaxTicket: "",
    salesProfileMonthlyVolume: "",
    salesProfileMailPhone: "",
    salesProfileNextDayFunding: 0,
    salesProfileInternetPerc: "",
    salesProfileB2BPerc: "",
    salesProfileB2CPerc: "",
    salesProfileB2GPerc: "",
  },
  formRef,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SalesProfileDataForm>({
    resolver: zodResolver(schema),
    defaultValues: formData,
  });
  const onSubmit: SubmitHandler<SalesProfileDataForm> = (data) => {
    console.log(data);
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };
  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <FormControl mb={4} isInvalid={!!errors.salesProfileCurrentProcessor}>
        <FormLabel htmlFor="salesProfileCurrentProcessor">
          Current Processor
        </FormLabel>
        <Input
          id="salesProfileCurrentProcessor"
          type="text"
          placeholder="Enter current processor"
          {...register("salesProfileCurrentProcessor")}
        />
        {errors.salesProfileCurrentProcessor && (
          <Text color="semantic.error.DEFAULT">
            {errors.salesProfileCurrentProcessor.message}
          </Text>
        )}
      </FormControl>

      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.salesProfileRetailChipSwipe}>
          <FormLabel htmlFor="salesProfileRetailChipSwipe">
            Retail Chip Swipe %
          </FormLabel>
          <Input
            id="salesProfileRetailChipSwipe"
            type="text"
            placeholder="Enter retail chip swipe %"
            {...register("salesProfileRetailChipSwipe")}
          />
          {errors.salesProfileRetailChipSwipe && (
            <Text color="semantic.error.DEFAULT">
              {errors.salesProfileRetailChipSwipe.message}
            </Text>
          )}
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.salesProfileImprintCard}>
          <FormLabel htmlFor="salesProfileImprintCard">
            Imprint Card %
          </FormLabel>
          <Input
            id="salesProfileImprintCard"
            type="text"
            placeholder="Enter imprint card %"
            {...register("salesProfileImprintCard")}
          />
          {errors.salesProfileImprintCard && (
            <Text color="semantic.error.DEFAULT">
              {errors.salesProfileImprintCard.message}
            </Text>
          )}
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.salesProfileMailPhone}>
          <FormLabel htmlFor="salesProfileMailPhone">Mail Phone %</FormLabel>
          <Input
            id="salesProfileMailPhone"
            type="text"
            placeholder="Enter Mail Phone %"
            {...register("salesProfileMailPhone")}
          />
          {errors.salesProfileMailPhone && (
            <Text color="semantic.error.DEFAULT">
              {errors.salesProfileMailPhone.message}
            </Text>
          )}
        </FormControl>
      </HStack>

      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.salesProfileAvgTicket}>
          <FormLabel htmlFor="salesProfileAvgTicket">Avg Ticket</FormLabel>
          <Input
            id="salesProfileAvgTicket"
            type="text"
            placeholder="Enter avg ticket"
            {...register("salesProfileAvgTicket")}
          />
          {errors.salesProfileAvgTicket && (
            <Text color="semantic.error.DEFAULT">
              {errors.salesProfileAvgTicket.message}
            </Text>
          )}
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.salesProfileMaxTicket}>
          <FormLabel htmlFor="salesProfileMaxTicket">Max Ticket</FormLabel>
          <Input
            id="salesProfileMaxTicket"
            type="text"
            placeholder="Enter max ticket"
            {...register("salesProfileMaxTicket")}
          />
          {errors.salesProfileMaxTicket && (
            <Text color="semantic.error.DEFAULT">
              {errors.salesProfileMaxTicket.message}
            </Text>
          )}
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.salesProfileMonthlyVolume}>
          <FormLabel htmlFor="salesProfileMonthlyVolume">
            Monthly Volume
          </FormLabel>
          <Input
            id="salesProfileMonthlyVolume"
            type="text"
            placeholder="Enter monthly volume"
            {...register("salesProfileMonthlyVolume")}
          />
          {errors.salesProfileMonthlyVolume && (
            <Text color="semantic.error.DEFAULT">
              {errors.salesProfileMonthlyVolume.message}
            </Text>
          )}
        </FormControl>
      </HStack>

      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.salesProfileInternetPerc}>
          <FormLabel htmlFor="salesProfileInternetPerc">Internet %</FormLabel>
          <Input
            id="salesProfileInternetPerc"
            type="text"
            placeholder="Enter Internet %"
            {...register("salesProfileInternetPerc")}
          />
          {errors.salesProfileInternetPerc && (
            <Text color="semantic.error.DEFAULT">
              {errors.salesProfileInternetPerc.message}
            </Text>
          )}
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.salesProfileB2BPerc}>
          <FormLabel htmlFor="salesProfileB2BPerc">B2B %</FormLabel>
          <Input
            id="salesProfileB2BPerc"
            type="text"
            placeholder="Enter B2B"
            {...register("salesProfileB2BPerc")}
          />
          {errors.salesProfileB2BPerc && (
            <Text color="semantic.error.DEFAULT">
              {errors.salesProfileB2BPerc.message}
            </Text>
          )}
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.salesProfileB2CPerc}>
          <FormLabel htmlFor="salesProfileB2CPerc">B2C %</FormLabel>
          <Input
            id="salesProfileB2CPerc"
            type="text"
            placeholder="Enter B2C"
            {...register("salesProfileB2CPerc")}
          />
          {errors.salesProfileB2CPerc && (
            <Text color="semantic.error.DEFAULT">
              {errors.salesProfileB2CPerc.message}
            </Text>
          )}
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.salesProfileB2GPerc}>
          <FormLabel htmlFor="salesProfileB2GPerc">B2G %</FormLabel>
          <Input
            id="salesProfileB2GPerc"
            type="text"
            placeholder="Enter B2G"
            {...register("salesProfileB2GPerc")}
          />
          {errors.salesProfileB2GPerc && (
            <Text color="semantic.error.DEFAULT">
              {errors.salesProfileB2GPerc.message}
            </Text>
          )}
        </FormControl>
      </HStack>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.salesProfileCurrentlyMCVISA}>
          <HStack spacing={4} mb={4}>
            <FormLabel htmlFor="salesProfileCurrentlyMCVISA">
              Processing ?
            </FormLabel>
            <Checkbox
              id="salesProfileCurrentlyMCVISA"
              {...register("salesProfileCurrentlyMCVISA")}
            />
            {errors.salesProfileCurrentlyMCVISA && (
              <Text color="semantic.error.DEFAULT">
                {errors.salesProfileCurrentlyMCVISA.message}
              </Text>
            )}
          </HStack>
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.salesProfileNextDayFunding}>
          <HStack spacing={4} mb={4}>
            <FormLabel htmlFor="salesProfileNextDayFunding">
              Next Day Funding
            </FormLabel>
            <Checkbox
              id="salesProfileNextDayFunding"
              {...register("salesProfileNextDayFunding")}
            />
            {errors.salesProfileNextDayFunding && (
              <Text color="semantic.error.DEFAULT">
                {errors.salesProfileNextDayFunding.message}
              </Text>
            )}
          </HStack>
        </FormControl>
      </HStack>
    </Box>
  );
};

export default SalesProfileForm;
