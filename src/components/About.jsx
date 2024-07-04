import { Flex, Image, Text } from "@chakra-ui/react";
import img from "../assets/about_image.png";

const About = () => {
  return (
    <Flex paddingTop={"4rem"} id="about">
      <Flex flexDirection={"column"} fontFamily={"Inria Sans"} color={"white"} alignItems={"center"} flex={2}>
        <Text fontSize={"4xl"}>About QSTP</Text>
        <Text maxW={"80%"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt molestie dui at dictum. Cras congue, diam quis laoreet tincidunt, magna magna ullamcorper turpis, non commodo
          nibh dui vitae sapien. Vestibulum ut est et lacus viverra vulputate. Nam sit amet hendrerit augue, sit amet fringilla arcu. Nunc at massa accumsan, luctus risus posuere, pulvinar velit. Ut
          ipsum lacus, elementum eu hendrerit id, facilisis id tortor. Praesent egestas id mauris at egestas. Nullam posuere fermentum rutrum. Aliquam euismod vitae orci eget ullamcorper. Fusce nec
          turpis porta, blandit mauris id, aliquam diam. Aenean ex mi, cursus ultrices erat in, interdum consequat justo. Pellentesque vulputate mollis libero a consectetur.
        </Text>
      </Flex>
      <Image src={img} width={"40%"} />
    </Flex>
  );
};

export default About;
