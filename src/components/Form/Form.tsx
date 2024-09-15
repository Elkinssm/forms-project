import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Box,
  Text,
} from "@chakra-ui/react";

// Esquema de validación
const schema = z.object({
  email: z
    .string()
    .email({ message: "Dirección de correo electrónico no válida" }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

type LoginDataForm = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: LoginDataForm) => {
    console.log(data);
    alert(`Correo: ${data.email}, Contraseña: ${data.password}`);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      justifyItems="center"
      alignItems="center"
      height="100vh"
    >
      <Text fontSize="5xl">Prueba Forms</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.email} mb="4">
          <FormLabel htmlFor="email">Correo electrónico</FormLabel>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.password} mb="4">
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          )}
        </FormControl>

        <Button colorScheme="blue" type="submit" width="full">
          Iniciar sesión
        </Button>
      </form>
    </Box>
  );
};

export default Form;
