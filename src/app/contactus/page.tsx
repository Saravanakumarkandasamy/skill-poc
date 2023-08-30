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
  Checkbox,
  HStack,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AddIcon } from "@chakra-ui/icons";
const companyAccess = ["Courses", "Projects", "Portal"];
const ContactUsPage = () => {
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [modeselectedValue, setModeSelectedValue] = useState("call_me");
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [startDateAvailable, setstartDateAvailable] = useState(new Date());
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    remarks: "",
    selectedValue: modeselectedValue,
    docfile: "",
    avaliabledate: startDateAvailable,
  });

  const [isNameError, setIsNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState("");
  const [fileError, setFileError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState<any>([]);

  const handleCheckboxChangeMulti = (item: string) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(
        checkedItems.filter((checkedItem: string) => checkedItem !== item)
      );
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
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
    handleFileUpload();
    formData.avaliabledate = startDateAvailable;
    console.log(formData);
  };

  return (
    <Flex
      p={8}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      bg={"#ffe6d5"}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `.react-datepicker-wrapper {width: 100%;} .date-picker-form{outline: none; width:100%}`,
        }}
      />
      <VStack
        align="start"
        boxShadow={"lg"}
        p={5}
        w={"500px"}
        mb={10}
        bg={"white"}
        borderRadius={5}
      >
        <Text
          as={"h2"}
          mb={0}
          fontWeight={700}
          fontSize={"xl"}
          color={"#dd6b20"}
        >
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
          <FormControl id="mobileNumber" minH={"90px"}>
            <FormLabel fontSize={"sm"} mb={1}>
              Available Date{" "}
              {/* <Text fontSize={"xs"} color={"red.400"} as={"span"}>
                *
              </Text> */}
            </FormLabel>
            <Box
              border={"1px solid #e2e8f0"}
              borderRadius={5}
              p={2}
              fontSize={"sm"}
            >
              <DatePicker
                selected={startDateAvailable}
                onChange={(date: any) => {
                  setstartDateAvailable(date);
                }}
                showTimeSelect
                dateFormat="Pp"
                isClearable
                placeholderText="Select date and time"
                className="date-picker-form"
              />
            </Box>
          </FormControl>
          <FormControl id="mobileNumber" minH={"90px"}>
            <FormLabel fontSize={"sm"} mb={1}>
              Start Date and End Date
            </FormLabel>
            <Box
              border={"1px solid #e2e8f0"}
              borderRadius={5}
              p={2}
              fontSize={"sm"}
            >
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update: any) => {
                  setDateRange(update);
                }}
                isClearable={true}
                placeholderText="Select start and end date"
                className="date-picker-form"
              />
            </Box>
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
              Resume Upload{" "}
              <Text fontSize={"xs"} color={"red.400"} as={"span"}>
                *
              </Text>
              <Text as={"span"} fontSize={"10px"} color={"gray.500"}>
                (File size should be less than 5 MB)
              </Text>
            </FormLabel>
            <Flex>
              <Flex
                w={"100%"}
                border={"1px solid #e2e8f0"}
                borderRadius={5}
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
              {/* <Button onClick={handleFileUpload} borderLeftRadius={0}>
                <AttachmentIcon />
              </Button> */}
            </Flex>
            {fileError && (
              <Text as={"p"} fontSize={"12px"} color={"red.400"}>
                {fileError}
              </Text>
            )}
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"sm"} mb={1}>
              Access required for
            </FormLabel>
            <HStack spacing={2} mb={4}>
              {companyAccess.map((item) => (
                <Checkbox
                  key={item}
                  isChecked={checkedItems.includes(item)}
                  onChange={() => handleCheckboxChangeMulti(item)}
                >
                  <Text fontSize={"sm"}>{item}</Text>
                </Checkbox>
              ))}
              {/* <p>Checked Items: {checkedItems.join(", ")}</p> */}
            </HStack>
          </FormControl>
          <FormControl id="remarks" mb={6}>
            <Checkbox isChecked={isChecked} onChange={handleCheckboxChange}>
              <Text fontSize={"sm"}>I Agree to the terms and conditions</Text>
            </Checkbox>
            {/* <p>Is Checked: {isChecked.toString()}</p> */}
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
