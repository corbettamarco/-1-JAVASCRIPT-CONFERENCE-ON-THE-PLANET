import { Heading, Tab, Text, VStack } from "@chakra-ui/react";
import { DayType } from "../API/models/DayType";

type SingleTabProps = {
  singleTab: DayType;
  index: number;
  selected: number;
  setSelected: (tab: number) => void;
};

export const SingleTab = ({
  singleTab,
  index,
  selected,
  setSelected,
}: SingleTabProps) => {
  return (
    <Tab
      _selected={{
        bgColor: "transparent",
        borderBottomWidth: "2px",
        borderBottomColor: "conf.red.500",
      }}
      borderBottom="2px"
      borderColor={"#404040"}
      onClick={() => setSelected(index)}
    >
      <VStack
        my="0.5em"
        _hover={{
          textShadow: " 0 0 1px #7CDCB9, 1px -1px 2px #7CDCB9, 0 1px 4px #7CDCB9",
        }}
        spacing={1}
      >
        <Heading
          w="25vw"
          fontSize={"1.5em"}
          textColor={selected === index ? "conf.red.500" : "white"}
        >
          DAY {index + 1}
        </Heading>
        <Text
          textColor="white"
          _hover={{
            textShadow:
              " 0 0 1px #7CDCB9, 1px -1px 2px #7CDCB9, 0 1px 4px #7CDCB9",
          }}
          fontWeight="light"
          textShadow={
            selected === index
              ? " 0 0 1px #7CDCB9, 1px -1px 2px #7CDCB9, 0 1px 4px #7CDCB9"
              : ""
          }
        >
          {singleTab && singleTab.date}
        </Text>
      </VStack>
    </Tab>
  );
};
