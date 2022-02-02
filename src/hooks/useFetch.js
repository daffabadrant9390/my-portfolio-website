import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("The data you are looking for is not exist!");
        }
        return res.json();
      })
      .then((data) => {
        //   console.log(data.data);
        setData(data);
      });
  }, []);

  return { data };
};

export default useFetch;
