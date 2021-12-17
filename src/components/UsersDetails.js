import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
export default function UsersDetails() {
  let params = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    loaduser();
  }, []);
  function loaduser() {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + params.userid)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
  }
  return (
    <div>
      <h5>detail user : {params.userid}</h5>
      <p>Name : {user.name}</p>
      <p>Email : {user.email} </p>
      <p>Phone : {user.phone}</p>
      <p>
        Address :{user.address.street}, {user.address.suite},{" "}
        {user.address.city} {user.address.zipcode}
      </p>
    </div>
  );
}
