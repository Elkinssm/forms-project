import { Box, Button, VisuallyHidden, VStack } from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";

import ErrorMessage from "../../FormComponents/ErrorMessage";

import AddressInput from "../../FormComponents/AddressInput";
import { bankingSchema } from "./bankingShema";
import { z } from "zod";
import { formDataBanking } from "./bankingData";

type BankingDataForm = z.infer<typeof bankingSchema>;

interface BankingFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BankingDataForm) => void;
  formData?: BankingDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof bankingSchema;
}

const BusinessForm: React.FC<BankingFormProps> = ({
  onNext,
  onDataChange,
  formData = formDataBanking,
  validationSchema = bankingSchema,
  formRef,
}) => {
  const methods = useForm<BankingDataForm>({
    resolver: zodResolver(validationSchema),
    defaultValues: formData,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<BankingDataForm> = (data) => {
    if (onDataChange) onDataChange(data);
    if (onNext) onNext();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        console.log(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormProvider {...methods}>
      <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <FormControl
          mb={4}
          isInvalid={!!errors.bankingBankAccountAccountNumber}
        >
          <FormLabel htmlFor="bankingBankAccountAccountNumber">
            Account Number
          </FormLabel>
          <Input
            id="bankingBankAccountAccountNumber"
            type="text"
            placeholder="Enter the account number"
            {...methods.register("bankingBankAccountAccountNumber")}
          />
          <ErrorMessage
            error={errors.bankingBankAccountAccountNumber?.message}
          />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.bankingBankAccountAccountType}>
          <FormLabel htmlFor="bankingBankAccountAccountType">
            Account Type
          </FormLabel>
          <Input
            id="bankingBankAccountAccountType"
            type="text"
            placeholder="Enter the account type"
            {...methods.register("bankingBankAccountAccountType")}
          />
          <ErrorMessage error={errors.bankingBankAccountAccountType?.message} />
        </FormControl>

        <FormControl
          mb={4}
          isInvalid={!!errors.bankingBankAccountAccountHolderName}
        >
          <FormLabel htmlFor="bankingBankAccountAccountHolderName">
            Account Holder Name
          </FormLabel>
          <Input
            id="bankingBankAccountAccountHolderName"
            type="text"
            placeholder="Enter the account holder name"
            {...methods.register("bankingBankAccountAccountHolderName")}
          />
          <ErrorMessage
            error={errors.bankingBankAccountAccountHolderName?.message}
          />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.bankingBankAccountEntityType}>
          <FormLabel htmlFor="bankingBankAccountEntityType">
            Entity Type
          </FormLabel>
          <Input
            id="bankingBankAccountEntityType"
            type="text"
            placeholder="Enter the entity type"
            {...methods.register("bankingBankAccountEntityType")}
          />
          <ErrorMessage error={errors.bankingBankAccountEntityType?.message} />
        </FormControl>

        <FormControl
          mb={4}
          isInvalid={!!errors.bankingBankAccountRoutingNumber}
        >
          <FormLabel htmlFor="bankingBankAccountRoutingNumber">
            Routing Number
          </FormLabel>
          <Input
            id="bankingBankAccountRoutingNumber"
            type="text"
            placeholder="Enter the routing number"
            {...methods.register("bankingBankAccountRoutingNumber")}
          />
          <ErrorMessage
            error={errors.bankingBankAccountRoutingNumber?.message}
          />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.bankingBankAccountBankName}>
          <FormLabel htmlFor="bankingBankAccountBankName">Bank Name</FormLabel>
          <Input
            id="bankingBankAccountBankName"
            type="text"
            placeholder="Enter the bank name"
            {...methods.register("bankingBankAccountBankName")}
          />
          <ErrorMessage error={errors.bankingBankAccountBankName?.message} />
        </FormControl>

        <FormControl mb={4} isInvalid={!!errors.bankingPlaidAccessToken}>
          <FormLabel htmlFor="bankingPlaidAccessToken">
            Plaid Access Token
          </FormLabel>
          <Input
            id="bankingPlaidAccessToken"
            type="text"
            placeholder="Enter the Plaid access token"
            {...methods.register("bankingPlaidAccessToken")}
          />
          <ErrorMessage error={errors.bankingPlaidAccessToken?.message} />
        </FormControl>

        <AddressInput
          name="bankingBillingAddress"
          label="Business Address"
          placeholder="Enter your business address"
          error={errors.bankingBillingAddress?.street}
        />

        {/* upload documents */}

        <FormControl isInvalid={!!errors.bankingDocumentsVoidCheck} mt={4}>
          <FormLabel htmlFor="bankingDocumentsVoidCheck">
            Void check Image
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="bankingDocumentsVoidCheck"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="bankingDocumentsVoidCheck"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage error={errors.bankingDocumentsVoidCheck?.message} />
          </VStack>
        </FormControl>
        <FormControl
          isInvalid={!!errors.bankingDocumentsCustomDocument1}
          mt={4}
        >
          <FormLabel htmlFor="bankingDocumentsCustomDocument1">
            Custom Image document 1
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="bankingDocumentsCustomDocument1"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="bankingDocumentsCustomDocument1"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={errors.bankingDocumentsCustomDocument1?.message}
            />
          </VStack>
        </FormControl>
        <FormControl
          isInvalid={!!errors.bankingDocumentsCustomDocument2}
          mt={4}
        >
          <FormLabel htmlFor="bankingDocumentsCustomDocument2">
            Custom Image document 2
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="bankingDocumentsCustomDocument2"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="bankingDocumentsCustomDocument2"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={errors.bankingDocumentsCustomDocument2?.message}
            />
          </VStack>
        </FormControl>
        <FormControl
          isInvalid={!!errors.bankingDocumentsCustomDocument3}
          mt={4}
        >
          <FormLabel htmlFor="bankingDocumentsCustomDocument3">
            Custom Image document 3
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="bankingDocumentsCustomDocument3"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="bankingDocumentsCustomDocument3"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={errors.bankingDocumentsCustomDocument3?.message}
            />
          </VStack>
        </FormControl>
      </Box>
    </FormProvider>
  );
};

export default BusinessForm;
