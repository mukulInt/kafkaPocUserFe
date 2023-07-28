import {React,useEffect} from "react";
import BlogChart from "./BlogChart";
import { Box, Flex } from "@chakra-ui/layout";
import BlogList from "./BlogList";
import { useColorMode } from "@chakra-ui/color-mode";
import Bar from "../graph/Bar";
import addNotification from "react-push-notification";
import { Button } from "@chakra-ui/button";
import LineChart from '../graph/LineChart';
import { lineChartOptionsCharts2 } from '../graph/Chart.jsx';
import useApiRequest from "../../util/customhook/UseApiRequest";
import { getAllBlogStatApiEndPoint } from "../../common/ApiInfo";
import CustomLineChart from "../graph/CustomLineChart";


const Blog = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { data, isLoading, error, fetchData } = useApiRequest("GET",getAllBlogStatApiEndPoint);

    useEffect(() => {
      fetchData();
    }, []);

    const chartData = [data?.blogPost,data?.blogView];
    const timeData =  data?.dates;

  return (
    <>
      <CustomLineChart data={data} chartData={chartData} timeData={timeData}/>

      <Box
        ml="5%"
        w="90%"
        p={4}
        backgroundColor={colorMode === "light" ? "white" : null}
        borderRadius="20px"
      >
        
        <Button onClick={()=>{
          console.log("clicked!!")
          addNotification({
            title:"Test Title",
            message:"Test message",
            duration:4000,
            icon:null,
            native:true
          })
        }}>Notify me</Button>

        <BlogList />
      </Box>
    </>
  );
};

export default Blog;
