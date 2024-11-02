import { useState } from "react";
import { AddressResult, AddressResponse } from "/src/interfaces/Address";
import HttpClient from "/src/services/HttpClient";

const useAddressGoogle = () => {
  const [address, setAddress] = useState<AddressResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAddress = async (
    query: string
  ): Promise<AddressResponse | null> => {
    if (query.length < 3) {
      setError("Please enter at least 3 characters");
      return null;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await HttpClient.get<AddressResponse>(
        `/Address/GetAddress?Address=${query}`
      );
      if (response.data.status === "OK") {
        setAddress(response.data.results[0]);
        return response.data;
      } else {
        setError("No results found");
        return null;
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch address");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { address, error, loading, fetchAddress };
};

export default useAddressGoogle;
