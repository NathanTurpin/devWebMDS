import "./App.css";
import Tasks from "./pages/Tasks";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Users from "./pages/Users";
import UsersDetails from "./components/UsersDetails";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="commentaires" element={<Form />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:userid" element={<UsersDetails />} />
      </Routes>

      {/* <Tasks /> */}
    </div>
  );
}

export default App;
