import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Spinner,
} from "@chakra-ui/react";
import { Link, Outlet, useMatch, useNavigation } from "react-router-dom";

export const Navbar = () => {
  const isSpeakers = useMatch("/speakers");
  const navigation = useNavigation();

  return (
    <>
      <Box py="1em" mx="1em" zIndex={"999"} position={"sticky"} top="0">
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
          <Spacer />
          <Button>
            {isSpeakers ? (
              <Link to={"/"}>Home</Link>
            ) : (
              <Link to={"/speakers"}>Speakers</Link>
            )}
          </Button>
        </Flex>
      </Box>
      <Box>{navigation.state === "loading" ? <Spinner /> : <Outlet />}</Box>
    </>
  );
};
