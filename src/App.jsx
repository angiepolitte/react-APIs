import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <div>
        <h2>API's</h2>
        <p>Todo id: {data.id}</p>
        <p>User id: {data.userId}</p>
        <p>Todo title: {data.title}</p>
      </div>
    </>
  );
}

export default App;
