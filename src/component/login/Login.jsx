
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
// import useState from 'react';
import { useState,useEffect } from 'react';
import useApiRequest from '../../util/customhook/UseApiRequest';
import { useNavigate } from 'react-router-dom';
import { loginEndPoint } from '../../common/ApiInfo';

const Login=()=> {

    const navigate = useNavigate();

    const { data, isLoading, error, fetchData } = useApiRequest("POST",loginEndPoint);

    const [username,setUsername] = useState();

    const [password,setPassword] = useState();
    const [isDataUpdated, setIsDataUpdated] = useState(false); // New state variable




    useEffect(() => {
        if (isDataUpdated) {
          // Here, we check if the data has been updated.
          setUsername('');
          setPassword('');
          setIsDataUpdated(false); // Reset the flag to false
          if (data?.message === 'SUCCESSFUL') {
            localStorage.setItem('token', data?.data?.token);
            navigate('/home');
          }
        }
      }, [data, isDataUpdated]);

    const signInHandler = async ()=>{

    const payload = {
        channel: "web",
        password: password,
        username: username
      }

      console.log(payload)

     await fetchData(payload);

    //   setUsername("")
    //   setPassword("")

    //   if(data?.message==="SUCCESSFUL"){
    //     localStorage.setItem("token",data?.data?.token);
    //     navigate("/home")
    //   }
    setIsDataUpdated(true); 

    }

    const passwordChangeHandler = (event)=>{
        setPassword(event.target.value)
    }

    const usernameChangeHandler = (event)=>{
        setUsername(event.target.value)
    }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={username} onChange={usernameChangeHandler} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={passwordChangeHandler}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} 
                onClick={signInHandler}
                >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Login;