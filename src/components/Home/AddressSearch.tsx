import {
  Box,
  Input,
  Button,
  Text,
  VStack,
  Alert,
  AlertIcon,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useAddressGoogle from "../../hooks/address/useAddressGoogle";
import { useState, useEffect } from "react";

const AddressSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { address, error, loading, fetchAddress } = useAddressGoogle();

  useEffect(() => {
    if (query.length > 3) {
      fetchAddress(query).then((response) => {
        if (response && response.results) {
          const cities = response.results
            .map(
              (result) =>
                result.address_components.find((component) =>
                  component.types.includes("locality")
                )?.long_name
            )
            .filter(Boolean);
          setSuggestions(
            cities.filter((city): city is string => city !== undefined)
          );
        }
      });
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = () => {
    fetchAddress(query);
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <VStack spacing={4}>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter address"
          size="md"
        />
        {loading && <Spinner />}
        {suggestions.length > 0 && (
          <List spacing={2} borderWidth="1px" borderRadius="md" w="100%" p={2}>
            {suggestions.map((suggestion, index) => (
              <ListItem
                key={index}
                onClick={() => {
                  setQuery(suggestion);
                  setSuggestions([]);
                }}
                cursor="pointer"
                _hover={{ backgroundColor: "gray.100" }}
              >
                {suggestion}
              </ListItem>
            ))}
          </List>
        )}
        <Button onClick={handleSearch} isLoading={loading} colorScheme="blue">
          Search
        </Button>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        {address && (
          <Box p={4} borderWidth="1px" borderRadius="md" w="100%">
            <Text fontWeight="bold">Address: {address.formatted_address}</Text>
            <Text>Place ID: {address.place_id}</Text>
            <Text>
              Location: {address.geometry.location.lat},{" "}
              {address.geometry.location.lng}
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default AddressSearch;
