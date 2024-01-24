import React from "react";
import {useNavigate} from 'react-router-dom'
import './usercard.css'

function UserCard({ name, avatar }) {
    let navigate = useNavigate()
    function getFollowerDetails(){
         navigate(`/user/${name}`)
    }
  return (
    <div className="userCard" onClick={getFollowerDetails}>
      <img src={avatar} width={"100rem"} height={"100rem"} />
      <div>{name}</div>
    </div>
  );
}

export default UserCard;
