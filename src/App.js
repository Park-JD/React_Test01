import "./App.css";
import Page from "./Pages/page";

function App() {
  return (
    <div
      style={{
        margin: "0",
        padding: "0",
        width: "100%",
        height: "100vh",
        background:
          "url(https://pixabay.com/get/gb3a107412dd8883efd7fcba0aa236f93bfb290bace524d2fab7d6956f87d51202f1b00676baf9d691e1516a9a57b0f7281ab14561cd49644d2fd4d5545de8e922075d48710cec7e02b27ee61734d002b_1920.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Page />
    </div>
  );
}

export default App;
