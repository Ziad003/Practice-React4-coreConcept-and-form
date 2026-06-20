import { useState } from "react";


const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error,setError]=useState('')

  const handleChange = (e) => {
    e.preventDefault();
    console.log('Submitted')
  };

  const handlePassword=e=>{
    console.log(e.target.value)
    setPassword(e.target.value)
    if(password.length<6){
        setError('6 characters or longer password needed')
    }else{
        setError('')
    }
  }
  
  return (
    <div>
      <form onSubmit={handleChange}>
        <input type="text" name="name" placeholder="Name" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePassword}
          defaultValue={password}
        />
        <input type="submit" value="Submit" />
      </form>
      <p style={{color:'red'}}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
