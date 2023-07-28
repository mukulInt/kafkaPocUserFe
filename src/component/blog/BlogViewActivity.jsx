import {React , useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getAllBlogActivityApiEndPoint } from '../../common/ApiInfo';
import useApiRequest from '../../util/customhook/UseApiRequest';

import { Flex } from '@chakra-ui/layout';



const BlogViewActivity = () => {

    const {id} = useParams();

    // const url = getAllBlogActivityApiEndPoint+"/"+id

    // const { data, isLoading, error,fetchData } = useApiRequest("GET",url);

    // useEffect(() => {
    //     fetchData();
    //   }, []);

    // console.log(data)

    return (
        <Flex gap='2'>
             {/* <BlogView blogDetails={data?.blogLogResponseDto}/>
             <BlogActivity activities={data?.blogActivities}/> */}

             <h1>hey its woking</h1>
        </Flex>
    )
}

export default BlogViewActivity