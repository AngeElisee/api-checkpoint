import axios from "axios";
import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";

const App = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUser(res.data));
  }, []);
  return (
    <div className="app">
      {listOfUser ? (
        listOfUser.map((user, index) => <UserList key={index} user={user} />)
      ) : (
        <div>
          <p>erreur de connexion</p>
        </div>
      )}
    </div>
  );
};

export default App;
