import "./App.css";
import AddKeeper from "./components/addKeeper/AddKeeper";
import Header from "./components/header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowKeeper from "./components/showKeeper/ShowKeeper";

function App() {
  const [keeperList, setKeeperList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/getAll")
      .then((res) => setKeeperList(res.data));
  }, []);
  return (
    <div className="App">
      <Header />
      <AddKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
      <ShowKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
    </div>
  );
}

export default App;
