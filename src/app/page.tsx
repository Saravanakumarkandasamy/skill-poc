"use client";
import {
  Container,
  Box,
  Heading,
  Text,
  Flex,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import BlogPost from "./components/BlogPost";

const blogPosts = [
  {
    title: "Getting Started with Chakra UI",
    content: "Chakra UI is a fantastic UI library...",
    imageUrl: "https://www.gstatic.com/webp/gallery3/1.sm.png",
  },
  {
    title: "10 Tips for Effective Time Management",
    content: "Time management is crucial for productivity...",
    imageUrl: "https://www.gstatic.com/webp/gallery3/1.sm.png",
  },
  {
    title: "10 Tips for Effective Time Management",
    content: "Time management is crucial for productivity...",
    imageUrl: "https://www.gstatic.com/webp/gallery3/1.sm.png",
  },
  {
    title: "10 Tips for Effective Time Management",
    content: "Time management is crucial for productivity...",
    imageUrl: "https://www.gstatic.com/webp/gallery3/1.sm.png",
  },
  {
    title: "10 Tips for Effective Time Management",
    content: "Time management is crucial for productivity...",
    imageUrl: "https://www.gstatic.com/webp/gallery3/1.sm.png",
  },
  {
    title: "10 Tips for Effective Time Management",
    content: "Time management is crucial for productivity...",
    imageUrl: "https://www.gstatic.com/webp/gallery3/1.sm.png",
  },
];
export default function Home() {
  return (
    <Container w={"full"} maxW={"full"} p={0}>
      <Flex bg={"#ffe6d5"}>
        <Box py={10} width={"40%"}>
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
          <Box boxShadow={"md"} w={"325px"} p={5} borderRadius={5}>
            <Text
              as={"p"}
              fontSize={"lg"}
              fontWeight={600}
              mb={3}
              color={"orange.500"}
            >
              Enroll
            </Text>
            <Text as={"p"} fontSize={"md"}>
              Enroll in a PG program, it takes 8 to 12 months to complete it.
            </Text>
          </Box>
          <Box boxShadow={"md"} w={"325px"} p={5} borderRadius={5}>
            <Text
              as={"p"}
              fontSize={"lg"}
              fontWeight={600}
              mb={3}
              color={"orange.500"}
            >
              Learn
            </Text>
            <Text as={"p"} fontSize={"md"}>
              Learn from pre-recorded videos and get support when you are stuck.
            </Text>
          </Box>
          <Box boxShadow={"md"} w={"325px"} p={5} borderRadius={5}>
            <Text
              as={"p"}
              fontSize={"lg"}
              fontWeight={600}
              mb={3}
              color={"orange.500"}
            >
              Finish
            </Text>
            <Text as={"p"} fontSize={"md"}>
              Build your Skill-Lync profile by completing the projects.
            </Text>
          </Box>
          <Box boxShadow={"md"} w={"325px"} p={5} borderRadius={5}>
            <Text
              as={"p"}
              fontSize={"lg"}
              fontWeight={600}
              mb={3}
              color={"orange.500"}
            >
              Get Hired
            </Text>
            <Text as={"p"} fontSize={"md"}>
              Complete the course, pass the assessments & get the interviews!
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
