import { Group, Select } from "@mantine/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faUser, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <>
      <Group position="apart" style={{ marginRight: 30 }}>
        <Navigation />
        <Group style={{ position: "absolute", right: 20 }}>
          <FontAwesomeIcon
            icon={faCirclePlus}
            style={{ color: "white" }}
            size="lg"
          />
          <FontAwesomeIcon icon={faTag} style={{ color: "white" }} size="lg" />

          <FontAwesomeIcon icon={faUser} style={{ color: "white" }} size="lg" />
          <Select
            placeholder="Language"
            style={{ width: 120, border: "none", color: "#0083ff" }}
            data={[
              { value: "react", label: "React" },
              { value: "ng", label: "Angular" },
              { value: "svelte", label: "Svelte" },
              { value: "vue", label: "Vue" },
            ]}
          />
        </Group>
      </Group>
    </>
  );
};

export default Navbar;
