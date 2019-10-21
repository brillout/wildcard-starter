import {useState, useEffect} from 'react';

export default fetchData;

function fetchData(fetcher) {
  const [data, setData] = useState(null);

  useEffect(() => {fetch()}, []);

  return data;

  async function fetch() {
    setData(await fetcher());
  };
}
