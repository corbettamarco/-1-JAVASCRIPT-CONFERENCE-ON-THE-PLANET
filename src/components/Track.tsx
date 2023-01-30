import { TimeIcon } from "@chakra-ui/icons";
import {
  Heading,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TrackType } from "../API/models/TrackType";

export const Track = ({ track }: { track: TrackType }) => {
  return (
    <ListItem minW={"fit-content"}>
      <Stack
        direction={["column", "column", "column", "row", "row"]}
        mt="1em"
        textColor={"white"}
      >
        <HStack>
          <TimeIcon/>
          <Text fontWeight={"bold"} fontSize="1.5em" mr={"1em"} minW="fit-content">
            {track.hour}
          </Text>
        </HStack>
        <Image mx="1em" w={["10em","15em","15em","20em","10em",]} h={["10em","15em","15em","20em","10em",]} rounded={"lg"} src={track.image}></Image>
        <VStack alignItems={"left"} pl={{lg:"1em"}}>
          <Heading>{track.title}</Heading>
          <Text>{track.description}</Text>
        </VStack>
      </Stack>
    </ListItem>
  );
};
