export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface Geometry {
  bounds: {
    northeast: { lat: number; lng: number };
    southwest: { lat: number; lng: number };
  };
  location: { lat: number; lng: number };
  location_type: string;
  viewport: {
    northeast: { lat: number; lng: number };
    southwest: { lat: number; lng: number };
  };
}

export interface AddressResult {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  types: string[];
}

export interface AddressResponse {
  results: AddressResult[];
  status: string;
}

export interface Address {
  formatted_address: string;
  address_components: AddressComponent[];
}
