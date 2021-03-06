import "./App.css";
import BasicButton from "../Button/index.js";
import Header from "../Header/index.js";
import Footer from "../Footer/index.js";
import FormPage from "../FormPage/index.js";
// import FormInput from "../FormInput/index.js";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header title={"Support Ukraine"} />
      <div>
        <h3>
          As conflict continues to escalate in Ukraine, millions of children and
          their families are in danger.
        </h3>
        <p>Here's how you can help, by either giving or requesting </p>
      </div>
      {/* <Routes>
        <Route path="givethings" element={<FormPage />} />

      </Routes> */}
      <BasicButton text={"give things"}></BasicButton>
      <BasicButton text={"request things"}></BasicButton>
      <Footer />
    </div>
  );
}

export default App;
