import './App.css'
import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import users from "../dataset.json"
import SearchBar from './components/SearchBar';

function App() {
  const [user, setUser] = useState([])
  const [filteredUser, setFilteredUser] = useState([])
  
  useEffect(()=>{
    try{
        setUser(users)
    }
    catch(e){
      console.error("user data not found")
    }
  },[])

  return (
    <div style={{ maxWidth: 250, margin: "40px auto", fontFamily: "sans-serif" }}>
      <SearchBar user={user} setFilteredUser={setFilteredUser} />
      <UserList users={!filteredUser.length>0?user:filteredUser} />
    </div>
  );
}

export default App
