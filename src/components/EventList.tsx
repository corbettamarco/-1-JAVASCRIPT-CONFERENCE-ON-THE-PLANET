import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Heading,
  Spinner,
  TabList,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { DayType } from "../API/models/DayType";
import { useAll } from "../hooks/useAll";
import { SingleDay } from "./SingleDay";
import { SingleTab } from "./SingleTab";

export const EventList = () => {
  const { requestedQuery: daysQuery } = useAll("days", "days?eventId=1");

  const days: DayType[] = daysQuery.data;

  const [selected, setselected] = useState<number>(0);
  return (
    <Box mb="2em">
      <>
        {!daysQuery.error && daysQuery.isLoading && (
          <Center>
            <Spinner size={"xl"} mt="10em" color="conf.red" />
          </Center>
        )}
        {!daysQuery.isLoading && daysQuery.error && (
          <Center>
            <Box
              m="5em"
              fontSize="5em"
              mt="2em"
              p="1em"
              rounded="xl"
              bgColor="conf.red"
            >
              <VStack>
                <InfoIcon w="2xl" textColor={"conf.red"} />
                <Heading textColor={"conf.red"}>
                  Si è verificato un Errore
                </Heading>
              </VStack>
            </Box>
          </Center>
        )}
        <Tabs variant={"line"}>
          <Center>
            <TabList borderBottomWidth={"0"}>
              <Flex
                minW={["90vw", "90vw", "auto", "auto"]}
                direction={["column", "column", "row", "row"]}
              >
                {days &&
                  days.map((singleTab: DayType, index: number) => {
                    return (
                      <SingleTab
                        singleTab={singleTab}
                        index={index}
                        key={"singleTab" + index}
                        selected={selected}
                        setSelected={setselected}
                      />
                    );
                  })}
              </Flex>
            </TabList>
          </Center>

          <TabPanels>
            {days &&
              days.map((day: DayType, index: number) => {
                return <SingleDay day={day} key={"singleDay" + index} />;
              })}
          </TabPanels>
        </Tabs>
      </>
    </Box>
  );
};
