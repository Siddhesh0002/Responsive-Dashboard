import React from "react";
import { Paper, Text, Box } from "@mantine/core";
import { Chart, ArcElement, Tooltip, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(ArcElement, Tooltip, Title);

const data = {
  datasets: [
    {
      data: [30, 30, 5, 20, 15],
      backgroundColor: ["#0083ff", "#2dce8a", "#f3365c", "#8292ab", "#faad42"],
    },
  ],

  labels: ["Blue", "Green", "Red", "Gray", "Orange"],
};

const Overview = () => {
  return (
    <>
      <Paper p={20} mt={20} style={{ borderRadius: 20 }} shadow="md">
        <Text style={{ fontSize: 25, color: "#5a5b5e", fontWeight: 600 }}>
          Overview
        </Text>
        <Box>
          <Doughnut data={data} />
        </Box>
      </Paper>
    </>
  );
};

export default Overview;
