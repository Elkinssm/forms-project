import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ChevronRightIcon, InfoIcon } from "@chakra-ui/icons";

const schema = z.object({
  corporate: z.string().min(6, {
    message: "The company name must be at least 6 characters long",
  }),
  merchant: z.string().min(6, {
    message: "The merchant name must be at least 6 characters long",
  }),
});

type BusinessDataForm = z.infer<typeof schema>;

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessDataForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: BusinessDataForm) => {
    // console.log(data);
    alert(`Corporate: ${data.corporate}, Merchant: ${data.merchant}`);
  };

  return (
    <Box
      width="100%"
      minHeight="100vh"
      p={4}
      display="flex"
      flexDirection="column"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <Grid templateColumns="minmax(200px, 281px) 1fr" flex={1}>
          <GridItem
            bg="brand.secondary"
            color="white"
            p={4}
            display="flex"
            flexDirection="column"
          >
            <VStack spacing={4} align="center" flex={1}>
              <Heading size="md" textAlign="center">
                Sidebar
              </Heading>
              <Text mt={4} textAlign="center">
                Sidebar content
              </Text>
            </VStack>
          </GridItem>

          <GridItem display="flex" flexDirection="column" flex={1}>
            <Box mb={4} backgroundColor="neutral.300" px="224px" py="32px">
              <VStack spacing={4} align="center">
                <Heading as="h1" size="lg" mb={2} textAlign="center">
                  Business information
                </Heading>
                <Text textAlign="center">
                  Let’s start with your company’s basic information. [We could
                  add here why the company requests this information]
                </Text>
              </VStack>
            </Box>

            <Box mb={4} flex={1} display="flex" flexDirection="column" p={100}>
              <VStack spacing={4} align="center" flex={1}>
                <Heading as="h2" size="md" mb={2} textAlign="left">
                  Corporate information
                </Heading>
                <FormControl mb={4} isInvalid={!!errors.corporate}>
                  <FormLabel htmlFor="corporate" textAlign="left">
                    Corporate / Legal name
                  </FormLabel>
                  <Input
                    id="corporate"
                    type="text"
                    placeholder="Enter your company name"
                    {...register("corporate")}
                    size="sm"
                  />
                  {errors.corporate && (
                    <Text color="semantic.error.DEFAULT" textAlign="left">
                      <InfoIcon color="semantic.error.DEFAULT" mr={2} />
                      {errors.corporate.message}
                    </Text>
                  )}
                </FormControl>
                <FormControl mb={4} isInvalid={!!errors.merchant}>
                  <FormLabel htmlFor="merchant" textAlign="left">
                    Merchant Name
                  </FormLabel>
                  <Input
                    id="merchant"
                    type="text"
                    size="sm"
                    placeholder="Enter your merchant name"
                    {...register("merchant")}
                  />
                  {errors.merchant && (
                    <Text color="semantic.error.DEFAULT" textAlign="left">
                      <InfoIcon color="semantic.error.DEFAULT" mr={2} />
                      {errors.merchant.message}
                    </Text>
                  )}
                </FormControl>
                <Box width="100%" pt={20}>
                  <Button
                    type="submit"
                    colorScheme="blue"
                    width="100%"
                    rightIcon={<ChevronRightIcon />}
                    aria-label="Next"
                  >
                    Next
                  </Button>
                </Box>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </form>
    </Box>
  );
};

export default Home;
