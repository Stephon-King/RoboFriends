import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    const myAsyncFunction = async () => {
      try {
        const apiResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await apiResponse.json();
        setRobots(users);
      } catch (rejectResponse) {
        console.log(rejectResponse);
      }
    };

    myAsyncFunction();
  }, []);

  const onSearchChange = (event) => {
    // This Is The Function That Modifies The SearchBox Component's State.
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });


  return !robots.length ? (
    <h1 className="tc f1">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="tc f1">RoboFriends</h1>

      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
