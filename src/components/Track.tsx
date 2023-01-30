import { Center, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

export const Track = ({ track }: { track: any }) => {
  return (
    <>
        <HStack w="fit-content" mt="1em" textColor={"white"}>
          <Text  noOfLines={1}>{track.time}</Text>
          <Image src={track.image}></Image>
          <VStack>
            <Heading>{track.title}</Heading>
            <Text>{track.description}</Text>
          </VStack>
        </HStack>
    </>
  );
};
