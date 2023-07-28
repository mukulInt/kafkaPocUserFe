import ResizableBox from "./ResizableBox";
import useDemoConfig from "./useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

export default function Bar() {
  const { data, randomizeData } = useDemoConfig({
    series: 2,
    dataType: "ordinal",
  });

  const primaryAxis = React.useMemo(() => ({
    getValue: (datum) => datum.primary,
  }), []);

  const secondaryAxes = React.useMemo(() => [
    {
      getValue: (datum) => datum.secondary,
    },
  ], []);

   data = [
    {
      label: 'Series 1',
      data: [
        {
          primary: '2022-02-03T00:00:00.000Z',
          likes: 130,
        },
        {
          primary: '2022-03-03T00:00:00.000Z',
          likes: 150,
        },
      ],
    },
    {
      label: 'Series 2',
      data: [
        {
          primary: '2022-04-03T00:00:00.000Z',
          likes: 200,
        },
        {
          primary: '2022-05-03T00:00:00.000Z',
          likes: 250,
        },
      ],
    },
  ]

  return (
    <>
      {/* <button onClick={randomizeData}>Randomize Data</button> */}
      <br />
      <br />
      <ResizableBox>
        <Chart 
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>
    </>
  );
}
