import React from 'react'
import UserList from './UserList';
import { Box ,Flex} from '@chakra-ui/layout'
import { lineChartDataCharts2,lineChartOptionsCharts2 } from '../graph/Chart.jsx';
import LineChart from '../graph/LineChart';

const UserListing = () => {
  return (
    <>

    <Box>
    
      <LineChart
                chartData={lineChartDataCharts2}
                chartOptions={lineChartOptionsCharts2}
      />
    </Box>
    <Box ml="5%" w='90%' m ={50} p={4} backgroundColor="white" borderRadius="20px">
    <UserList></UserList>
    </Box>

    </>
  )
}

export default UserListing;