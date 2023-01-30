import {
  Card,
  CardBody, Heading,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";

export const Speaker = ({ speaker }: { speaker: any }) => {
  return (
    <Card w="15em" bg="black" mx="1em"  >
      <Image src={speaker.image} w="15em" />
      <CardBody>
        <Stack mt="4" spacing="3">
          <Heading  textColor="white" size="md">{speaker.name}</Heading>
          <Text textColor={"conf.red.500"}>{speaker.specialization}</Text>
          <Text color="white" fontSize="2xl">
            {speaker.description}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
