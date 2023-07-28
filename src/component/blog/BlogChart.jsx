import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const BlogChart = ()=> {
	
		const options = {
			animationEnabled: true,
            
			title:{
				text: "Daily Blog Post - Jul,2023"
			},
			axisX: {
                valueFormatString: "DD",
                interval: 1,
                intervalType: "day"
			},
			axisY: {
				title: "No of Blogs",
				// prefix: "$"
			},
			data: [{
				yValueFormatString: "#,###",
				// xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					
                  
					{ x: new Date(2017, 6,1), y: 10 },
					{ x: new Date(2017, 6,2), y: 12 },
					{ x: new Date(2017, 6,3), y: 13 },
					{ x: new Date(2017, 6,4), y: 5 },
					{ x: new Date(2017, 6,5), y: 19 },
					{ x: new Date(2017, 6,6), y: 20 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	
}
export default BlogChart;  