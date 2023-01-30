import { Center, List, TabPanel } from "@chakra-ui/react";
import { DayType } from "../API/models/DayType";
import { TrackType } from "../API/models/TrackType";
import { Track } from "./Track";

type SingleDayProps={
  day:DayType
}

export const SingleDay = ({ day }: SingleDayProps) => {

  return (
    <Center >
      <TabPanel mx="1em" my="2em" w={["100vw","100vw","80vw"]} >
                
        <List spacing={10}>
          {day &&
            day.tracks.map((track: TrackType, index: number) => {
              return <Track track={track} key={"track" + index} />;
            })}
        </List>
      </TabPanel>
    </Center>
  );
};
