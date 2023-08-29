"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Flex,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
  });
  const [isNameError, setIsNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState("");

  const [mobileNumberError, setMobileNumberError] = useState("");
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateMobileNumber = (mobilevalue: any) => {
    const isValid = /^[6-9]\d{9}$/.test(mobilevalue);
    return isValid;
  };
  const validateEmail = (emailvalue: any) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailvalue);
    return isValid;
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    {
      formData.name == "" ? setIsNameError(true) : setIsNameError(false);
    }

    const emailvalue = formData.email;
    const mobilevalue = formData.mobileNumber;

    {
      !validateMobileNumber(mobilevalue)
        ? setMobileNumberError("Please enter a valid mobile number.")
        : setMobileNumberError("");
    }

    {
      !validateEmail(emailvalue)
        ? setEmailError("Please enter a valid email address.")
        : setEmailError("");
    }

    console.log(formData);
  };

  return (
    <Flex
      p={8}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VStack align="start" boxShadow={"lg"} p={5} w={"50vw"}>
        <Text as={"h2"} mb={0} fontWeight={700} fontSize={"xl"}>
          Contact Us
        </Text>
        <Text as={"p"} mb={3} color={"gray.400"} fontSize={"sm"}>
          Our core mission at Skill-Lync is to make our students reach their
          career goals with the right guidance.
        </Text>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormControl id="name" mb={2}>
            <FormLabel fontSize={"sm"}>
              Name{" "}
              <Text fontSize={"xs"} color={"red.400"} as={"span"}>
                *
              </Text>
            </FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fontSize={"sm"}
            />
            {isNameError && (
              <Text as={"p"} fontSize={"12px"} color={"red.400"}>
                Name is required.
              </Text>
            )}
          </FormControl>
          <FormControl id="email" mb={2}>
            <FormLabel fontSize={"sm"}>
              Email{" "}
              <Text fontSize={"xs"} color={"red.400"} as={"span"}>
                *
              </Text>
            </FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fontSize={"sm"}
            />

            {emailError && (
              <Text as={"p"} fontSize={"12px"} color={"red.400"}>
                {emailError}
              </Text>
            )}
          </FormControl>
          <FormControl id="mobileNumber" mb={2}>
            <FormLabel fontSize={"sm"}>
              Mobile Number{" "}
              <Text fontSize={"xs"} color={"red.400"} as={"span"}>
                *
              </Text>
            </FormLabel>
            <Input
              type="number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              fontSize={"sm"}
            />
            {mobileNumberError && (
              <Text as={"p"} fontSize={"12px"} color={"red.400"}>
                {mobileNumberError}{" "}
              </Text>
            )}
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={3}>
            Submit
          </Button>
        </form>
      </VStack>
    </Flex>
  );
};

export default ContactUsPage;
