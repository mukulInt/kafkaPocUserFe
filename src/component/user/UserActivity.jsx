import {
    VStack,
    Heading,
    Box,
    Link,
    Container,
    BoxProps,
    Circle,
    Flex,
    useColorModeValue
  } from '@chakra-ui/react';
  import { FaTools } from 'react-icons/fa';
  // Here we have used react-icons package for the icons
  import { FiPackage, FiHome, FiBarChart2, FiCheckCircle } from 'react-icons/fi';
//   import  AiOutlineLike  from 'react-icons/fa';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import dateTimeFormatter from '../../util/DateTimeFormatter';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
  
  const UserActivity = ({activities}) => {
    const linkColor = 'blue.400';
    const linkHoverColor = 'blue.600';

    console.log(activities)
  
    return (
      <Container maxW="7xl" p={{ base: 2, sm: 10 }}>
        <VStack textAlign="start" align="start" mb={5}>
          <Box zIndex={5}>
            <Heading fontSize="4xl" fontWeight="600" my={5}>
              Recent Activites
            </Heading>
            <Box>
            {activities && activities?.map((activity)=>{

                const icon = activity?.activity==="like"?ThumbUpIcon
                :activity?.activity==="view"?RemoveRedEyeIcon
                :activity?.activity === "login"?LoginIcon
                :activity?.activity === "logout"?LogoutIcon
                :CreateIcon;

                return <MilestoneItem key={activity?.id} icon={icon} >
                  By User Id {activity?.activityBy} {' '}
                    At {dateTimeFormatter(activity?.activityAt)}
            
               </MilestoneItem>}
               )}
              
              {/* <MilestoneItem icon={CreateIcon}>
               ABC
            
               </MilestoneItem>
               <MilestoneItem icon={CreateIcon}>
               ABC
            
               </MilestoneItem> <MilestoneItem icon={CreateIcon}>
               ABC
            
               </MilestoneItem> <MilestoneItem icon={CreateIcon}>
               ABC
            
               </MilestoneItem> */}
            
            
            
            </Box>
          </Box>
        </VStack>
      </Container>
    );
  };
  
  interface MilestoneItemProps extends BoxProps {
    icon?: any;
    boxProps?: BoxProps;
    skipTrail?: boolean;
  }
  
  const MilestoneItem: React.FC<MilestoneItemProps> = ({
    icon = FiCheckCircle,
    boxProps = {},
    skipTrail = false,
    children,
    ...props
  }) => {
    const color = useColorModeValue('gray.700', 'gray.500');
    return (
      <Flex minH={20} {...props}>
        <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
          <Circle
            size={12}
            bg={useColorModeValue('gray.600', 'gray.500')}
            opacity={useColorModeValue(0.07, 0.15)}
          />
          <Box as={icon} size="1.25rem" color={color} pos="absolute" left="0.875rem" top="0.875rem" />
          {!skipTrail && <Box w="1px" flex={1} bg={color} my={1} />}
        </Flex>
        <Box pt={{ base: 1, sm: 3 }} {...boxProps}>
          {children}
        </Box>
      </Flex>
    );
  };
  
  export default UserActivity;