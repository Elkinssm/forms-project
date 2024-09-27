import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    ownerFirstName: z.string().min(2, "The Owner First Name must be at least 2 chars"),
    ownerMiddleName: z.string().min(2, "The Owner Middle Name must be at least 2 chars"),
    ownerLastName: z.string().min(2, "The Owner Middle Name must be at least 2 chars"),
    ownerStateID: z.string().min(2, "The stateID must be at least 2 chars"),
    ownerSSN: z.string().min(9, "The SSN must be at least 9 chars"),
    ownerPercentOwnership: z.preprocess((val) => Number(val), z.number().int().min(1, "Percent Ownership must be at least 1")),
    ownerTitle: z.string().min(9, "The Title must be at least 9 chars"),
    ownerBirthday: z.coerce.date().refine((data) => data < new Date(), { message: 'Birthday must be in the past' }),
    ownerEmail: z.string().email("A valid email is required"),
    ownerAddress: z.string().min(10, "The address must be at least 10 characters long"),
    ownerCity: z.string().min(3, "The city must be at least 3 characters long"),
    ownerZip: z.string().min(5, "The zip must be at least 5 characters long"),
    ownerPhone: z.string().min(10, "The phone must be at least 10 characters long"),

});
type OwnerInformationDataForm = z.infer<typeof schema>;

interface OwnerInformationFormProps {
  title: string;
  description?: string;
  onNext?: () => void;
  onBack?: () => void;
  onDataChange?: (data: OwnerInformationDataForm) => void;
  formData?: OwnerInformationDataForm;
  formRef?: React.RefObject<HTMLFormElement>;
}

const OwnerInformationForm: React.FC<OwnerInformationFormProps> = ({
    title,
    onNext,
    onDataChange,
    formData = { ownerFirstName: "", ownerMiddleName: "", ownerLastName: "", ownerStateID: "", ownerSSN: "", ownerPercentOwnership: 1, ownerTitle: "", ownerBirthday: new Date(), ownerEmail: "", ownerAddress: "", ownerCity: "", ownerZip: "", ownerPhone: "" },
    formRef,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<OwnerInformationDataForm>({
        resolver: zodResolver(schema),
        defaultValues: formData,
    });
    const onSubmit: SubmitHandler<OwnerInformationDataForm> = (data) => {
        console.log(data);
        if (onDataChange) onDataChange(data);
        if (onNext) onNext();
    };
    return (
        <Box as="form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
            <Text fontWeight="bold" fontSize="lg" mb={4} color="text.highEmphasis">
                {title}
            </Text>
            <FormControl mb={4} isInvalid={!!errors.ownerFirstName}>
                <FormLabel htmlFor="ownerFirstName">First Name</FormLabel>
                <Input
                    id="ownerFirstName"
                    type="text"
                    placeholder="Enter the first name"
                    {...register("ownerFirstName")}
                />
                {errors.ownerFirstName && (
                    <Text color="semantic.error.DEFAULT">{errors.ownerFirstName.message}</Text>
                )}
            </FormControl>

            <FormControl mb={4} isInvalid={!!errors.ownerMiddleName}>
                <FormLabel htmlFor="ownerMiddleName">Middle Name</FormLabel>
                <Input
                    id="ownerMiddleName"
                    type="text"
                    placeholder="Enter the middle name"
                    {...register("ownerMiddleName")}
                />
                {errors.ownerMiddleName && (
                    <Text color="semantic.error.DEFAULT">{errors.ownerMiddleName.message}</Text>
                )}
            </FormControl>

            <FormControl mb={4} isInvalid={!!errors.ownerLastName}>
                <FormLabel htmlFor="ownerLastName">Last Name</FormLabel>
                <Input
                    id="ownerLastName"
                    type="text"
                    placeholder="Enter the last name"
                    {...register("ownerLastName")}
                />
                {errors.ownerLastName && (
                    <Text color="semantic.error.DEFAULT">{errors.ownerLastName.message}</Text>
                )}
            </FormControl>

            <FormControl mb={4} isInvalid={!!errors.ownerStateID}>
                <FormLabel htmlFor="ownerStateID">State ID</FormLabel>
                <Input
                    id="ownerStateID"
                    type="text"
                    placeholder="Enter the State Id"
                    {...register("ownerStateID")}
                />
                {errors.ownerStateID && (
                    <Text color="semantic.error.DEFAULT">{errors.ownerStateID.message}</Text>
                )}
            </FormControl>

            <FormControl mb={4} isInvalid={!!errors.ownerSSN}>
                <FormLabel htmlFor="ownerSSN">SSN</FormLabel>
                <Input
                    id="ownerSSN"
                    type="text"
                    placeholder="Enter SSN"
                    {...register("ownerSSN")}
                />
                {errors.ownerSSN && (
                    <Text color="semantic.error.DEFAULT">{errors.ownerSSN.message}</Text>
                )}
            </FormControl>

            <FormControl mb={4} isInvalid={!!errors.ownerPercentOwnership}>
                <FormLabel htmlFor="ownerPercentOwnership">Ownership %</FormLabel>
                <Input
                    id="ownerPercentOwnership"
                    type="number"
                    placeholder="Enter ownership %"
                    {...register("ownerPercentOwnership")}
                />
                {errors.ownerPercentOwnership && (
                    <Text color="semantic.error.DEFAULT">{errors.ownerPercentOwnership.message}</Text>
                )}
            </FormControl>

            <FormControl mb={4} isInvalid={!!errors.ownerTitle}>
                <FormLabel htmlFor="ownerTitle">Title</FormLabel>
                <Input
                    id="ownerTitle"
                    type="number"
                    placeholder="Enter title"
                    {...register("ownerTitle")}
                />
                {errors.ownerTitle && (
                    <Text color="semantic.error.DEFAULT">{errors.ownerTitle.message}</Text>
                )}
            </FormControl>

            <FormControl mb={4} isInvalid={!!errors.ownerEmail}>
                <FormLabel htmlFor="ownerEmail">Email</FormLabel>
                <Input
                    id="ownerEmail"
                    type="text"
                    placeholder="Enter email"
                    {...register("ownerEmail")}
                />
                {errors.ownerEmail && (
                    <Text color="semantic.error.DEFAULT">{errors.ownerEmail.message}</Text>
                )}
            </FormControl>

            <FormControl mb={4} isInvalid={!!errors.ownerBirthday}>
                <FormLabel htmlFor="ownerBirthday">Birthday</FormLabel>
                <Input
                    id="ownerBirthday"
                    type="date"
                    placeholder="Enter birthday"
                    {...register("ownerBirthday")}
                />
                {errors.ownerBirthday && (
                    <Text color="semantic.error.DEFAULT">{errors.ownerBirthday.message}</Text>
                )}
            </FormControl>

            <FormControl mb={4} isInvalid={!!errors.ownerAddress}>
                <FormLabel htmlFor="ownerAddress">Address</FormLabel>
                <Input
                    id="ownerAddress"
                    type="text"
                    placeholder="Enter owner address"
                    {...register("ownerAddress")}
                />
                {errors.ownerAddress && (
                    <Text color="semantic.error.DEFAULT">
                        {errors.ownerAddress.message}
                    </Text>
                )}
            </FormControl>

            <FormControl mb={4} isInvalid={!!errors.ownerCity}>
                <FormLabel htmlFor="ownerCity">City</FormLabel>
                <Input
                    id="ownerCity"
                    type="text"
                    placeholder="Enter owner city"
                    {...register("ownerCity")}
                />
                {errors.ownerCity && (
                    <Text color="semantic.error.DEFAULT">{errors.ownerCity.message}</Text>
                )}
            </FormControl>

            <FormControl mb={4} isInvalid={!!errors.ownerZip}>
                <FormLabel htmlFor="ownerZip">Zip</FormLabel>
                <Input
                    id="ownerZip"
                    type="text"
                    placeholder="Enter owner zip code"
                    {...register("ownerZip")}
                />
                {errors.ownerZip && (
                    <Text color="semantic.error.DEFAULT">{errors.ownerZip.message}</Text>
                )}
            </FormControl>

            <FormControl mb={4} isInvalid={!!errors.ownerPhone}>
                <FormLabel htmlFor="ownerPhone">Phone</FormLabel>
                <Input
                    id="ownerPhone"
                    type="text"
                    placeholder="Enter owner phone"
                    {...register("ownerPhone")}
                />
                {errors.ownerPhone && (
                    <Text color="semantic.error.DEFAULT">
                        {errors.ownerPhone.message}
                    </Text>
                )}
            </FormControl>

        </Box>

    );
};

export default OwnerInformationForm;