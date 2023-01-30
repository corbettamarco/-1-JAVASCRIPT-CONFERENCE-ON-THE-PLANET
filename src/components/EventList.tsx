import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Heading,
  Spinner,
  TabList,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getAll } from "../API/getAll";
import { DayType } from "../API/models/DayType";
import { SingleDay } from "./SingleDay";
import { SingleTab } from "./SingleTab";

export const EventList = () => {
  const daysQuery = useQuery("days", () => getAll("days"));
  return (
    <Box mb="2em" >
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
        <Tabs  variant={"line"} colorScheme={"conf.red"}>
          <Center>
            <TabList >
              {daysQuery.data &&
                daysQuery.data.map((singleTab: DayType, index: number) => {
                  return (
                    <SingleTab
                      singleTab={singleTab}
                      index={index}
                      key={"singleTab" + index}
                    />
                  );
                })}
            </TabList>
          </Center>

          <TabPanels >
            {daysQuery.data &&
              daysQuery.data.map((day: DayType, index: number) => {
                return <SingleDay day={day} key={"singleDay" + index} />;
              })}
          </TabPanels>
        </Tabs>
      </>
    </Box>
  );
};
