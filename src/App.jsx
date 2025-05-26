import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setData(response.data);
        setLoading(false);
        // throw new Error("Something went wrong!");
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //       setLoading(false);
  //       // throw new Error("Something went wrong!");
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //       setError("Failed to fetch data");
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  // if (error) {
  //   return <p>{error}</p>;
  // }

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
