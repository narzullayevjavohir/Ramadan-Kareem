import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { database } from "../data/database";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [search, setSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  return (
    <>
      <Box w={"100%"} h={"100%"}>
        <Flex
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text my={"20px"} fontSize={"24px"}>
            🎉 Ramadan Greetings!
          </Text>
          <Flex alignItems={"center"}>
            <Input
              type="text"
              width={"md"}
              placeholder="Search Greetings..."
              onChange={(e) => setSearch(e.target.value)}
              ref={inputRef}
            />
            <Button ml={"10px"} bg={"purple.400"} _hover={{ bg: "purple.500" }}>
              <SearchIcon fontSize={"2xl"} cursor={"pointer"} color={"white"} />
            </Button>
          </Flex>
        </Flex>
        <Box
          w={"100%"}
          h={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexWrap={"wrap"}
          my={"30px"}
        >
          {database
            .filter((item) => {
              if (search === "") {
                return item;
              } else if (
                item.description.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              } else if (
                item.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item, id) => (
              <>
                <Card w={"300px"} h={"400px"} m={"20px"} key={id}>
                  <CardHeader>
                    <Image
                      src={item.imgUrl}
                      w={"100%"}
                      h={"160px"}
                      objectFit={"cover"}
                      borderRadius={"4px"}
                    />
                  </CardHeader>
                  <CardBody>
                    <Text fontSize={"18px"} mb={"3px"}>
                      {item.title}
                    </Text>
                    <Text fontSize={"14px"}>{item.description}</Text>
                    <Button mt={"10px"}>Read more</Button>
                  </CardBody>
                </Card>
              </>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default About;
