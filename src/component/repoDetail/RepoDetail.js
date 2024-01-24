import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import copy from 'clipboard-copy';
import './repodetail.css'

function RepoDetail() {
  const [repoDetail, setRepoDetail] = useState({});
  const [isCopy,setCopy] = useState(false)
  const navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    let repo = localStorage.getItem("currentRepo");
    if (!repo) navigate("/");
    repo = JSON.parse(repo);

    if (repo && repo.name == params.reponame) {
      setRepoDetail(repo);
    } else {
      navigate("/");
    }
  }, []);
   console.log(repoDetail)

   async function copyText(){
    try {
      await copy(repoDetail.git_url);
      console.log('Text copied to clipboard');
    } catch (error) {
      console.error('Unable to copy to clipboard', error);
    }
      setCopy(true);

      setTimeout(() => {
        setCopy(false);
      }, 1500);
    }


  return <div className="repoDetail">
    <div>

    <h1>{repoDetail.name}</h1>
    <div>{new Date(repoDetail.created_at).toDateString()}</div>
    <div>forks : {repoDetail.forks}</div>
    <div>{repoDetail.full_name}</div>
    <div>
      <span>{repoDetail.git_url}</span>
    <button onClick={copyText}>{isCopy?"Copied":"Copy"}</button>
    </div>
    <div>{repoDetail.language}</div>
    <div>{repoDetail.description}</div>
    <div>{repoDetail.topics && repoDetail.topics.join(" ")}</div>
    </div>
  </div>;
}

export default RepoDetail;
