"use client";
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Divider,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function AboutUs() {
  return (
    <Box p={8}>
      <Heading size="xl">About Us</Heading>
      <Stack direction={{ base: "column", md: "row" }} spacing={8} mt={6}>
        <Image
          src="https://picsum.photos/seed/picsum/200"
          alt="About Us"
          flexShrink={0}
          width={{ base: "100%", md: "40%" }}
          h={"250px"}
          borderRadius={"md"}
          objectFit={"cover"}
        />
        <Box>
          <Text>
            Welcome to our company! We're a team of dedicated professionals
            working together to provide you with top-notch services and
            solutions. Our mission is to...
          </Text>
          <Divider my={4} />
          <Text>
            With years of experience in the industry, we've successfully
            completed numerous projects for our clients, always delivering
            quality and excellence.
          </Text>
          <Divider my={4} />
          <Stack direction="row" spacing={2}>
            <Badge colorScheme="blue">Experienced</Badge>
            <Badge colorScheme="green">Innovative</Badge>
            <Badge colorScheme="purple">Customer-Focused</Badge>
          </Stack>
          <Divider my={4} />
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Our Values
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>
                  Our values drive everything we do. We value integrity,
                  collaboration, and excellence in all aspects of our work.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Stack>
    </Box>
  );
}

export default AboutUs;
