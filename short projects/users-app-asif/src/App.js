import React, { Fragment, useState, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import Header from "./components/Header";
import AllUser from "./components/User/AllUser";
import UserDetail from "./components/User/UserDetail";

const App = () => {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState("");
  const [gotAddUserValues, setGotAddUserValues] = useState();

  const history = useHistory();

  // Fetching Data for the first time
  useEffect(() => {
    fetchUserHandler();
  }, []);

  //fetching users here
  const fetchUserHandler = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      let loadedUser = [];

      // Transforming json data into simple array of objects
      for (const key in data) {
        loadedUser.push({
          id: data[key].id,
          name: data[key].name,
          username: data[key].username,
          email: data[key].email,
          phone: data[key].phone,
          city: data[key].address.city,
          company: data[key].company.name,
          website: data[key].website,
        });
      }

      setUsers(loadedUser);
    } catch (error) {
      console(error.message);
    }
  };

  const getSingleUser = (id) => {
    setSingleUser(users[id - 1]);
  };

  const getAddUserValue = (values) => {
    if (values) {
      let n = users.length;
      const newArray = [...users, { ...values, id: n + 1 }];
      setUsers(newArray);
      alert(
        `A new user, ${values.name} is Added. Successfully! Visit home page to see complete info of ${values.name}`
      );
      history.push("/");
    }
  };

  const deleteUser = (index) => {
    const newUsersArray = users.filter((id) => {
      return id.id !== index;
    });
    setUsers(newUsersArray);
  };

  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <AllUser
            users={users}
            getSingleUser={getSingleUser}
            deleteUser={deleteUser}
          />
        </Route>

        <Route path="/add-user" exact>
          <AddUser getAddUserValue={getAddUserValue} />
        </Route>

        <Route path="/user-detail/:id">
          <UserDetail singleUser={singleUser} />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default App;
