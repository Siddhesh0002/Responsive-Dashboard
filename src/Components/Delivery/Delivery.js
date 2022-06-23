import React from "react";
import {
  Group,
  Paper,
  Text,
  TextInput,
  Box,
  Select,
  Grid,
  Image,
} from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { DeliveryData } from "./Data";

const Delivery = () => {
  return (
    <>
      <Paper p={20} mt={20} style={{ borderRadius: 20 }} shadow="sm">
        <Group position="apart">
          <Text style={{ fontSize: 25, color: "#5a5b5e", fontWeight: 600 }}>
            Todays Delivery
          </Text>
          <Box style={{ display: "flex", gap: 10 }}>
            <TextInput
              placeholder="Search Here"
              icon={<FontAwesomeIcon icon={faSearch} />}
            />
            <Select
              placeholder="All Orders"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
            />
          </Box>
        </Group>
        <Grid mt={20}>
          {DeliveryData.map((item, index) => {
            return (
              <Grid.Col xl={4} sm={12} lg={6} md={6} key={index}>
                <Paper
                  style={{
                    borderRadius: 20,
                    borderLeft: `8px solid ${item.bColor}`,
                    borderRight: `1px solid ${item.bColor}`,
                    borderTop: `1px solid ${item.bColor}`,
                    borderBottom: `1px solid ${item.bColor}`,
                  }}
                  p={10}
                >
                  <Group position="apart">
                    <Text
                      style={{
                        fontSize: 15,
                        color: "#5a5b5e",
                        fontWeight: 700,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: "#5a5b5e",
                        fontWeight: 700,
                      }}
                    >
                      {item.number}
                    </Text>
                  </Group>
                  <Image src={item.img} width={30} height={30} mt={20} />
                </Paper>
              </Grid.Col>
            );
          })}
        </Grid>
      </Paper>
    </>
  );
};

export default Delivery;
