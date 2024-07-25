import { Divider, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithubSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { CgMoreR } from "react-icons/cg";
const TopNav = () => {
  return (
    <Flex gap={2} align={"center"}>
      <Text color={"#F0EBD8"}>Created By - Uma Sahni</Text>
      <Link target="blank" href="https://github.com/UmaSahni">
        <FaGithubSquare fontSize={"1.6rem"} color="white" />
      </Link>

      <Link target="blank" href="https://www.linkedin.com/in/umasahni/">
        <FaLinkedin fontSize={"1.6rem"} color="white" />
      </Link>

      <Link target="blank" href="https://www.youtube.com/@SumansAcademy">
        <FaYoutube fontSize={"1.9rem"} color="white" />
      </Link>

      <Link target="blank" href="https://umasahni.github.io/">
        <CgMoreR fontSize={"1.7rem"} color="white" />
      </Link>
    </Flex>
  );
};

export default TopNav;
