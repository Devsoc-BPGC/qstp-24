import { Flex, Image, Text } from "@chakra-ui/react";
import img from "../assets/spons_image.png";

const Sponsers = () => {
  return (
    <Flex paddingTop={"4rem"} id="sponsors">
      <Image src={img} width={"40%"} />
      <Flex flexDirection={"column"} fontFamily={"Inria Sans"} color={"white"} alignItems={"center"} flex={2}>
        <Text fontSize={"4xl"}>Our Sponsors</Text>
      </Flex>
    </Flex>
  );
};

export default Sponsers;
