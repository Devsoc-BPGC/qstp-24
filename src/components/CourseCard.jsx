import { Button, Card, CardBody, CardFooter, Image, Stack, Text } from "@chakra-ui/react";

const Course = () => {
  return (
    <Card width={{ base: "90%", sm: "46%", md: "21%" }} marginLeft={{ base: "5%", sm: "2%" }} marginRight={"2%"}>
      <CardBody>
        <Image src="/logo192.png" width={"100%"} />
        <Stack mt={3} spacing={3}>
          <Text fontSize={"2xl"}>Course Name</Text>
          <Text fontSize={"xl"}>Club Name</Text>
        </Stack>
      </CardBody>
      <CardFooter justifyContent={"center"}>
        <Button>Register</Button>
      </CardFooter>
    </Card>
  );
};

export default Course;
