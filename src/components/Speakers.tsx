import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import { ParamsEnum } from "../API/models/ParamsEnum";
import { SpeakerType } from "../API/models/SpeakerType";
import { useAll } from "../hooks/useAll";

export const Speakers = () => {
  const { requestedQuery } = useAll("speakers", ParamsEnum.speakers);

  const speakersQuery: SpeakerType[] = requestedQuery.data;
  return (
    <>
      <Center mb="1em" textColor={"white"}>
        <Heading fontWeight={"extrabold"} letterSpacing="wide">
          SPEAKERS
        </Heading>
      </Center>

      {!requestedQuery.error && requestedQuery.isLoading && (
        <Center>
          <Spinner size={"xl"} m="10em" color="white" />
        </Center>
      )}
      {!requestedQuery.isLoading && requestedQuery.error && (
        <Center>
          <Box m="5em" fontSize="5em" mt="2em" p="1em" rounded="xl">
            <VStack>
              <InfoIcon w="2xl" textColor={"conf.red.500"} />
              <Heading textColor={"conf.red.500"}>
                Si è verificato un Errore
              </Heading>
            </VStack>
          </Box>
        </Center>
      )}

      <Center>
        <SimpleGrid spacing={2} columns={[1, 1, 3, 3, 4]}>
          {speakersQuery &&
            speakersQuery.map((speaker: SpeakerType, index: number) => {
              return (
                <Card
                  key={"speaker" + index}
                  w="16em"
                  bgColor="whiteAlpha.100"
                  mx="1em"
                  my="1em"
                  h="30em"
                >
                  <Image
                    borderTopRadius={"md"}
                    src={speaker.image}
                    w="16em"
                    h="15em"
                  />

                  <CardBody>
                    <Stack mt="1" spacing="3">
                      <Heading textColor="white" size="md">
                        {speaker.name}
                      </Heading>
                      <Text textColor={"conf.red.500"}>
                        {speaker.specialization}
                      </Text>
                      <Text color="white" fontSize="1xl" h="fit-content">
                        {speaker.description}
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              );
            })}
        </SimpleGrid>
      </Center>
    </>
  );
};
