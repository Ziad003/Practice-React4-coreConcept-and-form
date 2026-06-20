import { useState } from "react";

const PracticeField = () => {
    const [value,setValue]=useState('');
    const [error,setError]=useState('')
    const handleValue=(e)=>{
        setValue(e.target.value)
        console.log(e.target.value)
       
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Submitted")
         if(value.length+1<6){
            setError('Name should be al least 6 character')
        }else{
            setError('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleValue} defaultValue={value}/>
                <input type="submit" value="Submit"/>
            </form>
            <p style={{color:'red'}}><small>{error}</small></p>
        </div>
    );
};

export default PracticeField;