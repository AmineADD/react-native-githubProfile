import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-arround",
    alignItems: "center",
    margin: "10px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    borderRadius: "100%",
    width: 100,
    height: 100,
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
