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
  Textarea,
  Radio,
  RadioGroup,
  extendTheme,
} from "@chakra-ui/react";

import { AddIcon, AttachmentIcon } from "@chakra-ui/icons";
const ContactUsPage = () => {
  const [isNameError, setIsNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState("");

  const [mobileNumberError, setMobileNumberError] = useState("");
  const [modeselectedValue, setModeSelectedValue] = useState("call_me");
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    remarks: "",
    selectedValue: modeselectedValue,
    docfile: "",
  });

  const handleRadioChange = (value: any) => {
    formData.selectedValue = value;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setFileError("File size should be less than 5MB.");
    } else {
      setSelectedFile(file);
      setFileName(file.name);
      setFileError("");
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      console.log("File uploaded:", selectedFile);
      formData.docfile = selectedFile;
    } else {
      setFileError("Please select file");
    }
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

    setModeSelectedValue(modeselectedValue);
    console.log(formData);
  };

  return (
    <Flex
      p={8}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VStack align="start" boxShadow={"lg"} p={5} w={"500px"}>
        <Text as={"h2"} mb={0} fontWeight={700} fontSize={"xl"}>
          Contact Us
        </Text>
        <Text as={"p"} mb={3} color={"gray.400"} fontSize={"sm"}>
          Our core mission at Skill-Lync is to make our students reach their
          career goals with the right guidance.
        </Text>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <FormControl id="name" minH={"90px"}>
            <FormLabel fontSize={"sm"} mb={1}>
              Name{" "}
              <Text fontSize={"xs"} color={"red.400"} as={"span"}>
                *
              </Text>
            </FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              fontSize={"sm"}
              border={"1px solid #e2e8f0"}
            />
            {isNameError && (
              <Text as={"p"} fontSize={"12px"} color={"red.400"}>
                Name is required.
              </Text>
            )}
          </FormControl>
          <FormControl id="email" minH={"90px"}>
            <FormLabel fontSize={"sm"} mb={1}>
              Email{" "}
              <Text fontSize={"xs"} color={"red.400"} as={"span"}>
                *
              </Text>
            </FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              fontSize={"sm"}
              border={"1px solid #e2e8f0"}
            />

            {emailError && (
              <Text as={"p"} fontSize={"12px"} color={"red.400"}>
                {emailError}
              </Text>
            )}
          </FormControl>

          <FormControl id="mobileNumber" minH={"90px"}>
            <FormLabel fontSize={"sm"} mb={1}>
              Mobile Number{" "}
              <Text fontSize={"xs"} color={"red.400"} as={"span"}>
                *
              </Text>
            </FormLabel>
            <Input
              type="number"
              name="mobileNumber"
              placeholder="Enter your mobile number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              fontSize={"sm"}
              border={"1px solid #e2e8f0"}
            />
            {mobileNumberError && (
              <Text as={"p"} fontSize={"12px"} color={"red.400"}>
                {mobileNumberError}{" "}
              </Text>
            )}
          </FormControl>
          <FormControl id="email" minH={"70px"}>
            <FormLabel fontSize={"sm"} mb={1}>
              Mode of contact{" "}
              <Text fontSize={"xs"} color={"red.400"} as={"span"}>
                *
              </Text>
            </FormLabel>
            <RadioGroup
              defaultValue="call_me"
              name="selectedValue"
              onChange={handleRadioChange}
            >
              <Radio value="call_me" mr={2}>
                <Text fontSize={"sm"}> Call me</Text>
              </Radio>
              <Radio value="email_me" mr={2}>
                <Text fontSize={"sm"}> Email me</Text>
              </Radio>
            </RadioGroup>
          </FormControl>
          <FormControl id="remarks" mb={6}>
            <FormLabel fontSize={"sm"} mb={1}>
              Remarks
            </FormLabel>
            <Textarea
              placeholder="Your remarks, if any"
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              fontSize={"sm"}
              resize={"none"}
              border={"1px solid #e2e8f0"}
            />
          </FormControl>
          <FormControl id="remarks" minH={"90px"}>
            <FormLabel fontSize={"sm"} mb={1}>
              Document{" "}
              <Text as={"span"} fontSize={"10px"} color={"gray.500"}>
                (File size should be less than 5 MB)
              </Text>
            </FormLabel>
            <Flex>
              <Flex
                w={"90%"}
                border={"1px solid #e2e8f0"}
                borderLeftRadius={5}
                alignItems={"center"}
              >
                <label
                  htmlFor="file-upload"
                  style={{
                    fontSize: "14px",
                    cursor: "pointer",
                    padding: "8.75px",
                    color: "white",
                    background: "#3182ce",
                    borderTopLeftRadius: "3px",
                    borderBottomLeftRadius: "3px",
                  }}
                >
                  <AddIcon />
                </label>
                {fileName && (
                  <Text
                    as={"span"}
                    fontSize={"sm"}
                    pl={1}
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                  >
                    {fileName}
                  </Text>
                )}
              </Flex>

              <Input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                borderRightRadius={0}
                p={0}
                border={"1px solid #e2e8f0"}
                style={{ display: "none" }}
              />
              <Button onClick={handleFileUpload} borderLeftRadius={0}>
                <AttachmentIcon />
              </Button>
            </Flex>
            {fileError && (
              <Text as={"p"} fontSize={"12px"} color={"red.400"}>
                {fileError}
              </Text>
            )}
          </FormControl>
          <Box textAlign={"right"}>
            <Button type="submit" colorScheme="blue" mt={3} fontSize={"sm"}>
              Submit
            </Button>
          </Box>
        </form>
      </VStack>
    </Flex>
  );
};

export default ContactUsPage;
