import { Flex } from "@chakra-ui/react";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  return (
    <Flex bgColor={"#9437AB"} flexDirection={"column"} color={"white"}>
      <Flex flexFlow={"wrap"} rowGap={"4vw"} marginTop={"4vw"}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Flex>
    </Flex>
  );
};

export default Courses;
