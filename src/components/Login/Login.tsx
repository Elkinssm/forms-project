import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "admin@mail.com" && password === "admin") {
      navigate("/forms");
    } else {
      onOpen();
    }
  };

  return (
    <Box
      p={8}
      maxW="400px"
      mx="auto"
      mt={10}
      bg="white"
      borderRadius="lg"
      boxShadow="2xl"
      border="1px solid"
      borderColor="gray.200"
    >
      <Heading mb={6} textAlign="center" color="teal.600" fontSize="2xl">
        Login
      </Heading>
      <form onSubmit={handleLogin}>
        <VStack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel color="gray.700">Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              focusBorderColor="teal.500"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel color="gray.700">Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              focusBorderColor="teal.500"
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full" size="lg">
            Login
          </Button>
        </VStack>
      </form>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="red.500">Login Failed</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="red.500" fontSize="md">
              Incorrect email or password. Please try again.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Login;
