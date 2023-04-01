import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import { Flex, Progress, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<undefined>();

  return (
    <>
      <Header onOpen={onOpen} btnRef={btnRef} />
      <Flex>
        <Dashboard isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Flex>
      <Footer />
    </>
  );
}

export default App;
