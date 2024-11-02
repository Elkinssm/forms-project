import { Box, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { salesProfileSchema } from "./salesProfileSchema";
import ErrorMessage from "../../FormComponents/ErrorMessage";
import ReusableCheckbox from "../../FormComponents/ReusableCheckbox";

type SalesProfileDataForm = z.infer<typeof salesProfileSchema>;

interface SalesProfileFormProps {
  title: string;
  description: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: SalesProfileDataForm) => void;
  formData?: SalesProfileDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof salesProfileSchema;
}

const SalesProfileForm: React.FC<SalesProfileFormProps> = ({
  onNext,
  onDataChange,
  formData = {
    salesProfileCurrentlyMCVISA: "no",
    salesProfileRetailChipSwipe: "",
    salesProfileCurrentProcessor: "",
    salesProfileAvgTicket: "",
    salesProfileMaxTicket: "",
    salesProfileMonthlyVolume: "",
    salesProfileMailPhone: "",
    salesProfileInternetPerc: "",
    salesProfileB2BPerc: "",
    salesProfileB2CPerc: "",
    salesProfileB2GPerc: "",
  },
  validationSchema = salesProfileSchema,
  formRef,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SalesProfileDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
  });
  const onSubmit: SubmitHandler<SalesProfileDataForm> = (data) => {
    console.log(data);
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  const [
    isCheckedSalesProfileCurrentlyMCVISA,
    setIsCheckedSalesProfileCurrentlyMCVISA,
  ] = useState(false);

  const handleCheckboxChangeSalesProfileCurrentlyMCVISA = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = e.target.checked;
    setIsCheckedSalesProfileCurrentlyMCVISA(checked);

    // Actualiza el valor del checkbox en el formulario
    setValue("salesProfileCurrentlyMCVISA", checked ? "yes" : "no");
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
        <ErrorMessage error={errors.salesProfileCurrentProcessor?.message} />
      </FormControl>

      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.salesProfileRetailChipSwipe}>
          <FormLabel htmlFor="salesProfileRetailChipSwipe">
            Retail Chip Swipe %
          </FormLabel>
          <Input
            id="salesProfileRetailChipSwipe"
            type="number"
            placeholder="Enter retail chip swipe %"
            {...register("salesProfileRetailChipSwipe")}
          />
          <ErrorMessage error={errors.salesProfileRetailChipSwipe?.message} />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.salesProfileMailPhone}>
          <FormLabel htmlFor="salesProfileMailPhone">Mail Phone %</FormLabel>
          <Input
            id="salesProfileMailPhone"
            type="number"
            placeholder="Enter Mail Phone %"
            {...register("salesProfileMailPhone")}
          />
          <ErrorMessage error={errors.salesProfileMailPhone?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.salesProfileInternetPerc}>
          <FormLabel htmlFor="salesProfileInternetPerc">Internet %</FormLabel>
          <Input
            id="salesProfileInternetPerc"
            type="number"
            placeholder="Enter Internet %"
            {...register("salesProfileInternetPerc")}
          />
          <ErrorMessage error={errors.salesProfileInternetPerc?.message} />
        </FormControl>
      </HStack>

      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.salesProfileAvgTicket}>
          <FormLabel htmlFor="salesProfileAvgTicket">Avg Ticket</FormLabel>
          <Input
            id="salesProfileAvgTicket"
            type="number"
            placeholder="Enter avg ticket"
            {...register("salesProfileAvgTicket")}
          />
          <ErrorMessage error={errors.salesProfileAvgTicket?.message} />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.salesProfileMaxTicket}>
          <FormLabel htmlFor="salesProfileMaxTicket">Max Ticket</FormLabel>
          <Input
            id="salesProfileMaxTicket"
            type="number"
            placeholder="Enter max ticket"
            {...register("salesProfileMaxTicket")}
          />
          <ErrorMessage error={errors.salesProfileMaxTicket?.message} />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.salesProfileMonthlyVolume}>
          <FormLabel htmlFor="salesProfileMonthlyVolume">
            Monthly Volume
          </FormLabel>
          <Input
            id="salesProfileMonthlyVolume"
            type="number"
            placeholder="Enter monthly volume"
            {...register("salesProfileMonthlyVolume")}
          />
          <ErrorMessage error={errors.salesProfileMonthlyVolume?.message} />
        </FormControl>
      </HStack>

      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.salesProfileB2BPerc}>
          <FormLabel htmlFor="salesProfileB2BPerc">B2B %</FormLabel>
          <Input
            id="salesProfileB2BPerc"
            type="number"
            placeholder="Enter B2B"
            {...register("salesProfileB2BPerc")}
          />
          <ErrorMessage error={errors.salesProfileB2BPerc?.message} />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.salesProfileB2CPerc}>
          <FormLabel htmlFor="salesProfileB2CPerc">B2C %</FormLabel>
          <Input
            id="salesProfileB2CPerc"
            type="number"
            placeholder="Enter B2C"
            {...register("salesProfileB2CPerc")}
          />
          <ErrorMessage error={errors.salesProfileB2CPerc?.message} />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.salesProfileB2GPerc}>
          <FormLabel htmlFor="salesProfileB2GPerc">B2G %</FormLabel>
          <Input
            id="salesProfileB2GPerc"
            type="number"
            placeholder="Enter B2G"
            {...register("salesProfileB2GPerc")}
          />
          <ErrorMessage error={errors.salesProfileB2GPerc?.message} />
        </FormControl>
      </HStack>
      <HStack spacing={4} mb={4}>
        <FormControl mb={4} isInvalid={!!errors.salesProfileCurrentlyMCVISA}>
          <HStack spacing={4} mb={4}>
            <ReusableCheckbox
              id="salesProfileCurrentlyMCVISA"
              label="Are you accepting today VISA, MASTERCARD, DISCOVER, AMEX for payments?"
              isChecked={isCheckedSalesProfileCurrentlyMCVISA}
              onChange={handleCheckboxChangeSalesProfileCurrentlyMCVISA}
              register={register}
              error={errors.salesProfileCurrentlyMCVISA}
            />
          </HStack>
        </FormControl>
      </HStack>
    </Box>
  );
};

export default SalesProfileForm;
