import React from "react";
import {useNavigate} from 'react-router-dom'

function UserCard({ name, avatar }) {
    let navigate = useNavigate()
    function getFollowerDetails(){
         navigate(`/user/${name}`)
    }
  return (
    <div onClick={getFollowerDetails}>
      <img src={avatar} width={"100rem"} height={"100rem"} />
      <div>{name}</div>
    </div>
  );
}

export default UserCard;
