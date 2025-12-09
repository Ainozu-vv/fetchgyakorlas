import React, { useState, useEffect } from "react";

const FetchAndDelete = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        setData(data.filter((item) => item.id !== id));
      }
    });
  };
  return (
    <ul>
      {data &&
        data.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleDelete(item.id)}>Törlés</button>
          </li>
        ))}
    </ul>
  );
};

export default FetchAndDelete;
