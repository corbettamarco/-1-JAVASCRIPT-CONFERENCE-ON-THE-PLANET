import {
    Box,
    Divider,
    Flex,
    HStack, Image, Text
} from "@chakra-ui/react";

export const Navbar = () => {

  return (<>
    <Box bgColor="black" px="1em"  >
      <Flex h={16} alignItems={"center"} >
        <HStack my="1em" spacing="1em" alignItems={"center"}>
          <Image src="https://assets.jsworldconference.com/logo_jsworld_ad7f539826.svg" h={14}></Image>
          <Text display={{ base: "none", sm: "flex" }} textColor="conf.red.500" fontWeight={"bold"} >JSWORLD CONFERENCE 2023</Text>
          <Box position="absolute" right="1em" >
          </Box>
        </HStack>
      </Flex>
    </Box>
    <Divider /></>
  );
};
