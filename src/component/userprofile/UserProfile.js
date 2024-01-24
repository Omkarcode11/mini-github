import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GetApi from "../../hooks/GetApi";
import Repos from "../repos/Repos";
import './userProfile.css'

function UserProfile() {
  const params = useParams();
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({});
  const [repos, setRepos] = useState([]);

  async function getUserDetail(userName) {
    let user = localStorage.getItem(userName);
    if (user) {
      setUserDetail(JSON.parse(user));
    } else {
      let data = await GetApi(userName);
      if (!data) {
        navigate("/");
      } else {
        localStorage.setItem(userName, JSON.stringify(data));
        setUserDetail(data);
      }
    }
  }

  async function getRepos(userName) {
      let data = await GetApi(`${userName}/repos`);
      if (!data) {
        console.log("no repo available");
      } else {
        setRepos(data);
      }
  }

  async function showFollower(){
    navigate(`/followers/${params.username}`)

  }

  useEffect(() => {
    getUserDetail(params.username);

    getRepos(params.username);
  }, [true]);
  return (
    <div className="userProfileContainer">
      <div className="userDetail">
        <div className="userDetailInnerContainer">
          <div className="userAvatar">
        <img src={userDetail.avatar_url} width={"100rem"} height={"100rem"} />
          </div>
        <div className="details"><b>Name </b>: {userDetail.name}</div>
        <div className="details"><b>UserName</b> : {userDetail.login}</div>
        <div className="details"><b>bio</b> : {userDetail.bio}</div>
        <div className="follower details" onClick={showFollower}><b>followers</b> : {userDetail.followers}</div>
        <div  className="details"><b>following</b> : {userDetail.following}</div>
        <div className="details"><b>location</b> : {userDetail.location}</div>
        <div className="details"><b>public repos</b> : {userDetail.public_repos}</div>
        </div>
      </div>
      <div className="all-repos">
        {repos.length?repos.map((ele) => <Repos key={ele.id} repo={ele} />):<div>Loading...</div>}
      </div>
    </div>
  );
}

export default UserProfile;
