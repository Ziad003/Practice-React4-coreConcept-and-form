import UseCustomFormHook from "./UseCustomFormHook";
const Form = () => {
  const [name, setName] = UseCustomFormHook("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={setName} defaultValue={name} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
