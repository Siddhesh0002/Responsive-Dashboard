import { Grid, Paper, Box, Text, Group } from "@mantine/core";
import React from "react";
import { OrdersData } from "./Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useStyles from "./Order.styles";

const Order = () => {
  const { classes } = useStyles();
  return (
    <Grid mt={10} align="center">
      {OrdersData.map((item, index) => {
        return (
          <Grid.Col xl={3} sm={12} lg={6} md={6} key={index}>
            <Paper p={20} shadow="md" className={classes.orderPaper}>
              <Group direction="column">
                <Text style={{ color: "#a0a5ae" }}>{item.name}</Text>
                <Text className={classes.itemHead}>{item.number}</Text>
              </Group>
              <Box
                style={{
                  backgroundColor: item.color,
                  padding: "10px 15px 10px 15px",
                  borderRadius: 200,
                }}
              >
                <FontAwesomeIcon icon={item.icon} style={{ color: "white" }} />
              </Box>
            </Paper>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default Order;
