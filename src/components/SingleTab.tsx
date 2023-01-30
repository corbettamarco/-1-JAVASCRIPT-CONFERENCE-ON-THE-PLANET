import { Tab, Text, VStack } from "@chakra-ui/react";

type SingleTabProps = {
  singleTab: any;
  index: number;
};

export const SingleTab = ({ singleTab, index }: SingleTabProps) => {
  return (
    
    <Tab>
    <VStack mt="2em">
      <Text textColor="red.500">Day {index + 1}</Text>
      <Text textColor="#79CFAF">{singleTab && singleTab.date}</Text>
    </VStack>
    </Tab>
  );
};
