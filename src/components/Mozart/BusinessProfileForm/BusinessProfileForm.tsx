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
  Heading,
  Text,
  VStack,
  VisuallyHidden,
} from "@chakra-ui/react";
import { businessProfileSchema } from "./businessProfileSchema";
import { businessProfileData } from "../BusinessProfileForm/businessProfileData";
import ErrorMessage from "../../FormComponents/ErrorMessage";
import AllDataMozartForm from "/src/utils/AllDataMozartForm";

type BusinessProfileFormValues = yup.InferType<typeof businessProfileSchema>;

interface BusinessProfileFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: BusinessProfileFormValues) => void;
  formData?: BusinessProfileFormValues;
  formRef?: React.RefObject<HTMLFormElement>;
  validationSchema?: typeof businessProfileSchema;
  formDataAll?: AllDataMozartForm;
}

const BusinessProfileForm: React.FC<BusinessProfileFormProps> = ({
  title,
  validationSchema = businessProfileSchema, // Usar businessProfileSchema como valor por defecto
}) => {
  const methods = useForm<BusinessProfileFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: businessProfileData,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<BusinessProfileFormValues> = (data) => {
    console.log(data);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
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
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Heading as="h2" size="lg" mb={4}>
          {title}
        </Heading>

        <FormControl mb={4} isInvalid={!!errors.industry}>
          <FormLabel htmlFor="industry">Industry</FormLabel>
          <Input id="industry" {...methods.register("industry")} />
          <ErrorMessage error={errors.industry?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.category}>
          <FormLabel htmlFor="category">Category</FormLabel>
          <Input id="category" {...methods.register("category")} />
          <ErrorMessage error={errors.category?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.privacyPolicyUrl}>
          <FormLabel htmlFor="privacyPolicyUrl">Privacy Policy URL</FormLabel>
          <Input
            id="privacyPolicyUrl"
            {...methods.register("privacyPolicyUrl")}
          />
          <ErrorMessage error={errors.privacyPolicyUrl?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.returnsPolicyUrl}>
          <FormLabel htmlFor="returnsPolicyUrl">Returns Policy URL</FormLabel>
          <Input
            id="returnsPolicyUrl"
            {...methods.register("returnsPolicyUrl")}
          />
          <ErrorMessage error={errors.returnsPolicyUrl?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.tcPolicyUrl}>
          <FormLabel htmlFor="tcPolicyUrl">
            Terms and Conditions Policy URL
          </FormLabel>
          <Input id="tcPolicyUrl" {...methods.register("tcPolicyUrl")} />
          <ErrorMessage error={errors.tcPolicyUrl?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.gstExempt}>
          <FormLabel htmlFor="gstExempt">GST Exempt</FormLabel>
          <Input
            id="gstExempt"
            type="checkbox"
            {...methods.register("gstExempt")}
          />
          <ErrorMessage error={errors.gstExempt?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.gstNumber}>
          <FormLabel htmlFor="gstNumber">GST Number</FormLabel>
          <Input id="gstNumber" {...methods.register("gstNumber")} />
          <ErrorMessage error={errors.gstNumber?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.descriptionOfGoods}>
          <FormLabel htmlFor="descriptionOfGoods">
            Description of Goods
          </FormLabel>
          <Input
            id="descriptionOfGoods"
            {...methods.register("descriptionOfGoods")}
          />
          <ErrorMessage error={errors.descriptionOfGoods?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.saleChannels?.[0]?.channelType}>
          <FormLabel htmlFor="saleChannels[0].channelType">
            Channel Type
          </FormLabel>
          <Input
            id="saleChannels[0].channelType"
            {...methods.register("saleChannels.0.channelType")}
          />
          <ErrorMessage
            error={errors.saleChannels?.[0]?.channelType?.message}
          />
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={!!errors.saleChannels?.[0]?.percentageOfSales}
        >
          <FormLabel htmlFor="saleChannels[0].percentageOfSales">
            Percentage of Sales
          </FormLabel>
          <Input
            id="saleChannels[0].percentageOfSales"
            type="number"
            {...methods.register("saleChannels.0.percentageOfSales")}
          />
          <ErrorMessage
            error={errors.saleChannels?.[0]?.percentageOfSales?.message}
          />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.shipping?.shippingRequired}>
          <FormLabel htmlFor="shipping.shippingRequired">
            Shipping Required
          </FormLabel>
          <Input
            id="shipping.shippingRequired"
            type="checkbox"
            {...methods.register("shipping.shippingRequired")}
          />
          <ErrorMessage error={errors.shipping?.shippingRequired?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.shipping?.inventory}>
          <FormLabel htmlFor="shipping.inventory">Inventory</FormLabel>
          <Input
            id="shipping.inventory"
            type="checkbox"
            {...methods.register("shipping.inventory")}
          />
          <ErrorMessage error={errors.shipping?.inventory?.message} />
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={!!errors.shipping?.deliveryTimePercentage?.oneToSevenDays}
        >
          <FormLabel htmlFor="shipping.deliveryTimePercentage.oneToSevenDays">
            1-7 Days
          </FormLabel>
          <Input
            id="shipping.deliveryTimePercentage.oneToSevenDays"
            type="number"
            {...methods.register(
              "shipping.deliveryTimePercentage.oneToSevenDays"
            )}
          />
          <ErrorMessage
            error={
              errors.shipping?.deliveryTimePercentage?.oneToSevenDays?.message
            }
          />
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={
            !!errors.shipping?.deliveryTimePercentage?.eightToFourteenDays
          }
        >
          <FormLabel htmlFor="shipping.deliveryTimePercentage.eightToFourteenDays">
            8-14 Days
          </FormLabel>
          <Input
            id="shipping.deliveryTimePercentage.eightToFourteenDays"
            type="number"
            {...methods.register(
              "shipping.deliveryTimePercentage.eightToFourteenDays"
            )}
          />
          <ErrorMessage
            error={
              errors.shipping?.deliveryTimePercentage?.eightToFourteenDays
                ?.message
            }
          />
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={
            !!errors.shipping?.deliveryTimePercentage?.fifteenToThirtyDays
          }
        >
          <FormLabel htmlFor="shipping.deliveryTimePercentage.fifteenToThirtyDays">
            15-30 Days
          </FormLabel>
          <Input
            id="shipping.deliveryTimePercentage.fifteenToThirtyDays"
            type="number"
            {...methods.register(
              "shipping.deliveryTimePercentage.fifteenToThirtyDays"
            )}
          />
          <ErrorMessage
            error={
              errors.shipping?.deliveryTimePercentage?.fifteenToThirtyDays
                ?.message
            }
          />
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={
            !!errors.shipping?.deliveryTimePercentage?.moreThanThirtyDays
          }
        >
          <FormLabel htmlFor="shipping.deliveryTimePercentage.moreThanThirtyDays">
            More than 30 Days
          </FormLabel>
          <Input
            id="shipping.deliveryTimePercentage.moreThanThirtyDays"
            type="number"
            {...methods.register(
              "shipping.deliveryTimePercentage.moreThanThirtyDays"
            )}
          />
          <ErrorMessage
            error={
              errors.shipping?.deliveryTimePercentage?.moreThanThirtyDays
                ?.message
            }
          />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.pciCompliance?.isEnabled}>
          <FormLabel htmlFor="pciCompliance.isEnabled">
            PCI Compliance Enabled
          </FormLabel>
          <Input
            id="pciCompliance.isEnabled"
            type="checkbox"
            {...methods.register("pciCompliance.isEnabled")}
          />
          <ErrorMessage error={errors.pciCompliance?.isEnabled?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.pciCompliance?.pciLevel}>
          <FormLabel htmlFor="pciCompliance.pciLevel">PCI Level</FormLabel>
          <Input
            id="pciCompliance.pciLevel"
            {...methods.register("pciCompliance.pciLevel")}
          />
          <ErrorMessage error={errors.pciCompliance?.pciLevel?.message} />
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={!!errors.pciCompliance?.storesSensitiveData}
        >
          <FormLabel htmlFor="pciCompliance.storesSensitiveData">
            Stores Sensitive Data
          </FormLabel>
          <Input
            id="pciCompliance.storesSensitiveData"
            type="checkbox"
            {...methods.register("pciCompliance.storesSensitiveData")}
          />
          <ErrorMessage
            error={errors.pciCompliance?.storesSensitiveData?.message}
          />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.pciCompliance?.dataCompromised}>
          <FormLabel htmlFor="pciCompliance.dataCompromised">
            Data Compromised
          </FormLabel>
          <Input
            id="pciCompliance.dataCompromised"
            type="checkbox"
            {...methods.register("pciCompliance.dataCompromised")}
          />
          <ErrorMessage
            error={errors.pciCompliance?.dataCompromised?.message}
          />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.customField1}>
          <FormLabel htmlFor="customField1">Custom Field 1</FormLabel>
          <Input id="customField1" {...methods.register("customField1")} />
          <ErrorMessage error={errors.customField1?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.customField2}>
          <FormLabel htmlFor="customField2">Custom Field 2</FormLabel>
          <Input id="customField2" {...methods.register("customField2")} />
          <ErrorMessage error={errors.customField2?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.customField3}>
          <FormLabel htmlFor="customField3">Custom Field 3</FormLabel>
          <Input id="customField3" {...methods.register("customField3")} />
          <ErrorMessage error={errors.customField3?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.mccCode}>
          <FormLabel htmlFor="mccCode">MCC Code</FormLabel>
          <Input id="mccCode" {...methods.register("mccCode")} />
          <ErrorMessage error={errors.mccCode?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.seasonalBusiness}>
          <FormLabel htmlFor="seasonalBusiness">Seasonal Business</FormLabel>
          <Input
            id="seasonalBusiness"
            type="checkbox"
            {...methods.register("seasonalBusiness")}
          />
          <ErrorMessage error={errors.seasonalBusiness?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.seasonalBusinessMonths?.[0]}>
          <FormLabel htmlFor="seasonalBusinessMonths[0]">
            Seasonal Business Month
          </FormLabel>
          <Input
            id="seasonalBusinessMonths[0]"
            {...methods.register("seasonalBusinessMonths.0")}
          />
          <ErrorMessage error={errors.seasonalBusinessMonths?.[0]?.message} />
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={!!errors.processingMethods?.deviceTerminal}
        >
          <FormLabel htmlFor="processingMethods.deviceTerminal">
            Device Terminal
          </FormLabel>
          <Input
            id="processingMethods.deviceTerminal"
            type="number"
            {...methods.register("processingMethods.deviceTerminal")}
          />
          <ErrorMessage
            error={errors.processingMethods?.deviceTerminal?.message}
          />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.processingMethods?.moTo}>
          <FormLabel htmlFor="processingMethods.moTo">MO/TO</FormLabel>
          <Input
            id="processingMethods.moTo"
            type="number"
            {...methods.register("processingMethods.moTo")}
          />
          <ErrorMessage error={errors.processingMethods?.moTo?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.processingMethods?.online}>
          <FormLabel htmlFor="processingMethods.online">Online</FormLabel>
          <Input
            id="processingMethods.online"
            type="number"
            {...methods.register("processingMethods.online")}
          />
          <ErrorMessage error={errors.processingMethods?.online?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.merchantBillingType}>
          <FormLabel htmlFor="merchantBillingType">
            Merchant Billing Type
          </FormLabel>
          <Input
            id="merchantBillingType"
            {...methods.register("merchantBillingType")}
          />
          <ErrorMessage error={errors.merchantBillingType?.message} />
        </FormControl>
        <FormControl mb={4} isInvalid={!!errors.merchantPricingModel}>
          <FormLabel htmlFor="merchantPricingModel">
            Merchant Pricing Model
          </FormLabel>
          <Input
            id="merchantPricingModel"
            {...methods.register("merchantPricingModel")}
          />
          <ErrorMessage error={errors.merchantPricingModel?.message} />
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={
            !!errors.businessProfileDocuments?.pciCertificate?.fileName
          }
        >
          <FormLabel htmlFor="businessProfileDocuments.pciCertificate.fileName">
            PCI Certificate File Name
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="pciCertificate"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="pciCertificate"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={
                errors.businessProfileDocuments?.pciCertificate?.fileName
                  ?.message
              }
            />
          </VStack>
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={
            !!errors.businessProfileDocuments?.customDocument1?.fileName
          }
        >
          <FormLabel htmlFor="businessProfileDocuments.customDocument1.fileName">
            Custom Document 1 File Name
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="customDocument1"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="customDocument1"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={
                errors.businessProfileDocuments?.customDocument1?.fileName
                  ?.message
              }
            />
          </VStack>
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={
            !!errors.businessProfileDocuments?.customDocument2?.fileName
          }
        >
          <FormLabel htmlFor="businessProfileDocuments.customDocument2.fileName">
            Custom Document 2 File Name
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="customDocument2"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="customDocument2"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={
                errors.businessProfileDocuments?.customDocument2?.fileName
                  ?.message
              }
            />
          </VStack>
        </FormControl>
        <FormControl
          mb={4}
          isInvalid={
            !!errors.businessProfileDocuments?.customDocument3?.fileName
          }
        >
          <FormLabel htmlFor="businessProfileDocuments.customDocument3.fileName">
            Custom Document 3 File Name
          </FormLabel>
          <VStack spacing={4} align="center">
            <Button
              as="label"
              htmlFor="customDocument3"
              colorScheme="teal"
              cursor="pointer"
            >
              Choose File
            </Button>
            <VisuallyHidden>
              <Input
                id="customDocument3"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </VisuallyHidden>
            <ErrorMessage
              error={
                errors.businessProfileDocuments?.customDocument3?.fileName
                  ?.message
              }
            />
          </VStack>
        </FormControl>
        <Button type="submit" colorScheme="blue" mt={4}>
          Submit
        </Button>
      </Box>
    </FormProvider>
  );
};

export default BusinessProfileForm;
