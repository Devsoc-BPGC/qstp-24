import { Flex, Image } from "@chakra-ui/react";
import logo from "../assets/quark_logo.png";

const Navbar = () => {
  return (
    <Flex justifyContent={{base: "center", md: "space-between"}} alignItems={"center"} height={"100%"} bgColor={"#551A64"}>
      <Image src={logo} />
      <Flex width={"30%"} justifyContent={"space-evenly"} color={"white"} fontFamily={"Inria Sans"} display={{base: "none", md: "inherit"}}>
        <a href="/#about">About</a>
        <a href="/#sponsors">Sponsors</a>
        <a href="/courses">Register</a>
      </Flex>
    </Flex>
  );
};

export default Navbar;
