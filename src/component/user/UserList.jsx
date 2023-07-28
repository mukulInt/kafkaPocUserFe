import {React,useEffect} from 'react';

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box
  } from '@chakra-ui/react'
import {useNavigate } from "react-router-dom";
import useApiRequest from '../../util/customhook/UseApiRequest';
import { getAllUserApiEndPoint } from '../../common/ApiInfo';
import Loader from '../loader/Loader';
import UserDetails from "./UserDetails";

const UserList = () => {
    const navigate = useNavigate();

    const payload = {
        offset: 0,
        orderType: "desc",
        pageSize: 10,
        sortBy: "createdAt"
      }

    const { data, isLoading, error ,fetchData} = useApiRequest('GET', getAllUserApiEndPoint,payload);


    useEffect(() => {
    fetchData();
  }, []);

    const tableColumns = ["Id","User-Id","First-Name","Last-Name","Email","Profile-Id"];

    const fetchUserById = (userId) =>{
        console.log("yes it working ++ " + userId);
        navigate("/user-details/"+ userId);
    }

    const tableContent = <Tbody>
    {data?.data?.map((user)=>{
        return <Tr

        key={user.id}
        onClick={() => fetchUserById(user.userId)} // Pass a reference to the fetchUserById function
        style={{ cursor: "pointer" }}>

                <Td>{user.id}</Td>
                <Td>{user.userId}</Td>
                <Td>{user.firstName}</Td>
                <Td>{user.lastName}</Td>
                <Td>{user.email}</Td>
                <Td>{user.profileId}</Td>
                </Tr>
    })}            
    </Tbody>

    

  return (
    <>
    <Box>
      
    
        <TableContainer>
            <Table variant='striped'>
                <Thead>
                <Tr>
                    {tableColumns.map((column)=> <Th>{column}</Th>)}
                   
                </Tr>
                </Thead>

                {isLoading?<Loader/>: tableContent}

                
            </Table>
            </TableContainer>

            </Box>


        
    </>
  )
}

export default UserList;