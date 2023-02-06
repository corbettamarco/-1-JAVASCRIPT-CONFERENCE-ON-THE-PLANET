import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import { EventType } from "../API/models/EventType";
import { useAll } from "../hooks/useAll";

export const AboveTheFold = () => {
  const { requestedQuery} = useAll(
    "event",
    "events/1"
  );

  const eventQuery: EventType= requestedQuery.data

  return (
    <Center>
      <Box mx="2em" >
        <Heading
          textAlign={"center"}
          textColor={"white"}
          fontWeight={"extrabold"}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          letterSpacing="tighter"
        >
          JOIN WORLD'S LARGEST
        </Heading>
        <Heading
          textAlign={"center"}
          mb="0.5em"
          textColor={"conf.red.500"}
          fontWeight={"extrabold"}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
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
          <Text textColor={"white"} textAlign="center">
           {eventQuery && eventQuery.desc}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};
