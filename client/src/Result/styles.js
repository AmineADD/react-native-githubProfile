import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-arround",
    padding: "2px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-arround",
    flexWrap: "wrap",
  },
  img: {
    borderRadius: "100%",
    width: 100,
    height: 100,
  },
  smallImg: {
    borderRadius: "100%",
    width: 32,
    height: 32,
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
