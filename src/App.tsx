import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Header onOpen={onOpen} btnRef={btnRef} />
      <Flex>
        <Dashboard isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
        <Home />
      </Flex>
    </>
  );
}

export default App;
