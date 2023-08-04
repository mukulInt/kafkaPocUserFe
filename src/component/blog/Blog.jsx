import { React, useEffect,useState } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import useApiRequest from "../../util/customhook/UseApiRequest";
import { getAblogEndPoint } from "../../common/ApiInfo";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { likeBlogEndPoint } from "../../common/ApiInfo";

export default function Blog() {
  const { data, isLoading, error, fetchData,setData } = useApiRequest(
    "POST",
    getAblogEndPoint
  );

  const { data:likeData, isLoading:likeIsLoading, error:likeError, fetchData:likeFetchData,setData:likeSetData } = useApiRequest(
    "POST",
    likeBlogEndPoint
  );

  const [like,setLike]=useState()


  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const token = localStorage.getItem("token");
    const payload = {
      id: id,
    };
    const header = { Authorization: token };

    fetchData(payload, header);
    
  }, []);

  useEffect(()=>{
    setData(likeData)
  },[likeData])
  

  console.log("blog view ",id)


  const likeHandler=()=>{
  const payload=  {
      id: id,
      reacted: true,
      reactionValue: 1
    }

    const token = localStorage.getItem("token");

    const header = { Authorization: token };

    likeFetchData(payload, header);
  }

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={
              "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {data?.data?.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {data?.data?.createdByName}
            </Text>
          </Box>

          <Flex about="center" justify="space-around">
            <Box>
              <Text
                color={useColorModeValue("gray.600", "gray.200")}
                fontWeight={300}
                fontSize={"m"}
                align="centerb"
              >
                Views : {data?.data?.views}
              </Text>{" "}
            </Box>
            <Box>
              <Box>
                <Text
                  color={useColorModeValue("gray.600", "gray.200")}
                  fontWeight={300}
                  fontSize={"m"}
                >
                   
                  Likes : {data?.data?.reactionCount}{" "}
                  { data?.data?.ownReaction === -1 ? (
                    <FavoriteBorderOutlinedIcon
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={()=>{ likeHandler();  
                         console.log("blog liked")}}
                    />
                  ) : (
                    <FavoriteOutlinedIcon
                      style={{ color: "red" }}
                    />
                  )}
                </Text>{" "}
              </Box>
            </Box>
          </Flex>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              {/* <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore
              </Text> */}
              <Text fontSize={"lg"}>{data?.data?.description}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Tags
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{" "}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
