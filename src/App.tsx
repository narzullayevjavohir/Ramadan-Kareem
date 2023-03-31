import { Box, Text, List, ListItem } from "@chakra-ui/react";

function App() {
  return (
    <Box
      w={"100%"}
      h={"10vh"}
      bg={"green.400"}
      display={"flex"}
      justifyContent={{ sm: "space-between", md: "space-around" }}
      alignItems={"center"}
      px={{ sm: "10", md: "0" }}
    >
      <Text
        color={"white"}
        fontSize={"2xl"}
        fontWeight={"semibold"}
        letterSpacing={"normal"}
      >
        Brand
      </Text>
      <List display={"flex"} fontSize={"1rem"}>
        <ListItem
          mx={"1rem"}
          cursor={"pointer"}
          color={"whiteAlpha.700"}
          _hover={{ color: "white" }}
        >
          Home
        </ListItem>
        <ListItem
          mx={"1rem"}
          cursor={"pointer"}
          color={"whiteAlpha.700"}
          _hover={{ color: "white" }}
        >
          About
        </ListItem>
        <ListItem
          mx={"1rem"}
          cursor={"pointer"}
          color={"whiteAlpha.700"}
          _hover={{ color: "white" }}
        >
          Services
        </ListItem>
        <ListItem
          mx={"1rem"}
          cursor={"pointer"}
          color={"whiteAlpha.700"}
          _hover={{ color: "white" }}
        >
          Contact
        </ListItem>
      </List>
    </Box>
  );
}

export default App;
