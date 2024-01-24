import { useState } from 'react';
import GetApi from '../../hooks/GetApi';
import {useNavigate} from 'react-router-dom'
import './searchbutton.css'

function SearchButton() {

  const [userName,setUserName] = useState('')
  const navigate = useNavigate()

async function handleSubmit(){
  localStorage.setItem('userName',userName)
  let data= await GetApi(userName)
  navigate(`/user/${userName}`)
}


  return (
    <div className="SearchButton">
      <div className='searchButtonInnerContainer'>
      <h1>Github Search</h1>
      <input className='searchInput' placeholder='Enter Username..' value={userName} onChange={(e)=>setUserName(e.target.value)} />
      <button onClick={handleSubmit} className='submitButton'>Submit</button>
      </div>
    </div>
  );
}

export default SearchButton;
