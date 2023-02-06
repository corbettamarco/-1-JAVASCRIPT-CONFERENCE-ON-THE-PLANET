import { Box, Flex, Heading, HStack, Image } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <>
      <Box py="1em"  mx="1em" zIndex={"999"} position={"sticky"} top="0">
        <Flex h={16}>
          <HStack my="1em" textAlign={"center"}>
            <Image
              src="https://assets.jsworldconference.com/logo_jsworld_ad7f539826.svg"
              h={14}
            ></Image>
            <Heading
              lineHeight={"1"}
              textAlign={"left"}
              textColor="white"
              fontWeight={"extrabold"}
              fontSize="1.7em"
              pl="0.2em"
              w="10em"
              letterSpacing={"tighter"}
            >
              JSWORLD<br></br> CONFERENCE
            </Heading>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};
