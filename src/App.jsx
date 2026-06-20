import "./App.css";
import ControlledField from "./components/controlledField/ControlledField";
import PracticeField from "./components/controlledField/PracticeField";
import Form from "./customFormHook/Form";

function App() {
  return (
    <>
      <h3>Simple form</h3>
      <Form></Form>
      <ControlledField></ControlledField>
      <br />
      <PracticeField></PracticeField>
      <Form></Form>
    </>
  );
}

export default App;
