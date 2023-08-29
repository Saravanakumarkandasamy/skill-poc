import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  components: {
    Button: {
      sizes: {
        xl: {
          fontSize: "2xl",
        },
      },
    },
  },
  colors: {
    primary: "#21cdaa",
    secondary: "#0A1931",
    tertiary: "#146CC5",
    secondaryTextColor: "#6c757d",
    tertiaryTextColor: "#535353",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  sizes: {
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1140px",
    },
  },
  shadows: {
    small: "0px 4px 4px 0px #00000040",
    large: "7px 7px 14px 0px #146CC526, -2px -2px 10px 0px #146CC50D",
    header: "5px 5px 10px 0px #146CC51A, -2px -2px 10px 0px #146CC50D",
    dark: "7.5px 7.5px 14px 0px #00000040",
  },
  fontSizes: {
    "2xs": "10px",
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "22px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "45px",
  },
  textStyles: {
    homeHeading: {
      fontSize: ["3xl", "4xl", "5xl"],
      lineHeight: "106%",
      fontWeight: "700",
    },
    pageHeading: {
      fontSize: ["3xl", "4xl"],
      lineHeight: "140%",
      fontWeight: "900",
    },
    h2Heading: {
      fontSize: ["26px", "30px", "34px"],
      lineHeight: "120%",
      fontWeight: "semibold",
    },
    h3Heading: {
      fontSize: ["24px", "28px", "32px"],
      lineHeight: "120%",
      fontWeight: "semibold",
    },
    h4Heading: {
      fontSize: ["22px", "26px", "30px"],
      lineHeight: "120%",
      fontWeight: "semibold",
    },
    sectionHeading: {
      fontSize: ["xl", "2xl", "4xl"],
      lineHeight: "120%",
      fontWeight: "semibold",
    },
    subHeading: {
      fontSize: ["lg", "xl", "2xl"],
      lineHeight: "120%",
      fontWeight: "semibold",
    },
    subTitle: {
      fontSize: ["xs", "sm", "md"],
      lineHeight: "120%",
      fontWeight: "normal",
    },
    paragraph: {
      fontSize: ["xs", "sm", "md"],
      fontWeight: "light",
    },
    boxTitle: {
      fontSize: ["xs", null, "sm"],
      fontWeight: "medium",
    },
    boxParagraph: {
      fontSize: ["2xs", null, "xs"],
      fontWeight: "normal",
    },
  },
});
