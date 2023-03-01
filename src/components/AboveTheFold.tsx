import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { EventType } from "../API/models/EventType";
import { ParamsEnum } from "../API/models/ParamsEnum";
import { useAll } from "../hooks/useAll";

export const AboveTheFold = () => {
  const { requestedQuery} = useAll(
    "event",
    ParamsEnum.aboveTheFold
  );
  const eventQuery: EventType= requestedQuery.data
  const errorQuery = requestedQuery.error instanceof Error
  
  return (
    <Center>
      <Box mx="2em"  mb="1em" textAlign={"justify"}>
        <Heading
          textAlign={"center"}
          textColor={"white"}
          fontWeight={"extrabold"}
          fontSize={{ base: "2xl", sm: "3xl", md: "6xl" }}
          letterSpacing="tighter"
        >
          JOIN WORLD'S LARGEST
        </Heading>
        <Heading
          textAlign={"center"}
          mb="0.5em"
          textColor={"conf.red.500"}
          fontWeight={"extrabold"}
          fontSize={{ base: "2xl", sm: "3xl", md: "6xl" }}
          lineHeight={"70%"}
          letterSpacing="tighter"
        >
          JAVASCRIPT COMMUNITY
        </Heading>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          
          <p>{errorQuery}</p>
          <Text textColor={"white"} textAlign="center">
           {eventQuery && eventQuery.desc}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};
