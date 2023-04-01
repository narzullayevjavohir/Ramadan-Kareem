import { Box, Divider, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Divider />
      <Box w={"100%"} bg={"white"}>
        <Flex
          justifyContent={"space-around"}
          flexDirection={{ md: "row", sm: "column" }}
          alignItems={"center"}
          h={"10vh"}
        >
          <Text fontSize={{ md: "20px", sm: "18px" }}>
            &copy; All right reserved {new Date().getFullYear()}
          </Text>
          <Text display={"flex"} fontSize={{ md: "16px", sm: "14px" }}>
            Created by
            <Text color={"purple.400"} ml={"5px"}>
              Narzullayev Javohir
            </Text>
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
