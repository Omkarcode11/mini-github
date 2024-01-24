import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <div onClick={showRepoDetail} >
      <h3>{repo.name}</h3>
      <span>{repo.visibility}</span>
      <div>{repo.description}</div>
    </div>
  );
}

export default Repos;
