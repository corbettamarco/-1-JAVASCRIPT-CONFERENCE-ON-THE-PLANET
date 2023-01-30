import { List, ListItem, TabPanel, HStack, Center } from "@chakra-ui/react";
import { Speaker } from "./Speaker";
import { Track } from "./Track";

export const SingleEvent = ({ event }: { event: any }) => {
  return (
    <Center >
      <TabPanel w="fit-content" mx="2em">
        <List spacing={5}>
          {event &&
            event.tracks.map((track: any, index: number) => {
              return <Track track={track} key={"track" + index} />;
            })}
          <ListItem></ListItem>
        </List>
        <HStack mt="5em">
          {event &&
            event.speakers.map((speaker: any, index: number) => {
              return <Speaker speaker={speaker} key={"speaker" + index} />;
            })}
        </HStack>
      </TabPanel>
    </Center>
  );
};
