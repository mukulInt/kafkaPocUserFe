// import Image from 'next/image';
import { Image } from "@chakra-ui/react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

import dateTimeFormatter from "../../util/DateTimeFormatter";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Flex } from "@chakra-ui/layout";

export default function BlogView({ blogDetails }) {
  return (
    <Center py={6} w="90%">
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            // rounded={'lg'}
            height={230}
            width={"100%"}
            objectFit={"cover"}
          />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Blog
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {blogDetails?.title}
          </Heading>
          <Text color={"gray.500"}>{blogDetails?.description}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            alt={"Author"}
          />
          <Flex align="center" justify="space-between" w="100%">
            <Box >
              {/* <Stack direction={"column"} spacing={0} fontSize={"sm"}> */}
                <Text fontWeight={600} style={{textAlign:"left"}}>{blogDetails?.createdByName}</Text>
                <Text color={"gray.500"}>
                  {dateTimeFormatter(blogDetails?.createdAt)}
                </Text>
              {/* </Stack> */}
            </Box>

            <Box>
              {/* <Stack direction={"column"} spacing={0} fontSize={"s"}> */}
                <Text fontWeight={200} fontSize="12px">
                  {blogDetails?.totalViews} views
                </Text>
                <Text fontWeight={200} fontSize="12px">
                  {blogDetails?.totalLikes} likes
                </Text>
              {/* </Stack> */}
            </Box>
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
}
