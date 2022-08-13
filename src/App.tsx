import React from "react";
import { Home } from "./components/Home/";
import { PDFViewer } from "@react-pdf/renderer";
import { CreatePDF } from "./components/CreatePDF";

function App() {
  return (
    <React.Fragment>
      <Home />
      {/* <PDFViewer>
        <CreatePDF />
      </PDFViewer> */}
    </React.Fragment>
  );
}

export default App;
