import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SearchButton from './component/searchButton/SearchButton';
import UserProfile from './component/userprofile/UserProfile';
import RepoDetail from './component/repoDetail/RepoDetail';
import ShowFollowersLists from './component/followers/ShowfollowerLists';

function App() {


  return (
    <BrowserRouter>
    
     <Routes>
        <Route path="/" element={<SearchButton/>} /> 
        <Route path="/user/:username" element={<UserProfile/>} /> 
        <Route path="/repo/:reponame" element={<RepoDetail/>} /> 
        <Route path='/followers/:username' element={<ShowFollowersLists/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
