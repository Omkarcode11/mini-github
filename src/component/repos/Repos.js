import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './repos.css'


function Repos({ repo }) {
  let navigate = useNavigate();
  // const history = useHistory();
  async function showRepoDetail() {
    const objectString = JSON.stringify(repo);
    localStorage.setItem("currentRepo", objectString);
    navigate(`/repo/${repo.name}`)
  }

  useEffect(() => {
    if (!repo.name) {
      navigate("/");
    }
  }, []);

  return (
      <div className="reposContainer" onClick={showRepoDetail} >
      <div className="repoTitle">{repo.name} <span><img className="verify" src='/verify.svg' width={'20rem'} height={'20rem'}/></span></div>
      <span>{repo.visibility}</span>
      <div>{repo.description}</div>
    </div>
  );
}

export default Repos;
