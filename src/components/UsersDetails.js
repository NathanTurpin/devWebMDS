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
      detail user : {params.userid}
      {user.name}
    </div>
  );
}
