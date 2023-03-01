import { InfoIcon } from "@chakra-ui/icons";
import { Center, VStack, Heading, Box } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <Center h="98vh" overflow={"hidden"}>
      <Box m="5em" fontSize="5em" mt="2em" p="1em" rounded="xl">
        <VStack>
          <InfoIcon w="2xl" color={"conf.red.500"} />
          <Heading textColor={"conf.red.500"}>
            {error.statusText || error.message}
          </Heading>
        </VStack>
      </Box>
    </Center>
  );
};
