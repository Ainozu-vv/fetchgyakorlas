import React, { useState, useEffect } from "react";

const SingleData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Betöltés..</p>;

  return (
    <div>
      <ul>
        <li key={data.id}>{data.title}</li>
      </ul>
    </div>
  );
};

export default SingleData;
