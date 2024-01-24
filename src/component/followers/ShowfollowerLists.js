import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import GetApi from '../../hooks/GetApi'
import UserCard from '../userCard/UserCard'
import './showfollowerList.css'

function ShowFollowersLists() {
  let params = useParams()
  let navigate = useNavigate()
  const [followers,setFollowers] = useState([])
   
  async function getFollowers(userName){

    let data = await GetApi(`${userName}/followers`)
    console.log(data)
    if(!data){
      navigate("/")
    }else{
      setFollowers(data)
    }
  }

  console.log(followers)
  useEffect(()=>{
    getFollowers(params.username)
  },[])

  return (
    <div className='followerList'>
     {followers.length?(
      followers.map((ele)=><UserCard name={ele.login} avatar={ele.avatar_url}/>)

     ):(<h1>No Follower</h1>)}

    </div>
  )
}

export default ShowFollowersLists