import "./App.css";
import ControlledField from "./components/controlledField/ControlledField";
import PracticeField from "./components/controlledField/PracticeField";
import ProductManagement from "./components/productManagement/ProductManagement";
import Form from "./customFormHook/Form";
import Family from "./familyDrill/Family";

function App() {
  return (
    <>
      <h3>Simple form</h3>
      <Form></Form>
      <ControlledField></ControlledField>
      <br />
      <PracticeField></PracticeField>
      <Form></Form>
      <ProductManagement></ProductManagement>

      <Family></Family>
    </>
  );
}

export default App;
