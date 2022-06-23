import { createStyles } from "@mantine/styles";

export default createStyles(() => ({
  activePaper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    top: 0,
    zIndex: 500,
    padding: 20,
  },
  unActivePaper: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    top: 0,
  },
  linkName: {
    fontSize: 20,
    color: "#626167",
    fontWeight: 600,
  },
}));
