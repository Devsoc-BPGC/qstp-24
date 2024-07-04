import { Button, Flex, Image, Text } from "@chakra-ui/react";
import img from "../assets/home_image.png";
import Sponsers from "../components/Sponsors";
import About from "../components/About";

const Home = () => {
  return (
    <Flex bgColor={"#9437AB"} flexDirection={"column"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Flex fontFamily={"Inria Sans"} color={"white"} flexDirection={"column"} flex={2} marginLeft={"10%"} justifyContent={"center"}>
          <Text fontSize={"4xl"} maxW={"80%"}>
            Quark Presents Quark Summer Technical Projects '24
          </Text>
          <Text maxW={"80%"} marginTop={"1%"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt molestie dui at dictum. Cras congue, diam quis laoreet tincidunt, magna magna ullamcorper turpis,
          </Text>
          <Button maxW={"40%"} marginTop={"3%"} bgColor={"#9A3BE4"} color={"white"} fontSize={"2xl"} fontWeight={100}>
            Register
          </Button>
        </Flex>
        <Image src={img} width={"40%"} />
      </Flex>
      <Sponsers />
      <About />
    </Flex>
  );
};

export default Home;
