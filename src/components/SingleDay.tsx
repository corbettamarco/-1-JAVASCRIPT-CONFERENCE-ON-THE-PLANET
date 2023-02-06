import { Center, List, TabPanel } from "@chakra-ui/react";
import { DayType } from "../API/models/DayType";
import { TrackType } from "../API/models/TrackType";
import { useAll } from "../hooks/useAll";
import { Track } from "./Track";

type SingleDayProps = {
  day: DayType;
};

export const SingleDay = ({ day }: SingleDayProps) => {
  const { requestedQuery } = useAll(
    `tracks${day.id}`,
    `tracks?eventId=1&dayId=${day.id}&_sort=startHour&_order=asc`
  );

  const tracksQuery: TrackType[] = requestedQuery.data;

  return (
    <Center>
      <TabPanel mx="1em" my="2em" w={["100vw", "100vw", "80vw"]}>
        <List spacing={10}>
          {tracksQuery &&
            tracksQuery.map((track: TrackType, index: number) => {
              return <Track track={track} key={"track" + index} />;
            })}
        </List>
      </TabPanel>
    </Center>
  );
};
