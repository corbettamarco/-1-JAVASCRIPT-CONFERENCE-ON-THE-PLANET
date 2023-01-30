import {
  Center,
  Divider,
  Flex,
  Heading,
  HStack, Image
} from "@chakra-ui/react";

export const Navbar = () => {

  return (<>
    <Center py="1em" zIndex={"999"}  bgColor="black" opacity={"80%"} my="1em" position={"sticky"} top="0" >
      <Flex h={16}  >
        <HStack my="1em"  textAlign={"center"} >
          <Image src="https://assets.jsworldconference.com/logo_jsworld_ad7f539826.svg" h={14}></Image>
          <Heading textColor="white" fontWeight={"bold"} >JSWORLD<br></br> CONFERENCE 2023</Heading>
        </HStack>
      </Flex>
    </Center>
    <Divider /></>
  );
};
