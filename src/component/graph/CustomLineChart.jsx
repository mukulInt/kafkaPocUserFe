import {React,useEffect} from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import LineChart from '../graph/LineChart';
import useApiRequest from "../../util/customhook/UseApiRequest";

const CustomLineChart = ({data,chartData,timeData}) => {
    const { colorMode, toggleColorMode } = useColorMode();




    const lineChartDataCharts2 = chartData && chartData;

    const lineChartOptionsCharts2 = {
        chart: {
          toolbar: {
            show: false
          }
        },
        tooltip: {
          theme: "dark"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          categories:timeData,
          labels: {
            style: {
              colors: "#c8cfca",
              fontSize: "12px"
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: "#c8cfca",
              fontSize: "12px"
            }
          }
        },
        legend: {
          show: false
        },
        grid: {
          strokeDashArray: 5,
          yaxis: {
            lines: {
              show: true
            }
          },
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0.8,
            opacityTo: 0,
            stops: []
          },
          colors: ["#4FD1C5", "#2D3748"]
        },
        colors: ["#4FD1C5", "#2D3748"]
      };
    



  return (
    <Box  ml="5%" mb="2%"
        w="90%"
        p={4}
        backgroundColor={colorMode === "light" ? "white" : null}
        borderRadius="20px">
      {data && <LineChart
                chartData={lineChartDataCharts2}
                chartOptions={lineChartOptionsCharts2}
      />}
      </Box>
  )
}

export default CustomLineChart