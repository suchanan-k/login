import React,{useState} from 'react';
import './App.css';


function App() {
  
  
  const [login, setLogin] = useState({
    username:'',
    password:''
  })
  const [isPasswordShown, setIsPasswordShown] = useState('')


  const handleChange= (e)=>{
    const { name, value } =e.target;
    setLogin(prevValue =>{
      return {
        ...prevValue,
        [name]:value
      }
    })
  }


  
  const togglePassword = () =>{
    setIsPasswordShown({isPasswordShown: !isPasswordShown})

  }

  const handleClick = (e)=>{
    
    e.preventDefault();
    setLogin({
      username:'',
      password:''
    })
    if (login.password === 'P@$$W0RD'){
      alert("ยินดีต้อนรับ " +  login.username)
        }
        else {
          alert('รหัสผ่านไม่ถูกต้อง')
        }
      }

  return (
    <div className="App" >
    
      <h1 >LOGIN</h1>
      <form >
        <input 
        required
        placeholder="username"
        name="username"
        value={login.username}
        onChange={handleChange}
        type="text"
        />
        <div>
        <input 
        required
        placeholder="password"
        name="password"
        value={login.password}
        onChange={handleChange}
        type={(isPasswordShown) ? "text": "password"}
        />
        <i 
        className="fa fa-eye" 
        onClick={togglePassword}
        />
        </div>

        <button 
        type="submit"
        onClick={handleClick} 
        >LOGIN
        </button>
      </form>
      </div>
  );
}

export default App;

