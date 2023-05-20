import { useContext, useEffect } from "react";
import useTitles from "../../shared/useTitles";
import { AuthContext } from "../../Providers/AuthProviders";

const MyToys = () => {
  const {user}= useContext(AuthContext)
  useTitles('My Toys |')
  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
      .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  },[])
  return (
    <div>
      my toys
    </div>
  );
};

export default MyToys;