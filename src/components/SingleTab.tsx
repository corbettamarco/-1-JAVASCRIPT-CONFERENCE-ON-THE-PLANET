import { Heading, Tab, Text, VStack } from "@chakra-ui/react";
import { DayType } from "../API/models/DayType";

type SingleTabProps = {
  singleTab: DayType;
  index: number;
};

export const SingleTab = ({ singleTab, index }: SingleTabProps) => {
  return (
    <Tab>
      <VStack
        py="1em"
        my="0.5em"
        _hover={{
          bgColor: "conf.red.700",
        }}
        borderRadius="xl"
      >
        <Heading w="25vw" textColor="conf.red.500">
          Day {index + 1}
        </Heading>
        <Text textColor="#79CFAF">{singleTab && singleTab.date}</Text>
      </VStack>
    </Tab>
  );
};
