import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Checkbox,
} from "@chakra-ui/react";
import { businessFinancialsSchema } from "../BusinessFinancialsForm/businessFinancialsSchema";
import { businessFinancialsData } from "../BusinessFinancialsForm/businessFinancialsData";
import ErrorMessage from "../../FormComponents/ErrorMessage";

type BusinessFinancialsFormValues = yup.InferType<
  typeof businessFinancialsSchema
>;

interface BusinessFinancialsFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessFinancialsFormValues) => void;
  formData?: BusinessFinancialsFormValues;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof businessFinancialsSchema;
}

const BusinessFinancialsForm: React.FC<BusinessFinancialsFormProps> = ({
  onNext,
  onDataChange,
  formData = businessFinancialsData,
  formRef,
  validationSchema = businessFinancialsSchema,
}) => {
  const methods = useForm<BusinessFinancialsFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: formData,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<BusinessFinancialsFormValues> = (data) => {
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <VStack spacing={4} align="flex-start">
          <FormControl isInvalid={!!errors.volumeProjection?.visa}>
            <FormLabel htmlFor="volumeProjection.visa">
              Visa Volume Projection
            </FormLabel>
            <Input
              id="volumeProjection.visa"
              {...methods.register("volumeProjection.visa")}
            />
            <ErrorMessage error={errors.volumeProjection?.visa?.message} />
          </FormControl>
          <FormControl isInvalid={!!errors.volumeProjection?.mastercard}>
            <FormLabel htmlFor="volumeProjection.mastercard">
              Mastercard Volume Projection
            </FormLabel>
            <Input
              id="volumeProjection.mastercard"
              {...methods.register("volumeProjection.mastercard")}
            />
            <ErrorMessage
              error={errors.volumeProjection?.mastercard?.message}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.volumeProjection?.americanExpress}>
            <FormLabel htmlFor="volumeProjection.americanExpress">
              American Express Volume Projection
            </FormLabel>
            <Input
              id="volumeProjection.americanExpress"
              {...methods.register("volumeProjection.americanExpress")}
            />
            <ErrorMessage
              error={errors.volumeProjection?.americanExpress?.message}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.volumeProjection?.localDebitCard}>
            <FormLabel htmlFor="volumeProjection.localDebitCard">
              Local Debit Card Volume Projection
            </FormLabel>
            <Input
              id="volumeProjection.localDebitCard"
              {...methods.register("volumeProjection.localDebitCard")}
            />
            <ErrorMessage
              error={errors.volumeProjection?.localDebitCard?.message}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.volumeProjection?.discover}>
            <FormLabel htmlFor="volumeProjection.discover">
              Discover Volume Projection
            </FormLabel>
            <Input
              id="volumeProjection.discover"
              {...methods.register("volumeProjection.discover")}
            />
            <ErrorMessage error={errors.volumeProjection?.discover?.message} />
          </FormControl>
          <FormControl isInvalid={!!errors.avgTicketPriceProjection}>
            <FormLabel htmlFor="avgTicketPriceProjection">
              Average Ticket Price Projection
            </FormLabel>
            <Input
              id="avgTicketPriceProjection"
              {...methods.register("avgTicketPriceProjection")}
            />
            <ErrorMessage error={errors.avgTicketPriceProjection?.message} />
          </FormControl>
          <FormControl isInvalid={!!errors.customField1}>
            <FormLabel htmlFor="customField1">Custom Field 1</FormLabel>
            <Input id="customField1" {...methods.register("customField1")} />
            <ErrorMessage error={errors.customField1?.message} />
          </FormControl>
          <FormControl isInvalid={!!errors.customField2}>
            <FormLabel htmlFor="customField2">Custom Field 2</FormLabel>
            <Input id="customField2" {...methods.register("customField2")} />
            <ErrorMessage error={errors.customField2?.message} />
          </FormControl>
          <FormControl isInvalid={!!errors.customField3}>
            <FormLabel htmlFor="customField3">Custom Field 3</FormLabel>
            <Input id="customField3" {...methods.register("customField3")} />
            <ErrorMessage error={errors.customField3?.message} />
          </FormControl>
          <FormControl isInvalid={!!errors.annualVolumeProjection?.visa}>
            <FormLabel htmlFor="annualVolumeProjection.visa">
              Visa Annual Volume Projection
            </FormLabel>
            <Input
              id="annualVolumeProjection.visa"
              {...methods.register("annualVolumeProjection.visa")}
            />
            <ErrorMessage
              error={errors.annualVolumeProjection?.visa?.message}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.annualVolumeProjection?.mastercard}>
            <FormLabel htmlFor="annualVolumeProjection.mastercard">
              Mastercard Annual Volume Projection
            </FormLabel>
            <Input
              id="annualVolumeProjection.mastercard"
              {...methods.register("annualVolumeProjection.mastercard")}
            />
            <ErrorMessage
              error={errors.annualVolumeProjection?.mastercard?.message}
            />
          </FormControl>
          <FormControl
            isInvalid={!!errors.annualVolumeProjection?.americanExpress}
          >
            <FormLabel htmlFor="annualVolumeProjection.americanExpress">
              American Express Annual Volume Projection
            </FormLabel>
            <Input
              id="annualVolumeProjection.americanExpress"
              {...methods.register("annualVolumeProjection.americanExpress")}
            />
            <ErrorMessage
              error={errors.annualVolumeProjection?.americanExpress?.message}
            />
          </FormControl>
          <FormControl
            isInvalid={!!errors.annualVolumeProjection?.localDebitCard}
          >
            <FormLabel htmlFor="annualVolumeProjection.localDebitCard">
              Local Debit Card Annual Volume Projection
            </FormLabel>
            <Input
              id="annualVolumeProjection.localDebitCard"
              {...methods.register("annualVolumeProjection.localDebitCard")}
            />
            <ErrorMessage
              error={errors.annualVolumeProjection?.localDebitCard?.message}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.annualVolumeProjection?.discover}>
            <FormLabel htmlFor="annualVolumeProjection.discover">
              Discover Annual Volume Projection
            </FormLabel>
            <Input
              id="annualVolumeProjection.discover"
              {...methods.register("annualVolumeProjection.discover")}
            />
            <ErrorMessage
              error={errors.annualVolumeProjection?.discover?.message}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.monthlyVolumeProjection?.visa}>
            <FormLabel htmlFor="monthlyVolumeProjection.visa">
              Visa Monthly Volume Projection
            </FormLabel>
            <Input
              id="monthlyVolumeProjection.visa"
              {...methods.register("monthlyVolumeProjection.visa")}
            />
            <ErrorMessage
              error={errors.monthlyVolumeProjection?.visa?.message}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.monthlyVolumeProjection?.mastercard}>
            <FormLabel htmlFor="monthlyVolumeProjection.mastercard">
              Mastercard Monthly Volume Projection
            </FormLabel>
            <Input
              id="monthlyVolumeProjection.mastercard"
              {...methods.register("monthlyVolumeProjection.mastercard")}
            />
            <ErrorMessage
              error={errors.monthlyVolumeProjection?.mastercard?.message}
            />
          </FormControl>
          <FormControl
            isInvalid={!!errors.monthlyVolumeProjection?.americanExpress}
          >
            <FormLabel htmlFor="monthlyVolumeProjection.americanExpress">
              American Express Monthly Volume Projection
            </FormLabel>
            <Input
              id="monthlyVolumeProjection.americanExpress"
              {...methods.register("monthlyVolumeProjection.americanExpress")}
            />
            <ErrorMessage
              error={errors.monthlyVolumeProjection?.americanExpress?.message}
            />
          </FormControl>
          <FormControl
            isInvalid={!!errors.monthlyVolumeProjection?.localDebitCard}
          >
            <FormLabel htmlFor="monthlyVolumeProjection.localDebitCard">
              Local Debit Card Monthly Volume Projection
            </FormLabel>
            <Input
              id="monthlyVolumeProjection.localDebitCard"
              {...methods.register("monthlyVolumeProjection.localDebitCard")}
            />
            <ErrorMessage
              error={errors.monthlyVolumeProjection?.localDebitCard?.message}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.monthlyVolumeProjection?.discover}>
            <FormLabel htmlFor="monthlyVolumeProjection.discover">
              Discover Monthly Volume Projection
            </FormLabel>
            <Input
              id="monthlyVolumeProjection.discover"
              {...methods.register("monthlyVolumeProjection.discover")}
            />
            <ErrorMessage
              error={errors.monthlyVolumeProjection?.discover?.message}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.highestTicketPriceProjection}>
            <FormLabel htmlFor="highestTicketPriceProjection">
              Highest Ticket Price Projection
            </FormLabel>
            <Input
              id="highestTicketPriceProjection"
              {...methods.register("highestTicketPriceProjection")}
            />
            <ErrorMessage
              error={errors.highestTicketPriceProjection?.message}
            />
          </FormControl>
          <FormControl
            isInvalid={!!errors.isAnnualAmexVolumeExceedMillionDollars}
          >
            <FormLabel htmlFor="isAnnualAmexVolumeExceedMillionDollars">
              Is Annual Amex Volume Exceed Million Dollars
            </FormLabel>
            <Checkbox
              id="isAnnualAmexVolumeExceedMillionDollars"
              {...methods.register("isAnnualAmexVolumeExceedMillionDollars")}
            />
            <ErrorMessage
              error={errors.isAnnualAmexVolumeExceedMillionDollars?.message}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </VStack>
      </Box>
    </FormProvider>
  );
};

export default BusinessFinancialsForm;
