import {
  Box,
  Button,
  FormControl,
  Text,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";

const Contact = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => setShow(!show);
  const [value, setValue] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [clickVal, setClickVal] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Box
      w={"100%"}
      h={"79vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        w={"400px"}
        h={"400px"}
        boxShadow={"xl"}
        borderRadius={"10px"}
        p={"20px"}
      >
        <FormControl as={"form"} onSubmit={handleSubmit}>
          <FormLabel mt={"15px"}>Email address</FormLabel>
          <Input type="email" required />

          <FormLabel mt={"15px"}>Password</FormLabel>
          <InputGroup>
            <Input type={show ? "text" : "password"} required />

            <InputRightElement>
              <Button
                h="1.75rem"
                fontSize={"12px"}
                mr={"15px"}
                onClick={handleClick}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormLabel mt={"15px"}>Message</FormLabel>
          <Textarea resize={"none"}></Textarea>
          <Button type={"submit"} mt={"15px"} colorScheme="teal">
            Submit
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Contact;
