"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import HeaderComp from "./components/common/Header";
import { Box } from "@chakra-ui/react";
import FooterComp from "./components/common/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <HeaderComp />
          <Box minH={"calc(100vh - 110px)"} bg={"#FFF"} pt={"70px"}>
            {children}
          </Box>
          <FooterComp />
        </Providers>
      </body>
    </html>
  );
}
