import { useState, useEffect } from 'react';
import './App.css';

export function AsyncFetch({login}) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading("true");
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, [login]);

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  if (error) {
    return <pre>{JSON.Stringify(error, null, 2)}</pre>
  }
  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>{data.login}</h1>
      <img src={data.avatar_url} alt={data.login} />
    </div>
  );
}

