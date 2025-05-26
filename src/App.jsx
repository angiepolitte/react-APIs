import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <div>
        <h2>API's</h2>
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <p>
                <strong>{post.title}</strong>
              </p>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
