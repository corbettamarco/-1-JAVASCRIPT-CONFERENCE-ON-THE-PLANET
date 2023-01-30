import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Heading, Spinner, TabList, TabPanels,
  Tabs, VStack
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getEvents } from "../API/getEvents";
import { SingleEvent } from "./SingleEvent";
import { SingleTab } from "./SingleTab";

export const EventList = () => {
  const query = useQuery("events", getEvents);
  return (
    <Box bgColor={"black"}>
      <>
        {!query.error && query.isLoading && (
          <Center>
            <Spinner size={"xl"} mt="10em" color="conf.red" />
          </Center>
        )}
        {!query.isLoading && query.error && (
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
          <Tabs colorScheme={"conf.red"}><Center>
            <TabList  >
              
              {query.data &&
                query.data.map((singleTab: any, index: number) => {
                  return (
                    <SingleTab
                      singleTab={singleTab}
                      index={index}
                      key={"singleTab" + index}
                    />
                  );
                })}
            </TabList></Center>

            <TabPanels>
              {query.data &&
                query.data.map((event: any, index: number) => {
                  return (
                    <SingleEvent event={event} key={"singleEvent" + index} />
                  );
                })}
            </TabPanels>
          </Tabs>
      </>
    </Box>
  );
};
