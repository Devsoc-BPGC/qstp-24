import { Button, Flex, Image, Text } from "@chakra-ui/react";
import img from "../assets/home_image.png";
import Sponsers from "../components/Sponsors";
import About from "../components/About";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Flex bgColor={"#9437AB"} flexDirection={"column"}>
      <Flex justifyContent={"space-between"} alignItems={"center"} flexDir={{ base: "column", md: "row" }}>
        <Flex
          fontFamily={"Inria Sans"}
          color={"white"}
          flexDirection={"column"}
          flex={2}
          marginLeft={{ base: "0%", md: "10%" }}
          justifyContent={"center"}
          textAlign={{ base: "center", md: "left" }}
          alignItems={{ base: "center", md: "start" }}
        >
          <Text fontSize={{ base: "3xl", md: "4xl" }} maxW={"80%"}>
            Quark Presents Quark Summer Technical Projects '24
          </Text>
          <Text maxW={"80%"} marginTop={"1%"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt molestie dui at dictum. Cras congue, diam quis laoreet tincidunt, magna magna ullamcorper turpis,
          </Text>
          <Button maxW={"40%"} marginTop={"3%"} bgColor={"#9A3BE4"} color={"white"} fontSize={"2xl"} fontWeight={100} onClick={() => navigate("/courses")}>
            Register
          </Button>
        </Flex>
        <Image src={img} width={{ base: "80%", md: "40%" }} />
      </Flex>
      <Sponsers />
      <About />
    </Flex>
  );
};

export default Home;
