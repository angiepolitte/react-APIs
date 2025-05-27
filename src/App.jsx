import { useEffect, useState } from "react";
import api from "./utils/api";

import "./App.css";

function App() {
  const [data, setData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    api.post("/posts", newPost).then((response) => {
      console.log("New Post Added: ", response.data);
      setData([response.data]);
    });
  };
  return (
    <>
      <div>
        <h2>API's in React</h2>
        <form onSubmit={handleSubmit}>
          <button type="submit">Add Post</button>
        </form>
      </div>
    </>
  );
}

export default App;

// axios.get

//  useEffect(() => {
//     setLoading(true);
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         console.log(response);
//         setData(response.data);
//         setLoading(false);
//         // throw new Error("Something went wrong!");
//       })
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//         setError("Failed to fetch data");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }
//   if (error) {
//     return <p>{error}</p>;
//   }

//fetch

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

// multiple get request

// useEffect(() => {
//     setLoading(true);
//     axios
//       .all([
//         axios.get("https://jsonplaceholder.typicode.com/posts"),
//         axios.get("https://jsonplaceholder.typicode.com/users"),
//       ])
//       .then(
//         axios.spread((posts, users) => {
//           console.log(posts);
//           console.log(users);
//           setData(posts.data);
//           setLoading(false);
//           // throw new Error("Something went wrong!");
//         })
//       )
//       .catch((error) => {
//         console.error("Error fetching data: ", error);
//         setError("Failed to fetch data");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }
//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <>
//       <div>
//         <h2>API's</h2>
//         <ul>
//           {data.map((post) => (
//             <li key={post.id}>
//               <p>
//                 <strong>{post.title}</strong>
//               </p>
//               <p>{post.body}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// interceptors

// axios.interceptors.request.use((request) => {
//   console.log("Starting Request", request);
//   return request;
// });
// axios.interceptors.response.use((response) => {
//   console.log("Response", response);
//   return response;
// });
