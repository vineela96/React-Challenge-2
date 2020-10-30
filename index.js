import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import users from "./users-data";

/**
 * Our React component where we display data
 * -----------------------------
 */
function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Loop Over an Array of Data</h2>
      </div>

      {/* Iterate over imported array in userData */}
      <div className="users">
       {/* display data here*/}
        {/* Display each data in array in a card */}
        {/* Each card must have a 'key' attribute */}
        {users.map((user,index)=>(
          <div>
            <h3>{user.name}</h3>
            <h3>{user.location}</h3>
            <h3>{user.car}</h3>
          </div>
        ))}
      </div>
      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
