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

type activeProps = {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.MutableRefObject<undefined>;
};

const Dashboard = ({ isOpen, onClose, btnRef }: activeProps) => {
  const listItems = ["Home", "About", "Contact"];
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
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
                <ListItem
                  key={id}
                  p={"20px"}
                  fontSize={"1.2rem"}
                  cursor={"pointer"}
                  onClick={onClose}
                  w={"100%"}
                  my={"10px"}
                  borderRadius={"10px"}
                  _hover={{ bg: "blackAlpha.100" }}
                >
                  {item}
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Dashboard;
