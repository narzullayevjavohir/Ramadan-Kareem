import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  Flex,
  Text,
  CloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

type activeProps = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.MutableRefObject<undefined>;
};

const Dashboard = ({ isOpen, onClose, btnRef }: activeProps) => {
  const listItems = [
    {
      list: "Home",
      path: "/",
    },
    {
      list: "About",
      path: "/about",
    },
    {
      list: "Contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        initialFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader mt={"12vh"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text fontSize={"2xl"}>Category</Text>
              <CloseButton
                onClick={onClose}
                cursor={"pointer"}
                size={"lg"}
                p={"10px"}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <List mt={"20px"}>
              {listItems.map((item, id) => (
                <Link to={item.path} key={id}>
                  <ListItem
                    p={"20px"}
                    fontSize={"1.2rem"}
                    cursor={"pointer"}
                    onClick={onClose}
                    w={"100%"}
                    my={"10px"}
                    borderRadius={"10px"}
                    _hover={{ bg: "blackAlpha.100" }}
                  >
                    {item.list}
                  </ListItem>
                </Link>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Dashboard;
