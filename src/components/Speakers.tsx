import {
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getAll } from "../API/getAll";
import { SpeakerType } from "../API/models/SpeakerType";

export const Speakers = () => {
  const speakersQuery = useQuery("speakers", () => getAll("speakers"));

  return (
    <>
      <Center mb="1em" textColor={"white"}>
        <Heading fontWeight={"extrabold"} letterSpacing="wide">
          SPEAKERS
        </Heading>
      </Center>
      <Center>
        <SimpleGrid spacing={2} columns={[1, 1, 3, 3, 5]}>
          {speakersQuery.data &&
            speakersQuery.data.map((speaker: SpeakerType, index: number) => {
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
