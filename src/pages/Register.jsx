import { Button, Card, CardBody, Flex, Heading, Image, Input, Stack } from "@chakra-ui/react";
import left from "../assets/register_left.png";
import right from "../assets/register_right.png";
// import { useParams } from "react-router-dom";

const Register = () => {
  //   const { course } = useParams();
  return (
    <Flex bgColor={"#9437AB"} flexDirection={"column"} color={"white"} alignItems={"center"} justifyContent={"center"} height={{ base: "100vh", md: "90vh" }}>
      <Card w={{ base: "50%", md: "30%" }} bgColor={"#719AB0"} pos={"absolute"}>
        <CardBody textAlign={"center"} fontFamily={"Inria Sans"}>
          <Stack spacing={3}>
            <Heading fontFamily={"Inria Sans"} color={"white"}>
              Register
            </Heading>
            <Input placeholder="First Name" bgColor={"white"} marginTop={3} />
            <Input placeholder="Last Name" bgColor={"white"} />
            <Input placeholder="College Name" bgColor={"white"} />
            <Input placeholder="Phone Number" bgColor={"white"} type="number" />
            <Input placeholder="Email" bgColor={"white"} />
            <Button fontFamily={"Inria Sans"} bgColor={"#9A3BE4"} color={"white"} mt={3}>
              Register
            </Button>
          </Stack>
        </CardBody>
      </Card>
      <Flex height={"100%"} width={"100%"} justifyContent={"space-between"} alignItems={{ base: "center", md: "end" }}>
        <Image src={left} width={"40%"} />
        <Image src={right} width={{ base: "30%", md: "unset" }} height={{ base: "unset", md: "100%" }} />
      </Flex>
    </Flex>
  );
};

export default Register;
