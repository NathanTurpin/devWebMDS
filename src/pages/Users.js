import { useEffect, useState } from "react";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadusers();
  }, []);
  function loadusers() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              {user.name}

              <Link to={"/users/" + user.id}>Voir</Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
