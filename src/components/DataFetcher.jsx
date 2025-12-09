import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Betöltés..</p>;

  return (
    <div>
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
