import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Link,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterComp = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      py={4}
      px={8}
      bg="gray.800"
      color="white"
    >
      <Text>&copy; 2023 Skill-Lync . All rights reserved.</Text>
      <Spacer />
      <Box>
        <IconButton
          as={Link}
          href="#"
          aria-label="Facebook"
          colorScheme="blue"
          icon={<FaFacebook />}
        />
        <IconButton
          as={Link}
          href="#"
          aria-label="Twitter"
          colorScheme="blue"
          icon={<FaTwitter />}
          ml={2}
        />
        <IconButton
          as={Link}
          href="#"
          aria-label="Instagram"
          colorScheme="blue"
          icon={<FaInstagram />}
          ml={2}
        />
      </Box>
    </Flex>
  );
};

export default FooterComp;
