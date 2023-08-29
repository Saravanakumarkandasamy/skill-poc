import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  Divider,
} from "@chakra-ui/react";

function BlogPost({
  title,
  content,
  imageUrl,
}: {
  title: any;
  content: any;
  imageUrl: any;
}) {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
      <Image
        src={imageUrl}
        alt={title}
        mb={4}
        w={"100%"}
        height={"200px"}
        objectFit={"contain"}
      />
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text>{content}</Text>
      <Divider my={4} />
      <Flex justify="space-between" alignItems={"center"}>
        <Button colorScheme="blue">Read More</Button>
        <Text>Published on: August 28, 2023</Text>
      </Flex>
    </Box>
  );
}

export default BlogPost;
