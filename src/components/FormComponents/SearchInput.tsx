import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  List,
  ListItem,
} from "@chakra-ui/react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import { SearchItem } from "./Interfaces/SearchItem";

interface SearchInputProps<T extends FieldValues> {
  label: string;
  id: string;
  placeholder?: string;
  data: SearchItem[];
  onItemSelect: (itemName: string) => void;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
}

const SearchInput = <T extends FieldValues>({
  label,
  id,
  placeholder,
  data,
  onItemSelect,
  errors,
  register,
}: SearchInputProps<T>) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length >= 3) {
      const filteredSuggestions = data
        .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 10)
        .map((item) => item.name);
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (itemName: string) => {
    setInputValue(itemName);
    setShowSuggestions(false);
    onItemSelect(itemName);
  };

  return (
    <FormControl mb={4} isInvalid={!!errors[id]}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        id={id}
        type="text"
        placeholder={placeholder || `Enter ${label}`}
        value={inputValue}
        {...register(id as Path<T>, { onChange: handleInputChange })}
      />
      {showSuggestions && (
        <List
          mt={2}
          border="1px solid #ddd"
          borderRadius="md"
          maxHeight="150px"
          overflowY="auto"
        >
          {suggestions.map((suggestion, index) => (
            <ListItem
              key={index}
              p={2}
              cursor="pointer"
              _hover={{ backgroundColor: "gray.100" }}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </ListItem>
          ))}
        </List>
      )}
      <ErrorMessage error={errors[id]?.message as string} />
    </FormControl>
  );
};

export default SearchInput;
