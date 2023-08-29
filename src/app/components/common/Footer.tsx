import { Container, Text } from "@chakra-ui/react";

const FooterComp = () => {
  return (
    <Container
      textAlign={"center"}
      bg={"gray.400"}
      maxW={"100vw"}
      w={"100vw"}
      p={1}
      position={"fixed"}
      bottom={0}
    >
      <Text>All Rights Reserved</Text>
    </Container>
  );
};

export default FooterComp;
