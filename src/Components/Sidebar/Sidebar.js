import React, { useState } from "react";
import useStyles from "./Sidebar.styles";
import { List, Paper, Text } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { Dashboard } from "./Data";

const Sidebar = () => {
  const { classes } = useStyles();
  const [select, setSelect] = useState();

  return (
    <>
      <Paper className={classes.sidebarOpen}>
        <div className={classes.brandName}>
          <FontAwesomeIcon icon={faImage} size="xl" />
          <Text className={classes.heading}>LUANDRY</Text>
        </div>
        <div className={classes.listItems}>
          <List>
            {Dashboard.map((item, index) => {
              return (
                <List.Item
                  key={index}
                  icon={
                    <FontAwesomeIcon
                      icon={item.icon}
                      style={{ color: item.color }}
                    />
                  }
                  className={
                    select === index ? classes.selected : classes.unSelected
                  }
                  onClick={() => {
                    if (select === index) {
                      setSelect();
                    } else {
                      setSelect(index);
                    }
                  }}
                >
                  {item.name}
                </List.Item>
              );
            })}
          </List>
        </div>
      </Paper>
    </>
  );
};

export default Sidebar;
