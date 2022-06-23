import { createStyles } from "@mantine/styles";

export default createStyles(() => ({
  sidebarOpen: {
    borderRadius: 20,

    minHeight: "94vh",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    display: "flex",
    flexDirection: "column",

    marginLeft: 20,
    marginTop: 20,
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
  brandName: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
    paddingLeft: 20,
    marginLeft: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: 700,
    color: "#626167",
  },
  listItems: {
    marginTop: 40,
    paddingLeft: 15,
    marginLeft: 10,
  },
  unSelected: {
    marginBottom: 30,
    color: "#626167",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 600,
  },
  selected: {
    marginBottom: 30,
    color: "white",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 600,
    backgroundColor: "#0883f7",
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
}));
