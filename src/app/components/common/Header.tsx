"use client";
import { Container, Flex, Link, HStack, Box, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
const menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/aboutus",
  },
  // {
  //   name: "Services",
  //   link: "/services",
  // },
  {
    name: "Contact Us",
    link: "/contactus",
  },
];

const HeaderComp = () => {
  const router = useRouter();
  return (
    <Box
      boxShadow="lg"
      p="4"
      bg="white"
      minH="55px"
      position="fixed"
      top={0}
      zIndex={10}
      w="full"
    >
      <HStack align="center" justify="space-between" px={5}>
        <Link href="/skill-web-poc" fontSize={"lg"} fontWeight={800}>
          <Text as={"span"}>Skill</Text>-<Text as={"span"}>Lync</Text>
        </Link>
        <Flex>
          {menus.map((menu: any, index: any) => (
            <React.Fragment key={index}>
              <Link
                // href={`/skill-web-poc${menu.link}`}
                href={menu.link}
                px={2}
                fontSize={"sm"}
                fontWeight={600}
                ml={4}
                _hover={{
                  bg: "#dfedff",
                  borderRadius: "4px",
                  color: "#115dd3",
                }}
              >
                {menu.name}
              </Link>
            </React.Fragment>
          ))}
        </Flex>
      </HStack>
    </Box>
  );
};

export default HeaderComp;
