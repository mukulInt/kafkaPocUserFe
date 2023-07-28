import {React,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import {getAUserEndPoint} from "../../common/ApiInfo"
import useApiRequest from "../../util/customhook/UseApiRequest";
import {
  Box,
  Flex,
  useColorModeValue,
  Badge,
  Button,
  Center,
  Heading,
  Image,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import UserActivity from './UserActivity';





    


   
export default function UserDetails() {
 

    const {id} = useParams();

        const { data, isLoading, error ,fetchData} = useApiRequest('GET', getAUserEndPoint+id );

        useEffect(() => {
            fetchData();
          }, []);
        
          const [userData, setUserData] = useState("");

          useEffect(() => {
            if (data?.data) {
              let userDetails = data?.data;
              console.log("yes");
              setUserData(userDetails);
            }
          }, [data]);


          console.log({userData})
        
 
  return (
   
      <Box>
      <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '800px' }}
        height={{ sm: '476px', md: '22rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={7}>
        <Flex flex={1} bg="blue.200"  >
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
    
            {userData.user?.firstName + " "+userData.user?.lastName}
           
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
          {userData.user?.profileId}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or
            <Link href={'#'} color={'blue.400'}>
              #tag
            </Link>
            me in your posts
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #music
            </Badge>
          </Stack>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            {/* <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              More Deatils
            </Button> */}
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
                            More Deatils

            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>

<Box display={"flex"} >
  
  <UserActivity activities={userData?.userActivityList}></UserActivity>
    

</Box>

      </Box>
      
      
    
    // </Box>
  );
}
