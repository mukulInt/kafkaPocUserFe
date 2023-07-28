import React from "react";
import { Spinner, Center } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";

const Loader = () => {
  return (
    <Box>
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    </Box>
  );
};

export default Loader;
