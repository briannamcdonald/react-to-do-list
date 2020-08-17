import { theme as defaultTheme } from "@chakra-ui/core";

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#00A3C4",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
    leafGreen: {
      50: "#eeefed",
      100: "#dddfdb",
      200: "#babfb6",
      300: "#989e92",
      400: "#757e6d",
      500: "#535e49",
      600: "#424b3a",
      700: "#32382c",
      800: "#21261d",
      900: "#11130f",
    },
  },
};

export default theme;
