import customHook from "./customHook";

const Form = () => {
  const [name, setName] = customHook("");
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
