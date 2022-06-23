import React, { useState } from "react";
import { Paper, Text, Group, Button } from "@mantine/core";
import useStyles from "./Navbar.styles";
import { useMediaQuery } from "@mantine/hooks";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  const { classes } = useStyles();
  const matchesMd = useMediaQuery("(min-width: 1200px)", false);
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <Button
        variant="subtle"
        size="xl"
        style={{ padding: 10 }}
        onClick={() => setShowLinks(!showLinks)}
      >
        <FontAwesomeIcon icon={faBars} style={{ color: "white" }} size="xl" />
      </Button>
      {!matchesMd && showLinks ? (
        <Paper className={classes.activePaper} shadow="xl">
          <Group direction="column" spacing="xl">
            <Group style={{ display: "flex", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: "#626167",
                  marginTop: 10,
                }}
              >
                LUANDRY
              </Text>
              <Button onClick={() => setShowLinks(!showLinks)}>X</Button>
            </Group>
            <Text className={classes.linkName}>Dashboard</Text>
            <Text className={classes.linkName}>Poss</Text>
            <Text className={classes.linkName}>Orders</Text>
            <Text className={classes.linkName}>Order Status Screen</Text>
            <Text className={classes.linkName}>Expennse</Text>
            <Text className={classes.linkName}>Customer</Text>
            <Text className={classes.linkName}>Services</Text>
            <Text className={classes.linkName}>Reports</Text>
            <Text className={classes.linkName}>Tools</Text>
            <Text className={classes.linkName}>Logout</Text>
          </Group>
        </Paper>
      ) : null}
    </>
  );
};

export default Navigation;
