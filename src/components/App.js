import React, { Component, useState } from "react";
import "../styles/App.css";
let list = ["pratik", "praksh", "tamhane"];
function App() {
  const [data, setdata] = useState(list);

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key={"relativeList"}>
        {data.map((ele, index) => {
          let no = index + 1;
          return <li key={"relativeListItem" + no}>{ele}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
