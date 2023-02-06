import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";

export const AboveTheFold = () => {
  return (
    <Center>
      <Box mx="2em" >
        <Heading
          textAlign={"center"}
          textColor={"white"}
          fontWeight={"extrabold"}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          letterSpacing="tighter"
        >
          JOIN WORLD'S LARGEST
        </Heading>
        <Heading
          textAlign={"center"}
          mb="0.5em"
          textColor={"conf.red.500"}
          fontWeight={"extrabold"}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"70%"}
          letterSpacing="tighter"
        >
          JAVASCRIPT COMMUNITY
        </Heading>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Text textColor={"white"} textAlign="center">
            A 3-day JavaScript Celebration together with 2139 JavaScript
            Developers. Packed with the Latest JavaScript Updates by Authors,
            Creators and Experts.
            <br></br>
            <br></br>
            45 talks to stay on top of the latest topics like Vue3, Angular 15,
            React 18, Qwik, Vite, AuthZ, Demystifying Protocol Buffers and gRPC.
            Your chance get in touch with Creators and Maintainers from Vue,
            Astro, Nuxt, Angular, Vite and Storybook.
            <br></br>
            <br></br>
            You will be provided with technical updates on the largest and
            hottest technologies alongside case studies on how to tackle your
            developer challenges. Purchase your 1 day ticket valid on 8th
            February to be provided with a wide Variety of 15 unique pieces of
            content helping you make good choices as a JavaScript Developer Join
            for 3 Full Days on 8,9 and 10 February and also be part of the
            Largest and Most Special Vue Conference on the Planet, Vuejs
            Amsterdam attended by the Creator of Vite and Vue, Evan You and Core
            Team members bringing you the latest in Vue's Eco System.
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};
