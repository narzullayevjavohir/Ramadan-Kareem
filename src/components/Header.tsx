import { EmailIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, List, ListItem, Text } from "@chakra-ui/react";

type handleClickProps = {
  btnRef: React.MutableRefObject<undefined>;
  onOpen: () => void;
};

const Header = ({ btnRef, onOpen }: handleClickProps) => {
  return (
    <Box position={"sticky"} top={"0"} overflow={"hidden"} zIndex={"99999"}>
      <Box
        w={"100%"}
        h={"10vh"}
        display={"flex"}
        bg={"white"}
        justifyContent={{ md: "space-around", sm: "space-between" }}
        alignItems={"center"}
        px={{ md: "0", sm: "15px" }}
      >
        <Text fontSize={"1.5rem"} fontWeight={"semibold"} cursor={"pointer"}>
          Ramadan
        </Text>
        <List display={"flex"} alignItems={"center"}>
          <ListItem mx={"25px"} display={{ lg: "block", sm: "none" }}>
            <Button
              color={"white"}
              bg={"purple.400"}
              _hover={{
                bg: "purple.500",
              }}
              _active={{ transform: "scale(0.95)", transtion: "0.3s ease" }}
            >
              SignUp
            </Button>
          </ListItem>
          <ListItem display={{ lg: "block", sm: "none" }}>
            <EmailIcon fontSize={"3xl"} cursor={"pointer"} />
          </ListItem>
          <ListItem ml={"30px"} display={{ lg: "block", sm: "none" }}>
            <Button>
              <Text color={"red.500"} fontSize={"xl"} mr={"5px"}>
                ❤
              </Text>
              Sponsor
            </Button>
          </ListItem>
          <ListItem mx={"20px"}>
            <HamburgerIcon
              fontSize={"3xl"}
              cursor={"pointer"}
              ref={btnRef}
              colorscheme="teal"
              onClick={onOpen}
              ml={"30px"}
            />
          </ListItem>
        </List>
      </Box>
      <Divider />
    </Box>
  );
};

export default Header;
