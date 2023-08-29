"use client";
import { Container, Box, Heading, Text, Flex, Button } from "@chakra-ui/react";

const allinone = [
  {
    title: "Enroll",
    description:
      "Enroll in a PG program, it takes 8 to 12 months to complete it.",
  },
  {
    title: "Learn",
    description:
      "Learn from pre-recorded videos and get support when you are stuck.",
  },
  {
    title: "Finish",
    description: "Build your Skill-Lync profile by completing the projects.",
  },
  {
    title: "Get Hired",
    description:
      "Complete the course, pass the assessments & get the interviews!",
  },
];
export default function Home() {
  return (
    <Container w={"full"} maxW={"full"} p={0}>
      <Flex bg={"#ffe6d5"} flexWrap={"wrap"}>
        <Box py={10} width={["100%", "40%"]}>
          <Box p={8} my={5}>
            <Heading size="2xl" color={"#003780"} lineHeight={"50px"}>
              <Text as={"span"} color={"orange.500"}>
                Studying{" "}
              </Text>
              Online is now much easier
            </Heading>

            <Text mt={4}>
              We are an e-learning platform dedicated to engineering education
              and upskilling. Skill-Lync has given the Indian job market the
              finest engineers since 2015.
            </Text>
            <Flex mt={10}>
              <Button colorScheme="orange" mr={4} rounded={"full"}>
                Join now
              </Button>
              <Button variant="outline">Contact Us</Button>
            </Flex>
          </Box>
        </Box>
        <Box
          backgroundImage={
            "https://d2p9du7zvaejzj.cloudfront.net/images/smiley_man.png"
          }
          height={"450px"}
          width={"50%"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"center"}
          mt={2}
          backgroundSize={"contain"}
          display={["none", "block"]}
        />
      </Flex>

      <Flex p={8} flexDirection={"column"} alignItems={"center"} w={"100%"}>
        <Text as={"h2"} fontSize={"xl"} fontWeight={600}>
          All-In-One{" "}
          <Text as={"span"} color={"orange.500"}>
            Solution
          </Text>
        </Text>
        <Text as={"p"} mb={5}>
          Get Job-Ready with Our Engineering Courses
        </Text>
        <Flex
          my={5}
          gap={5}
          justifyContent={"space-between"}
          w={"100%"}
          flexWrap={"wrap"}
        >
          {allinone.map((allin: any, index: any) => (
            <Box
              boxShadow={"md"}
              p={5}
              borderRadius={5}
              key={index}
              flexGrow={1}
              maxW={["100%", "48%", "48%", "23%"]}
            >
              <Text
                as={"p"}
                fontSize={"lg"}
                fontWeight={600}
                mb={3}
                color={"orange.500"}
              >
                {allin.title}
              </Text>
              <Text as={"p"} fontSize={"md"}>
                {allin.description}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}
