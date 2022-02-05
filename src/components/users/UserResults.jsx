import React from "react";
import { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";


export default function UserResults() {

    const {users,isLoading,fetchUsers}= useContext(GithubContext)
// console.log(users,'from user resultrs')
//   useEffect(() => {
//     fetchUsers();
//   }, []);

 
  if (!isLoading) {
    return <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
    {users.map((user) => <UserItem user={user}></UserItem>)}
      </div>
    
  } else {
    return <Spinner/>
  }
}
