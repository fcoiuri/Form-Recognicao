import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
  },
  title: {
    marginTop: "7vh",
    fontWeight: 1000,
    textAlign: "center",
    fontSize: 18,
  },
  victimStatus: {
    marginTop: "2vh",
    textAlign: "center",
    fontSize: 16,
  },
  body: {
    padding: 10,
  },
  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    margin: "3vh 5vw 0 5vw",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableRowTitle: {
    flexDirection: "row",
    backgroundColor: "#A8A8A8",
    width: "100%",
  },
  tableColHeader: {
    alignContent: "center",
    width: "100%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColSecond: {
    width: "50%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColAnother: {
    width: "100%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  camera: {
    textTransform: "uppercase",
    fontWeight: 1000,
    fontSize: 14,
    textAlign: "center",
  },
  tableCellHeader: {
    margin: "auto",
    fontWeight: "bold",
    fontSize: 14,
  },
  tableCell: {
    margin: "auto",
    fontSize: 12,
  },
});
