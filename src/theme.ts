import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#298ecb",
      secondary: "#263669",
    },
    semantic: {
      success: {
        light: "#a5d6a7",
        DEFAULT: "#4caf50",
      },
      error: {
        light: "#ef9a9a",
        DEFAULT: "#e53935",
      },
      warning: {
        light: "#ffe082",
        DEFAULT: "#ffb300",
      },
      info: {
        light: "#71c0e4",
        DEFAULT: "#298ecb",
      },
    },
    neutral: {
      100: "#ffffff",
      200: "#f2f4f5",
      300: "#e4e8ea",
      400: "#d0d5d8",
      500: "#b9c1c5",
      600: "#9aa2a7",
      700: "#7b858c",
      800: "#5d666d",
      900: "#2e3338",
    },
    text: {
      highEmphasis: "#2B3338",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    input: {
      border: "rgba(0, 0, 0, 0.23)",
      borderHover: "#000000",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          border: "transparent",
          borderRadius: "8px",
          borderColor: "red",
          _hover: {
            borderColor: "input.borderHover",
            border: "1px solid",
          },
          _focus: {
            borderColor: "brand.primary",
            boxShadow: "0 0 0 1px #298ECB",
          },
          _disabled: {
            backgroundColor: "neutral.200",
            cursor: "not-allowed",
          },
          _invalid: {
            borderColor: "semantic.error.DEFAULT",
            boxShadow: "0 0 0 1px #E53935",
            _focus: {
              borderColor: "semantic.error.DEFAULT",
              boxShadow: "0 0 0 1px #E53935",
            },
          },
        },
      },
      sizes: {
        sm: {
          field: {
            fontSize: "sm",
            px: 3,
            py: 2,
          },
        },
        md: {
          field: {
            fontSize: "md",
            px: 4,
            py: 3,
          },
        },
      },
      defaultProps: {
        size: "md",
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: "md",
        fontWeight: "bold",
        color: "text.highEmphasis",
        _focus: {
          color: "brand.primary",
        },
        _hover: {
          color: "brand.secondary",
        },
        _disabled: {
          color: "text.disabled",
        },
        _invalid: {
          color: "semantic.error.DEFAULT",
        },
      },
    },
    Radio: {
      baseStyle: {
        control: {
          _checked: {
            bg: "transparent",
            borderColor: "transparent",
            outline: "2px solid",
            outlineOffset: "1px",
            outlineColor: "brand.primary",
            _before: {
              content: '""',
              display: "block",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              bg: "brand.primary",
            },
          },
          _focus: {
            borderColor: "transparent",
            // boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)",
          },
          _hover: {
            borderColor: "transparent",
          },
          _disabled: {
            bg: "#000000",
            borderColor: "neutral.900",
          },
        },
        label: {
          fontWeight: "bold",
          color: "text.highEmphasis",
          _disabled: {
            color: "text.disabled",
          },
        },
      },
      sizes: {
        md: {
          control: { w: 4, h: 4 },
          label: { fontSize: "md" },
        },
        lg: {
          control: { w: 5, h: 5 },
          label: { fontSize: "lg" },
        },
      },
      defaultProps: {
        size: "md",
        colorScheme: "brand",
      },
    },
  },
  
});

export default theme;
